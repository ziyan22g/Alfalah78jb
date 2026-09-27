import React from 'react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import { HiX } from 'react-icons/hi'

const Sidebar = ({ closeMenu }) => {
    return (
        <>
            <div className="sidebar-container">
                {/* Logo */}
                <div className="sidebar-header">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <span className="logo-icon">🌱</span>
                        <div className="logo-text">
                            <h2>Al-Falah <span>Welfare</span></h2>
                            <small>Fi Sabilillah Khidmat</small>
                        </div>
                    </Link>
                    <button
                        className="sidebar-close-btn"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <HiX />
                    </button>
                </div>


                {/* Navigation Links */}
                <nav className="nav-menu">
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                                Ta'aruf
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/facilities" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                                Sahooliyat
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/works" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                                Khidmaat
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                                Rabta
                            </NavLink>
                        </li>
                    </ul>

                    {/* Action Buttons */}
                    <div className="nav-actions">
                        <Link to="/facilities#howToApply" onClick={closeMenu} className="btn btn-outline">
                            Madad Chahiye?
                        </Link>
                        {/* WhatsApp external link hai isliye yeh a tag hi rahega */}
                        <a
                            href="https://wa.me/923260781878"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                            onClick={closeMenu}
                        >
                            WhatsApp Rabta
                        </a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export { Sidebar }