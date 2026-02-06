import { Link } from 'react-router-dom';
import { Calendar, Map, Layers, CheckSquare } from 'lucide-react';
import ThemeCard from '../components/ThemeCard';
import CourseCard from '../components/CourseCard';
import { themes } from '../data/themes';
import { courses } from '../data/courses';
import { schedule, eventInfo } from '../data/schedule';

function Home() {
  // 현재 진행 중인 일정 확인 (임장일 기준)
  const currentSchedule = schedule[0]; // 예시로 첫 번째
  
  return (
    <div>
      {/* 이벤트 배너 */}
      <div className="card" style={{ 
        padding: 'var(--space-4)', 
        marginBottom: 'var(--space-4)',
        background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
        color: 'white'
      }}>
        <div style={{ fontSize: '0.75rem', opacity: 0.9, marginBottom: 'var(--space-1)' }}>
          {eventInfo.date}
        </div>
        <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--space-1)' }}>
          {eventInfo.subtitle}
        </div>
        <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>
          📍 {eventInfo.location}
        </div>
      </div>

      {/* 빠른 메뉴 */}
      <div className="quick-actions">
        <Link to="/themes" className="quick-action">
          <div className="quick-action__icon">
            <Layers size={24} />
          </div>
          <span className="quick-action__label">테마 분석</span>
        </Link>
        <Link to="/courses" className="quick-action">
          <div className="quick-action__icon">
            <Map size={24} />
          </div>
          <span className="quick-action__label">임장 코스</span>
        </Link>
        <Link to="/checklist" className="quick-action">
          <div className="quick-action__icon">
            <CheckSquare size={24} />
          </div>
          <span className="quick-action__label">체크리스트</span>
        </Link>
        <Link to="/schedule" className="quick-action">
          <div className="quick-action__icon">
            <Calendar size={24} />
          </div>
          <span className="quick-action__label">일정표</span>
        </Link>
      </div>

      {/* 4개 테마 섹션 */}
      <section className="section">
        <div className="section__header">
          <h2 className="section__title">📚 4개 테마</h2>
          <Link to="/themes" className="section__link">전체보기</Link>
        </div>
        {themes.slice(0, 2).map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </section>

      {/* 조별 임장 코스 섹션 */}
      <section className="section">
        <div className="section__header">
          <h2 className="section__title">🗺️ 조별 코스</h2>
          <Link to="/courses" className="section__link">전체보기</Link>
        </div>
        {courses.slice(0, 2).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>

      {/* 오늘 일정 미리보기 */}
      <section className="section">
        <div className="section__header">
          <h2 className="section__title">📅 타임라인</h2>
          <Link to="/schedule" className="section__link">전체보기</Link>
        </div>
        <div className="card" style={{ padding: 'var(--space-4)' }}>
          {schedule.slice(0, 2).map((item) => (
            <div key={item.id} style={{ 
              display: 'flex', 
              gap: 'var(--space-3)', 
              marginBottom: 'var(--space-3)',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>
                  {item.time} - {item.endTime}
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
