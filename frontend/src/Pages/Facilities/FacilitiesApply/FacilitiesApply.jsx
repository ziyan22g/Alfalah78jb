import React from 'react';
import { FaFileAlt, FaUserCheck, FaHandsHelping, FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../../../Config/Config';
import { useNavigate } from 'react-router-dom';
import './FacilitiesApply.css';

const stepsData = [
    {
        stepNumber: '01',
        icon: <FaFileAlt />,
        title: 'Darkhwast Jama Karwayein',
        urduTitle: 'درخواست جمع کروائیں',
        description: 'Society ke falahi desk par rabta karein ya online form/WhatsApp ke zariye apni darkhwast aur bunyadi maloomat faraham karein.',
        isClickable: true,
        route: "/help-form"
    },
    {
        stepNumber: '02',
        icon: <FaUserCheck />,
        title: 'Tasdeeq Aur Jaiza',
        urduTitle: 'خفیہ تصدیق و جائزہ',
        description: 'Society ki intizamiya izzat-e-nafs ka poora khayal rakhte hue bila-tafreeq mustahiq hone ki ba-qayda tasdeeq karegi.',
        isClickable: false,
    },
    {
        stepNumber: '03',
        icon: <FaHandsHelping />,
        title: 'Madad Ki Farahami',
        urduTitle: 'امداد کی فوری فراہمی',
        description: 'Tasdeeq mukammal hote hi rashan, taleemi fees ya medical imdad barah-e-raast mustahiq fard tak pohancha di jayegi.',
        isClickable: false
    }
];


const FacilitiesApply = () => {

    const navigate = useNavigate();

    const ClickableCard = (item) => {
        if (item.isClickable && item.route) {
            navigate(item.route)
        }
    };



    return (
        <section className="how-to-apply-section" id="how-to-apply">
            <div className="apply-container">

                {/* Header */}
                <div className="apply-header">
                    <span className="apply-badge">Aasan Tareeqa-e-Kar</span>
                    <h2 className="apply-title">Madad Hasil Karne Ka Tareeqa</h2>
                    <p className="apply-subtitle">
                        Al-Falah Welfare Society ke tehat imdad hasil karne ke liye yeh teen aasan marahal follow karein.
                    </p>
                </div>

                {/* 3 Steps Grid */}
                <div className="steps-wrapper">
                    {stepsData.map((item, index) => (
                        <div
                            key={index}
                            className={`step-card ${item.isClickable ? 'clickable-card' : ''}`}
                            onClick={() => { ClickableCard(item) }}
                        >
                            <div className="step-header">
                                <span className="step-index">{item.stepNumber}</span>
                                <div className="step-icon-box">
                                    {item.icon}
                                </div>
                            </div>

                            <div className="step-content">
                                <h3 className="step-heading">{item.title}</h3>
                                <span className="step-urdu">{item.urduTitle}</span>
                                <p className="step-text">{item.description}</p>

                                {item.isClickable && (
                                    <span className="click-action-hint">
                                        Online Form Kholein &rarr;
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Prompt */}
                <div className="apply-banner">
                    <div className="banner-text">
                        <h3>Kya aapko ya aapke ird-gird kisi ko madad ki zaroorat hai?</h3>
                        <p>Hamaari team se bila-jhijhak direct rabta karein. Maloomat mukammal tor par safe aur raaz mein rakhi jati hain.</p>
                    </div>
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                    >
                        <FaWhatsapp className="wa-icon" />
                        <span>WhatsApp Par Rabta Karein</span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export { FacilitiesApply };