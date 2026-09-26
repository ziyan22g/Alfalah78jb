
import React from 'react';
import { FaHandsHelping, FaArrowDown, FaHeart } from 'react-icons/fa';
import './FacilitiesHero.css';

const FacilitiesHero = ({ onExploreClick, onApplyClick }) => {
    return (
        <section className="facilities-hero">
            <div className="hero-container">

                {/* Eyebrow Badge */}
                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    <span className="badge-text">Fi Sabilillah Khidmat • Chak No. 78 JB</span>
                </div>

                {/* Headings */}
                <h1 className="hero-title">
                    Hamari Falahi Khidmat <br />
                    <span>Zaroorat-mand Gharanon Ki Umeed</span>
                </h1>

                <p className="hero-description">
                    Al-Falah Welfare Society gaon ke mustahiq afrad ko rashan, taleemi imdad,
                    aur bunyadi sahooliyat izzat-e-nafs ke sath bila-tafreeq faraham karti hai.
                </p>

                {/* CTA Action Buttons */}
                <div className="hero-actions">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onApplyClick}
                    >
                        <FaHandsHelping className="btn-icon" />
                        <span>Madad Ke Liye Darkhwast</span>
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onExploreClick}
                    >
                        <span>Sahooliyat Dekhein</span>
                        <FaArrowDown className="btn-icon" />
                    </button>
                </div>

                {/* Quick Trust / Stats Strip */}
                <div className="hero-stats">
                    <div className="stat-card">
                        <span className="stat-value">100%</span>
                        <span className="stat-label">Bila Sood & Shaffaf</span>
                    </div>

                    <div className="stat-divider"></div>

                    <div className="stat-card">
                        <span className="stat-value">Mahana</span>
                        <span className="stat-label">Rashan & Imdad</span>
                    </div>

                    <div className="stat-divider"></div>

                    <div className="stat-card">
                        <span className="stat-value">Chak 78 JB</span>
                        <span className="stat-label">Dedicated Community</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export { FacilitiesHero };