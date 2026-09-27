import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { Sidebar } from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'; // Hamburger Icon
import { WHATSAPP_NUMBER } from '../../Config/Config';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  // 2. Scroll Lock Hook
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup agar component change ho jaye
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="navbar">
      {/* navbar  */}
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">🌱</span>
          <div className="logo-text">
            <h2>Al-Falah <span>Welfare</span></h2>
            <small>Fi Sabilillah Khidmat</small>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="nav-menu">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                Ta'aruf
              </NavLink>
            </li>
            <li>
              <NavLink to="/facilities" className={({ isActive }) => (isActive ? 'active' : '')}>
                Sahooliyat
              </NavLink>
            </li>
            <li>
              <NavLink to="/works" className={({ isActive }) => (isActive ? 'active' : '')}>
                Khidmaat
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Rabta
              </NavLink>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="nav-actions">
            <Link to="/facilities#howToApply" className="btn btn-outline">
              Madad Chahiye?
            </Link>
            {/* WhatsApp external link hai isliye yeh a tag hi rahega */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              WhatsApp Rabta
            </a>
          </div>

          <div className="menu-btn">
            <button className='btn' onClick={() => setIsOpen(true)}>
              <HiMenuAlt3 />
            </button>
          </div>

        </nav>
      </div>

      {/* overlay  */}
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={() => setIsOpen(false)}></div>

      {/* sidebar  */}
      <div className={`${isOpen ? 'sidebar-show' : 'sidebar-hide'}`}>
        <Sidebar closeMenu={() => setIsOpen(false)} />
      </div>

    </header>
  );
};

export { Navbar }

