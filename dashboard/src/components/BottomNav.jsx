import { NavLink } from 'react-router-dom';
import { Home, Layers, Map, CheckSquare, Calendar } from 'lucide-react';

function BottomNav() {
  const navItems = [
    { to: '/', icon: Home, label: '홈' },
    { to: '/themes', icon: Layers, label: '테마' },
    { to: '/courses', icon: Map, label: '코스' },
    { to: '/checklist', icon: CheckSquare, label: '체크' },
    { to: '/schedule', icon: Calendar, label: '일정' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          end={item.to === '/'}
        >
          <item.icon className="nav-item__icon" size={24} />
          <span className="nav-item__label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;
