import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function ThemeCard({ theme }) {
  return (
    <Link to={`/themes/${theme.id}`} className="card card--clickable theme-card">
      <div className={`theme-card__icon theme-card__icon--${theme.color}`}>
        {theme.icon}
      </div>
      <div className="theme-card__content">
        <div className="theme-card__title">{theme.title}</div>
        <div className="theme-card__desc">{theme.subtitle}</div>
      </div>
      <ChevronRight className="theme-card__arrow" size={20} />
    </Link>
  );
}

export default ThemeCard;
