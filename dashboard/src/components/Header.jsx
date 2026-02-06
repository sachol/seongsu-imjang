import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const getTitle = () => {
    const path = location.pathname;
    if (path === '/') return null;
    if (path.startsWith('/themes')) return '테마 분석';
    if (path.startsWith('/courses')) return '임장 코스';
    if (path === '/checklist') return '체크리스트';
    if (path === '/schedule') return '일정표';
    return 'RSA 성수 임장';
  };

  const title = getTitle();

  return (
    <header className="header">
      <div className="header__logo">
        <img 
          src="/logo.png" 
          alt="RSA 총동문회" 
          className="header__logo-img"
        />
        {title ? (
          <span className="header__title">{title}</span>
        ) : (
          <div>
            <div className="header__title">RSA 성수 임장</div>
            <div className="header__date">2026.02.22 (일)</div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

