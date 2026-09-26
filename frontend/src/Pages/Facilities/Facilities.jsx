import React from 'react'
import './Facilities.css'
import { FacilitiesHero } from './FacilitiesHore/FacilitiesHero'
import { FacilitiesCard } from './FacilitiesCard/FacilitiesCard'
import { FacilitiesApply } from './FacilitiesApply/FacilitiesApply'

const Facilities = () => {

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