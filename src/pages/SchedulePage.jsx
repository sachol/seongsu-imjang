import { Clock } from 'lucide-react';
import { schedule, guidelines, eventInfo } from '../data/schedule';

function SchedulePage() {
  return (
    <div>
      {/* 이벤트 정보 */}
      <div className="card" style={{ 
        padding: 'var(--space-4)', 
        marginBottom: 'var(--space-4)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>📅</div>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: 'var(--space-1)' }}>
          {eventInfo.title}
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
          {eventInfo.date} | {eventInfo.time}
        </p>
      </div>

      {/* 타임라인 */}
      <section className="section">
        <h3 className="section__title" style={{ marginBottom: 'var(--space-4)' }}>
          <Clock size={18} style={{ marginRight: 'var(--space-2)' }} />
          타임라인
        </h3>
        
        <div className="card timeline">
          {schedule.map((item, index) => (
            <div key={item.id} className="timeline__item">
              <div className={`timeline__dot ${item.isActive ? 'active' : ''}`}>
                {item.isActive ? '▶' : ''}
              </div>
              <div className="timeline__content">
                <div className="timeline__time">
                  {item.time} {item.endTime && `- ${item.endTime}`}
                </div>
                <div className="timeline__title">
                  {item.icon} {item.title}
                </div>
                <div className="timeline__desc">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 행동 수칙 */}
      <section className="section">
        <h3 className="section__title" style={{ marginBottom: 'var(--space-4)' }}>
          ⚠️ 임장 행동 수칙
        </h3>
        
        <div className="card" style={{ padding: 'var(--space-4)' }}>
          {guidelines.map((item) => (
            <div key={item.id} style={{ 
              display: 'flex', 
              gap: 'var(--space-3)', 
              marginBottom: 'var(--space-3)',
              alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: 'var(--space-1)' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 집결 장소 안내 */}
      <div className="card" style={{ 
        padding: 'var(--space-4)', 
        backgroundColor: 'var(--primary-bg)',
        border: '1px solid var(--primary)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: 'var(--space-2)' }}>
          📍 집결 장소
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--gray-700)' }}>
          {eventInfo.location}
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;
