import { NavLink, Link } from 'react-router-dom';
import { FaPinterest } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import SearchBar from './SearchBar.jsx';
import { mainNav } from '../data/navigation.js';
import { useApp } from '../context/AppContext.jsx';

export default function Navbar() {
  const { currentUser } = useApp();
  return (
    <header className="navbar">
      <Link to="/" className="logo" aria-label="Pinterest clone home"><FaPinterest /><span>Pinterest</span></Link>
      <nav className="nav-links">
        {mainNav.map((item) => (
          <NavLink key={item.path} to={item.path} end className={({ isActive }) => (isActive ? 'active' : '')}>{item.label}</NavLink>
        ))}
      </nav>
      <SearchBar />
      <Link to="/create" className="icon-btn" aria-label="Create pin"><FiPlus /></Link>
      <Link to="/profile" aria-label="Your profile"><img className="avatar" src={currentUser.avatar} alt={currentUser.name} /></Link>
    </header>
  );
}
