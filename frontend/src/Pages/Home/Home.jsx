import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <span className="badge">Chak No. 78 JB Jawaddi • Fi Sabilillah Khidmat</span>
          <h1>
            Apne Gaon Ki Taraqqi Aur Falah <br />
            <span>Al-Falah Welfare Society</span>
          </h1>
          <p>
            Baghair kisi siasi ikhtilaf ya zaati mufad ke, gaon ke har mustahiq fard ki madad,
            bunyadi sahooliyat ki behtari aur naye nojawano ko khidmat-e-khalq se jorna hamara azm hai.
          </p>
          <div className="hero-actions">
            <Link to="/facilities#facilities-list" className="btn btn-primary">Gaon Ki Sahooliyat Dekhein</Link>
            <Link to="/facilities#howToApply" className="btn btn-secondary">Madad Ki Darkhwast</Link>
          </div>
        </div>
      </section>

      {/* 2. Quick Impact Stats Bar */}
      <section className="stats-bar">
        <div className="stats-container">
          <div className="stat-item">
            <h3>100%</h3>
            <p>Fi Sabilillah Khidmat</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Emergency Health & Delivery</p>
          </div>
          <div className="stat-item">
            <h3>4 Idaray</h3>
            <p>Taleemi Idaray (Govt & Private)</p>
          </div>
          <div className="stat-item">
            <h3>1 Goal</h3>
            <p>Muft Kafan-Dafan & Water Plant</p>
          </div>
        </div>
      </section>

      {/* 3. Facilities & Projects Section with Status System */}
      <section className="section container">
        <div className="section-header">
          <span className="section-subtitle">Chak 78 JB Jawaddi</span>
          <h2 className="section-title">Gaon Ki Bunyadi <span>Sahooliyat & Mansobajat</span></h2>
          <p>Maujooda dastiyab khidmaat aur mustaqbil ke falahi mansobon ka jaiza.</p>
        </div>

        <div className="cards-grid">
          {/* Card 1: Health Unit */}
          <div className="card">
            <div className="card-top">
              <span className="card-icon">🏥</span>
              <span className="status-tag status-active">Active</span>
            </div>
            <h3>Basic Health Unit (Clinic)</h3>
            <p>
              Maryam Nawaz Health Initiative: OPD doctor subah 8 se dopahar 2 tak dastiyab hain. 
              Normal delivery aur basic emergency procedures 24/7 dastiyab hain.
            </p>
            <Link to="/facilities" className="card-link">Clinic Ki Tafseelat →</Link>
          </div>

          {/* Card 2: Janazagah */}
          <div className="card">
            <div className="card-top">
              <span className="card-icon">🕌</span>
              <span className="status-tag status-active">Active</span>
            </div>
            <h3>Janazagah & Qabar Khidmat</h3>
            <p>
              Gaon ke baasiyon ke liye qabar ki khudaai aur intezam bilkul muft (Fi Sabilillah) hai. 
              Kafan filhal munasib hasb-e-isteta'at kharche par milta hai.
            </p>
            <Link to="/facilities" className="card-link">Intezamat Dekhein →</Link>
          </div>

          {/* Card 3: Rashan Drive */}
          <div className="card">
            <div className="card-top">
              <span className="card-icon">📦</span>
              <span className="status-tag status-active">Active</span>
            </div>
            <h3>Mustahiq Khandan Rashan</h3>
            <p>
              Gaon ki bewa khawateen, yateem bachon aur safaid-posh zaroorat-mand khandanon 
              ke liye khufia aur ba-waqar tareeqay se maahana zaroori rashan ka bandobast.
            </p>
            <Link to="/facilities" className="card-link">Madad Ka Tareeqa →</Link>
          </div>

          {/* Card 4: Education */}
          <div className="card">
            <div className="card-top">
              <span className="card-icon">📚</span>
              <span className="status-tag status-active">Active</span>
            </div>
            <h3>Taleemi Imdad (Schools)</h3>
            <p>
              Gaon ke 2 Public Schools (Boys aur Girls alag) aur 2 Private Schools ke mustahiq 
              talba ke liye kitabein, bag, uniform aur fees mein tawun.
            </p>
            <Link to="/facilities" className="card-link">Taleemi Kifalat →</Link>
          </div>

          {/* Card 5: Water Plant (Pending) */}
          <div className="card card-pending">
            <div className="card-top">
              <span className="card-icon">💧</span>
              <span className="status-tag status-pending">Zair-e-Mansoba</span>
            </div>
            <h3>Solar Water Filtration Plant</h3>
            <p>
              Chak 78 JB ke baasiyon ke liye 24 ghante saaf aur meetha peene ka paani muhayya 
              karne ka mansoba zair-e-amal hai, jald solar setup install kiya jayega.
            </p>
            <span className="pending-text">Kaam Jald Shuru Hoga</span>
          </div>

          {/* Card 6: Shadi Support (Pending) */}
          <div className="card card-pending">
            <div className="card-top">
              <span className="card-icon">💍</span>
              <span className="status-tag status-pending">Zair-e-Mansoba</span>
            </div>
            <h3>Shadi Support (Dhee Rani)</h3>
            <p>
              Ghareeb aur zaroorat-mand bachiyon ke nikah ke zaroori akhrajat aur bunyadi 
              gharelu ashiya ki farahmi ke liye fund qayam karne ka irada hai.
            </p>
            <span className="pending-text">Committee Faisla Zair-e-Ghor</span>
          </div>
        </div>
      </section>

      {/* 4. Short Mission & Committee Vision */}
      <section className="mission-section">
        <div className="mission-container container">
          <div className="mission-text">
            <span className="section-subtitle">Hamara Asal Hadaf</span>
            <h2>Siasi Ikhtilafat Se Pak, Ba-Izzat Khidmat</h2>
            <p>
              Al-Falah Welfare Society kisi party ya zaati shohrat ke liye nahi, balki gaon ke aam insan 
              ki sahoolat ke liye bani hai. Hamara agla hadaf committee ke zariye kafan aur mayyat ke 
              tamam ikhrajat ko 100% gaon ke har fard ke liye muft karna hai.
            </p>
            <Link to="/about" className="btn btn-outline-dark">Hamare Mansobajat Janein</Link>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="cta-banner container">
        <div className="cta-content">
          <h2>Kiya aap ko kisi qisam ki madad darkaar hai?</h2>
          <p>
            Bila jhijhak hamari team ko apna masla batayein, ya 78 JB Jawaddi ki falahi 
            khidmaat mein hissa lene ke liye rabta karein.
          </p>
          <div className="cta-buttons">
            <a 
              href="https://wa.me/923260781878" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-accent"
            >
              WhatsApp Rabta (+92 326 0781878)
            </a>
            <Link to="/contact" className="btn btn-white">Online Form Bharein</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Home };