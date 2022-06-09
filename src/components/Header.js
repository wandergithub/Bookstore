import { Link } from 'react-router-dom';
import './style/header.css';
import profileIcon from '../assets/profileIcon.svg';

const Header = () => (
  <header className="header">
    <div className="div-1">
      <h1 className="h1">Bookstore CMS</h1>
      <Link to="/" className="link">BOOKS</Link>
      <Link to="/Categories" className="link">CATEGORIES</Link>
    </div>
    <div>
      <img src={profileIcon} alt="profile icon" className="profile-i" />
    </div>
  </header>
);

export default Header;
