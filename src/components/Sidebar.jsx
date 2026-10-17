import { NavLink } from 'react-router-dom';
import { FiHome, FiCompass, FiPlus, FiBookmark, FiUser } from 'react-icons/fi';
import { sidebarNav } from '../data/navigation.js';

const icons = { home: <FiHome />, explore: <FiCompass />, create: <FiPlus />, saved: <FiBookmark />, profile: <FiUser /> };

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {sidebarNav.map((item) => (
        <NavLink key={item.path} to={item.path} end title={item.label} aria-label={item.label} className={({ isActive }) => 'side-link' + (isActive ? ' active' : '')}>
          {icons[item.icon]}<small>{item.label}</small>
        </NavLink>
      ))}
    </aside>
  );
}
