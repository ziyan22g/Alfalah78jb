// import React from 'react'
// import './FacilitiesCard.css'

// const FacilitiesCard = () => {
//     return (
//         <div>FacilitiesCard section</div>
//     )
// }

// export { FacilitiesCard }

import React from 'react';
import {
    FaShoppingBasket,
    FaGraduationCap,
    FaHeartbeat,
    FaHandHoldingHeart,
    FaTint,
    FaCrosshairs,
    FaCheckCircle
} from 'react-icons/fa';
import './FacilitiesCard.css';

const facilitiesData = [
    {
        id: 1,
        icon: <FaShoppingBasket />,
        title: 'Mahana Rashan Scheme',
        subtitle: 'مستحق خاندانوں کے لیے راشن پیکج',
        description: 'Bewaon, yateemon aur ghareeb mazdoor gharanon ke liye mahana bunyadi khuraak (Aata, Daal, Ghee, Cheeni) ka pur-waqar bandobast.',
        points: ['Discrete ghar tak delivery', 'Strict verification ke baad distribution', '100% shaffaf record']
    },
    {
        id: 2,
        icon: <FaGraduationCap />,
        title: 'Taleemi Imdad Fund',
        subtitle: 'تعلیمی معاونت و سکالرشپس',
        description: 'Zaheen aur zaroorat-mand talba ke school/college ki fees, kitabein, copies aur uniform ke akhrajat society bardasht karti hai.',
        points: ['Primary se College level tak', 'Direct school fee payment', 'Talba ki monitoring']
    },
    {
        id: 3,
        icon: <FaHeartbeat />,
        title: 'Medical Aid & Camps',
        subtitle: 'طبی امداد و فری کیمپس',
        description: 'Bunyadi adviyat, ghareeb mareezon ke tests aur gaon mein periodical free medical checkup camps ka ineqad.',
        points: ['Free sugar aur BP checkup', 'Zaroori emergency medicines', 'Local doctor collaboration']
    },
    {
        id: 4,
        icon: <FaHandHoldingHeart />,
        title: 'Marriage Support Fund',
        subtitle: 'جہیز و شادی فنڈ',
        description: 'Yateem ya ghareeb gharano ki bachiyon ki ba-waqar rukhsati ke liye bunyadi samaan aur zaroori akhrajat mein taawun.',
        points: ['100% confidential investigation', 'Zaroori jahez item support', 'Peshgi application zaroori']
    },
    {
        id: 5,
        icon: <FaTint />,
        title: 'Saaf Paani & Safe Drinking',
        subtitle: 'پینے کا صاف پانی',
        description: 'Gaon ke bashindon ke liye saaf peenay ke paani ki farahami aur filtration plants ki regular maintenance ka intezam.',
        points: ['Clean water accessibility', 'Plant filter change schedule', 'Bimariyon se bachao']
    },
    {
        id: 6,
        icon: <FaCrosshairs />,
        title: 'Kafan-Dafan & Janaza Khidmat',
        subtitle: 'تجہیز و تکفین سہولت',
        description: 'Dukh ki ghari mein falahi society ki taraf se mayyat ke kafan, ghusal aur dafan ke tamam zaroori intezamat bila-muawza.',
        points: ['Emergency 24/7 dastiyabi', 'Free kafan package', 'Janaza aur dafan assistance']
    }
];

const FacilitiesCard = () => {
    return (
        <section className="facilities-grid-section" id="facilities-list">
            <div className="grid-container">

                {/* Section Header */}
                <div className="section-header">
                    <span className="section-badge">Bunyadi Khidmat</span>
                    <h2 className="section-title">Hum Gaon Ke Liye Kya Karte Hain?</h2>
                    <p className="section-subtitle">
                        Chak No. 78 JB Jawaddi mein har mustahiq fard tak zaroori falahi sahooliyat pohanchana hamara farz hai.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="cards-wrapper">
                    {facilitiesData.map((item) => (
                        <div key={item.id} className="facility-card">

                            <div className="card-top">
                                <div className="icon-wrapper">
                                    {item.icon}
                                </div>
                                <div className="title-group">
                                    <h3 className="card-title">{item.title}</h3>
                                    <span className="card-urdu-title">{item.subtitle}</span>
                                </div>
                            </div>

                            <p className="card-desc">{item.description}</p>

                            <div className="card-features">
                                {item.points.map((pt, index) => (
                                    <div key={index} className="feature-item">
                                        <FaCheckCircle className="check-icon" />
                                        <span>{pt}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export { FacilitiesCard };