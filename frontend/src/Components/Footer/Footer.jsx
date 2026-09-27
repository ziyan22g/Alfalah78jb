import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../../Config/Config';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container">
        {/* Organization & Village Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-icon">🌱</span>
            <h3>Al-Falah <span>Welfare</span></h3>
          </div>
          <p className="village-badge">📍 78 JB Jawaddi, Faisalabad</p>
          <p className="footer-desc">
            78 JB Jawaddi ki falahi tanzim jo gaon ke logon ki bunyadi zarooriyat aur taraqqi ke liye bila-muawza (Fi Sabilillah) kaam kar rahi hai.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col links-col">
          <h4>Zaroori Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Hamara Ta'aruf</Link></li>
            <li><Link to="/facilities">Gaon Ki Sahooliyat</Link></li>
            <li><Link to="/works">Falahi Khidmaat</Link></li>
            <li><Link to="/facilities#howToApply">Madad Ki Darkhwast</Link></li>
          </ul>
        </div>

        {/* Village Facilities */}
        <div className="footer-col facilities-col">
          <h4>78 JB Ki Sahooliyat</h4>
          <ul>
            <li>🏥 Free Dispensary & Medical Care</li>
            <li>💧 Saaf Peene Ka Paani (Filter Plant)</li>
            <li>📚 Mustahiq Bachon Ki Taleemi Imdad</li>
            <li>⚡ Gaon Ki Street Lights Ki Dekhbhal</li>
          </ul>
        </div>

        {/* Contact & Volunteer */}
        <div className="footer-col contact-col">
          <h4>Hamare Sath Jurrein</h4>
          <p>Kisi bhi maslay ki ittila, madad lene ya ba-hesiyat volunteer shamil hone ke liye rabta karein.</p>
          <div className="contact-links">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="footer-btn whatsapp"
            >
              💬 WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; 2026 Al-Falah Welfare Society (78 JB Jawaddi). Tamam huqooq mehfooz hain.</p>
          <p className="tagline">Fi Sabilillah Khidmat-e-Khalq</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };