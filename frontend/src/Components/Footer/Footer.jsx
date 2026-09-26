// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-top container">
//         {/* Karolo ya Boiketlo le Motse */}
//         <div className="footer-col brand-col">
//           <div className="footer-logo">
//             <span className="logo-icon">🌱</span>
//             <h3>Al-Falah <span>Welfare</span></h3>
//           </div>
//           <p className="village-badge">📍 78 JB Jawaddi, Faisalabad</p>
//           <p className="footer-desc">
//             Mokgatlo wa boiketlo wa motse wa 78 JB Jawaddi wo o šomago go fiwa batho dithušo tša motheo le tšweletšopele ntle le tefo (Fi Sabilillah).
//           </p>
//         </div>

//         {/* Dikgokagano tša go akgofa */}
//         <div className="footer-col links-col">
//           <h4>Dikgokagano tša Bohlokwa</h4>
//           <ul>
//             <li><Link to="/">Gae (Home)</Link></li>
//             <li><Link to="/about">Mabapi le Rena (Ta'aruf)</Link></li>
//             <li><Link to="/facilities">Ditirelo tša Motse (Sahooliyat)</Link></li>
//             <li><Link to="/works">Mešomo ya Rena (Khidmaat)</Link></li>
//             <li><Link to="/help-request">Kgopelo ya Thušo</Link></li>
//           </ul>
//         </div>

//         {/* Ditirelo tša Motse wa 78 JB */}
//         <div className="footer-col facilities-col">
//           <h4>Ditirelo tša 78 JB</h4>
//           <ul>
//             <li>🏥 Dispensary & Kalafo ya Mahala</li>
//             <li>💧 Plante ya Meetse a go Hlweka</li>
//             <li>📚 Thušo ya Thuto ya Bana</li>
//             <li>⚡ Tlhokomelo ya Mabone a Ditsela</li>
//           </ul>
//         </div>

//         {/* Boikopanyo le Dithušo tša Tshoganyetso */}
//         <div className="footer-col contact-col">
//           <h4>Ikopanye le Rena</h4>
//           <p>Dira kgokagano le sehlopha sa boithaopi sa 78 JB Jawaddi bakeng sa thušo goba go ba moithaopi.</p>
//           <div className="contact-links">
//             <a 
//               href="https://wa.me/923260781878" 
//               target="_blank" 
//               rel="noreferrer" 
//               className="footer-btn whatsapp"
//             >
//               💬 WhatsApp: +92 326 0781878
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Karolo ya tlase ya Copyright */}
//       <div className="footer-bottom">
//         <div className="container bottom-content">
//           <p>&copy; 2026 Al-Falah Welfare Society (78 JB Jawaddi). Ditokelo ka moka di beilwe.</p>
//           <p className="tagline">Fi Sabilillah Khidmat-e-Khalq</p>
//         </div>
//       </div>
//     </footer>
//   );
// };


// export {Footer}


import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

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
            <li><Link to="/help-request">Madad Ki Darkhwast</Link></li>
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
              href="https://wa.me/923260781878" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-btn whatsapp"
            >
              💬 WhatsApp: +92 326 0781878
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