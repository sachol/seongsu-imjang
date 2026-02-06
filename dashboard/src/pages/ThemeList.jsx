import ThemeCard from '../components/ThemeCard';
import { themes } from '../data/themes';

function ThemeList() {
  return (
    <div>
      <p style={{ 
        fontSize: '0.875rem', 
        color: 'var(--gray-600)', 
        marginBottom: 'var(--space-4)',
        lineHeight: 1.6
      }}>
        성수동의 4가지 핵심 테마를 분석하고,<br />
        AI 프롬프트로 맞춤 보고서를 생성해보세요.
      </p>
      
      {themes.map((theme) => (
        <ThemeCard key={theme.id} theme={theme} />
      ))}
    </div>
  );
}

export default ThemeList;
