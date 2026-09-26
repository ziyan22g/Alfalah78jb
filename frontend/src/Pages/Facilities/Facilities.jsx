import React, { useEffect } from 'react'
import './Facilities.css'
import { FacilitiesHero } from './FacilitiesHore/FacilitiesHero'
import { FacilitiesCard } from './FacilitiesCard/FacilitiesCard'
import { FacilitiesApply } from './FacilitiesApply/FacilitiesApply'
import { useLocation } from 'react-router-dom'

const Facilities = () => {

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth' })
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [location])

    const scrollToCards = () => {
        document.getElementById('facilities-list')?.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToApply = () => {
        document.getElementById('howToApply')?.scrollIntoView({ behavior: 'smooth' })
    };


    return (
        <>
            <div className="facilities-page">
                {/* FacilitiesHero Section  */}
                <FacilitiesHero
                    onExploreClick={scrollToCards}
                    onApplyClick={scrollToApply} />

                {/* FacilitiesCard Section  */}
                <div id="facilities-list">
                    <FacilitiesCard />
                </div>
                {/* FacilitiesApply Section  */}
                <div id="howToApply">
                    <FacilitiesApply />
                </div>
            </div>

        </>
    )
}

export { Facilities }