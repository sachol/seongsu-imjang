import { useParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { courses } from '../data/courses';

function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  
  if (!course) {
    return <div>코스를 찾을 수 없습니다.</div>;
  }

  const teamColors = {
    'team-1': '#3B82F6',
    'team-2': '#22C55E',
    'team-3': '#EAB308',
    'team-4': '#A855F7',
  };

  const color = teamColors[course.color];

  return (
    <div>
      {/* 헤더 카드 */}
      <div className="card" style={{ 
        padding: 'var(--space-4)', 
        marginBottom: 'var(--space-4)',
        borderLeft: `4px solid ${color}`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
          <span className={`course-card__badge course-card__badge--${course.color}`}>
            {course.team}
          </span>
          <span style={{ fontSize: '1.125rem', fontWeight: 700 }}>{course.theme}</span>
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
          총 {course.points.length}개 포인트
        </div>
      </div>

      {/* 코스 지도 이미지 */}
      {course.imageFile && (
        <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
            🗺️ 코스 지도
          </h3>
          <img 
            src={course.imageFile} 
            alt={`${course.team} 코스 지도`} 
            style={{ 
              width: '100%', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--gray-200)'
            }} 
          />
        </div>
      )}

      {/* 코스 포인트 목록 */}
      <div className="card" style={{ padding: 'var(--space-4)' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
          <MapPin size={16} style={{ marginRight: 'var(--space-2)', color }} />
          임장 경로
        </h3>
        
        <div style={{ position: 'relative' }}>
          {course.points.map((point, index) => (
            <div key={point.num} style={{ 
              display: 'flex', 
              gap: 'var(--space-3)',
              paddingBottom: 'var(--space-4)',
              position: 'relative'
            }}>
              {/* 연결 라인 */}
              {index < course.points.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '15px',
                  top: '32px',
                  bottom: '0',
                  width: '2px',
                  backgroundColor: 'var(--gray-200)'
                }} />
              )}
              
              {/* 포인트 넘버 */}
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: index === 0 || index === course.points.length - 1 ? color : 'var(--white)',
                border: `2px solid ${color}`,
                color: index === 0 || index === course.points.length - 1 ? 'white' : color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                flexShrink: 0,
                zIndex: 1
              }}>
                {point.num}
              </div>
              
              {/* 포인트 정보 */}
              <div style={{ flex: 1 }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-1)'
                }}>
                  <span style={{ fontSize: '1.25rem' }}>{point.icon}</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                    {point.name}
                  </span>
                </div>
                {(index === 0) && (
                  <span className="badge" style={{ backgroundColor: '#D1FAE5', color: '#059669' }}>
                    시작점
                  </span>
                )}
                {(index === course.points.length - 1) && (
                  <span className="badge" style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}>
                    종료점
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 안내 */}
      <p style={{ 
        fontSize: '0.75rem', 
        color: 'var(--gray-500)', 
        textAlign: 'center',
        marginTop: 'var(--space-4)'
      }}>
        💡 카카오맵이나 네이버맵으로 실시간 경로를 확인하세요
      </p>
    </div>
  );
}

export default CourseDetail;
