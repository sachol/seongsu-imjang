import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Copy, Check, FileText, HelpCircle, ChevronLeft } from 'lucide-react';
import { themes, themeDetails } from '../data/themes';
import { checklists, interviewQuestions } from '../data/checklist';

function ThemeDetail() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  const theme = themes.find(t => t.id === id);
  const detail = themeDetails[id];
  const checklist = checklists[id];
  const questions = interviewQuestions[id];
  
  if (!theme) {
    return <div>테마를 찾을 수 없습니다.</div>;
  }

  // 간단한 프롬프트 예시
  const promptExample = `# Role (역할)
당신은 15년 경력의 ${theme.title} 전문 부동산 컨설턴트입니다.
성수동의 ${theme.subtitle}을(를) 분석하고,
공인중개사가 고객에게 설명할 수 있는 상세 리포트를 작성합니다.

# Mission (임무)
${theme.description}에 대해 분석하여:
1. 현황 및 특징 정리
2. 시장 동향 분석
3. 투자/임대 포인트
4. 리스크 분석
5. 고객 상담 Q&A

# 입력 데이터
- 분석 지역: 성수동 일대
- 분석 기준일: ${new Date().toISOString().split('T')[0]}
- 분석 목적: 임장 사전학습

# 출력 형식
공인중개사가 고객에게 설명하기 쉬운 언어로 작성해주세요.
`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptExample);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  return (
    <div>
      {/* 헤더 카드 */}
      <div className="card" style={{ 
        padding: 'var(--space-4)', 
        marginBottom: 'var(--space-4)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
          <div className={`theme-card__icon theme-card__icon--${theme.color}`} style={{ width: 56, height: 56, fontSize: '1.75rem' }}>
            {theme.icon}
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--space-1)' }}>
              {theme.title}
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
              {theme.subtitle}
            </p>
          </div>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
          {detail?.summary}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-3)' }}>
          {theme.keywords.map((keyword, i) => (
            <span key={i} className="badge badge--primary">{keyword}</span>
          ))}
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📋 개요
        </button>
        <button 
          className={`tab ${activeTab === 'prompt' ? 'active' : ''}`}
          onClick={() => setActiveTab('prompt')}
        >
          🤖 프롬프트
        </button>
        <button 
          className={`tab ${activeTab === 'checklist' ? 'active' : ''}`}
          onClick={() => setActiveTab('checklist')}
        >
          ✅ 체크리스트
        </button>
        <button 
          className={`tab ${activeTab === 'questions' ? 'active' : ''}`}
          onClick={() => setActiveTab('questions')}
        >
          ❓ 질문
        </button>
      </div>

      {/* 탭 콘텐츠 */}
      {activeTab === 'overview' && (
        <div className="card" style={{ padding: 'var(--space-4)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
            핵심 포인트
          </h3>
          <ul style={{ paddingLeft: 'var(--space-4)', fontSize: '0.875rem', lineHeight: 2 }}>
            {detail?.keyPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'prompt' && (
        <div>
          <div className="prompt-box">
            <div className="prompt-box__header">
              <span className="prompt-box__title">
                <FileText size={16} style={{ marginRight: 'var(--space-2)' }} />
                AI 프롬프트
              </span>
              <button className="copy-btn" onClick={handleCopy}>
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? '복사됨!' : '복사'}
              </button>
            </div>
            <pre className="prompt-box__content">{promptExample}</pre>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', textAlign: 'center' }}>
            💡 복사 후 ChatGPT, Claude, Gemini에 붙여넣기하세요
          </p>
        </div>
      )}

      {activeTab === 'checklist' && checklist && (
        <div className="card checklist">
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
            {checklist.title}
          </h3>
          {checklist.items.map((item) => (
            <div key={item.id} className="checklist__item">
              <div className="checklist__checkbox">
                <Check size={14} style={{ opacity: 0.3 }} />
              </div>
              <span className="checklist__label">{item.text}</span>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'questions' && questions && (
        <div className="card" style={{ padding: 'var(--space-4)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
            <HelpCircle size={16} style={{ marginRight: 'var(--space-2)' }} />
            부동산 인터뷰 질문
          </h3>
          <ul style={{ paddingLeft: 0, listStyle: 'none', fontSize: '0.875rem' }}>
            {questions.map((q, i) => (
              <li key={i} style={{ 
                padding: 'var(--space-3)', 
                borderBottom: '1px solid var(--gray-100)',
                lineHeight: 1.6
              }}>
                <span style={{ color: 'var(--primary)', fontWeight: 600, marginRight: 'var(--space-2)' }}>
                  Q{i + 1}.
                </span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ThemeDetail;
