import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
            <div className="about-page">
                {/* 1. Page Header */}
                <section className="about-hero">
                    <div className="container">
                        <span className="badge">Chak No. 78 JB Jawaddi, Faisalabad</span>
                        <h1>Gaon Ka Ta'aruf Aur <span>Al-Falah Welfare Society</span></h1>
                        <p>
                            Aik aisi muttahid falahi tehreek jo gaon ke har fard ko ek lari mein piro kar
                            bila-tafreeq khidmat aur taraqqi ke liye 5 saal se koshish kar rahi hai.
                        </p>
                    </div>
                </section>

                {/* 2. Village Geography & Demographics */}
                <section className="village-overview container">
                    <div className="section-intro text-center">
                        <span className="sub-title">Hamari Sarzameen</span>
                        <h2>Chak No. 78 JB Jawaddi Ka Jaiza</h2>
                        <p>
                            Faisalabad ke zira'ati hissay mein Jhang Branch nehri silsilay se jura yeh pur-aman gaon
                            apni mehmaan-nawazi aur ittehad ke hawale se ek munfarid pehchan rakhta hai.
                        </p>
                    </div>

                    <div className="overview-grid">
                        {/* Item 1: Raste & Roads */}
                        <div className="info-box">
                            <div className="box-icon">🛣️</div>
                            <h3>3 Maroof Raste</h3>
                            <p>
                                Gaon ko Dijkot Road, Painsra Road aur Awaaspur Road aapas mein jortay hain,
                                jis se shehar Faisalabad aur ird gird ke dehaat tak aamad-o-raft intehai aasan hai.
                            </p>
                        </div>

                        {/* Item 2: Aabadi & Ghar */}
                        <div className="info-box">
                            <div className="box-icon">🏡</div>
                            <h3>1,200+ Ghaaranay</h3>
                            <p>
                                Taqreeban 1200 se zayd gharon par mushtamil aabadi hai jahan aam shehri
                                zira'at, zameendara aur shehar Faisalabad mein mukhtalif shobon se wabasta hain.
                            </p>
                        </div>

                        {/* Item 3: Overseas & Saudi Arabia */}
                        <div className="info-box">
                            <div className="box-icon">✈️</div>
                            <h3>Mukhlis Pardesi Bhai</h3>
                            <p>
                                Saudi Arabia aur deegar mumalik mein muqeem gaon ke bhai apne dehaat ki
                                falahi khidmaat aur tarqqiyati mansobon ke liye maali tawun muhayya karte hain.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Foundation Story (5 Saal Pehle Ka Azm) */}
                <section className="foundation-section">
                    <div className="container">
                        <div className="foundation-content">
                            <div className="foundation-text">
                                <span className="sub-title">Tanzeem Ka Qayam (5 Saal Pehle)</span>
                                <h2>Kyun Shuru Ki Gayi Al-Falah Welfare Society?</h2>
                                <p>
                                    Dehaati mahaul mein aksar chotay motay siasi ikhtilafat ya baradari dharay-bandi ki wajah
                                    se ghareeb aur safaid-posh log bunyadi haqooq aur madad se mehroom reh jatay the.
                                </p>
                                <p>
                                    Isi zaroorat ko mehsoos karte hue 5 saal pehle gaon ke ba-shaoor afrad aur nojawano ne mil kar
                                    ek ghair-siasi falahi committee ki bunyad rakhi taake:
                                </p>

                                <ul className="cause-list">
                                    <li>
                                        <strong>Ittehad-e-Bahaami:</strong> Gaon ke tamam logon ko ek platform par muttahid kiya ja sakay.
                                    </li>
                                    <li>
                                        <strong>Bila-Tafreeq Imdad:</strong> Har mustahiq fard tak uski izzat-e-nafs ka khayal rakh kar madad pohanche.
                                    </li>
                                    <li>
                                        <strong>Mushtarka Taraqqi:</strong> Saaf paani, taleem aur sehat ke masail ko mil kar hal kiya ja sakay.
                                    </li>
                                </ul>
                            </div>

                            <div className="foundation-highlight">
                                <div className="highlight-card">
                                    <h3>5+ Saal</h3>
                                    <p>Musalsal Fi Sabilillah Khidmat Ka Safar</p>
                                    <hr />
                                    <div className="quote-box">
                                        "Gaon ka koi bhi fard dukh ya zaroorat mein akela na rahay — yahi Al-Falah ka asal manshoor hai."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Agla hissa: Hamari Team, Core Values aur Committee Rules aayenge */}
                {/* 4. Hamare Bunyadi Usool (Core Principles & Transparency) */}
                <section className="values-section container">
                    <div className="section-intro text-center">
                        <span className="sub-title">Hamari Bunyadi Iqdaar</span>
                        <h2>Usool Jin Par Al-Falah Qayam Hai</h2>
                        <p>
                            Humara maqsad sirf imdad taqseem karna nahi, balki gaon ke har fard ka aitemad
                            aur mustahiq ki izzat-e-nafs ko barqarar rakhna hai.
                        </p>
                    </div>

                    <div className="values-grid">
                        {/* Value 1 */}
                        <div className="value-card">
                            <div className="value-icon">⚖️</div>
                            <h3>Ghair Siasi Aur Bila-Tafreeq</h3>
                            <p>
                                Society ka kisi siasi party ya baradari se koi ta'alluq nahi. Gaon ke har
                                mustahiq fard ka haq barabar hai, chahe uska ta'alluq kisi bhi dharay se ho.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="value-card">
                            <div className="value-icon">📖</div>
                            <h3>100% Shafaf Hisab-Kitab</h3>
                            <p>
                                Pardes (Saudi Arabia) aur muqami afrad se aane wale har rupaye ka mukammal
                                record aur falahi kamo par hone wale ikhrajat ka wazeh hisab rakha jata hai.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="value-card">
                            <div className="value-icon">🛡️</div>
                            <h3>Izzat-e-Nafs Ka Tehaffuz</h3>
                            <p>
                                Rashan ya maali madad dete waqt kisi qisam ki tasweer-kashi ya numaish
                                nahi ki jati. Safaid-posh khandanon ki parda-daari hamari awaleen tarjeeh hai.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Working Structure & Village Committee */}
                <section className="committee-section">
                    <div className="container">
                        <div className="section-intro text-center">
                            <span className="sub-title">Nizam-e-Intezam</span>
                            <h2>Falahi Committee Aur Nojawan Karkun</h2>
                            <p>
                                Chak 78 JB Jawaddi ke mo'azziz buzurgon ki sarparasti aur josh-e-khidmat se
                                sarshar nojawano ki mushtarka koshish.
                            </p>
                        </div>

                        <div className="structure-grid">
                            <div className="structure-card">
                                <span className="role-tag">Sarparast-e-Aala</span>
                                <h3>Buzurgan-e-Dehaat</h3>
                                <p>Gaon ke qabil-e-ehtaram buzurg jo faisla-sazi, rehnumai aur mushtarka ittehad ko yaqeeni banate hain.</p>
                            </div>

                            <div className="structure-card">
                                <span className="role-tag">Tawun-o-Rabta</span>
                                <h3>Overseas Members (Saudi Arabia)</h3>
                                <p>Watan se door rehte hue bhi gaon ke falahi mansobon (Water Plant, Kafan-Dafan) ke liye maali aur fikri sahara.</p>
                            </div>

                            <div className="structure-card">
                                <span className="role-tag">Mydani Karkun</span>
                                <h3>Al-Falah Youth Volunteers</h3>
                                <p>Gaon ke mukhlis nojawan jo emergency, qabar ki tayyari, clinic kamo aur rashan delivery mein pesh pesh rehte hain.</p>
                            </div>
                        </div>

                        {/* Bottom Join CTA */}
                        <div className="join-team-box text-center">
                            <h3>Kiya aap gaon ki khidmat mein hissa lena chahte hain?</h3>
                            <p>Apna waqt, mashwara ya falahi kamo mein tawun pesh karne ke liye committee se rabta karein.</p>
                            <a
                                href="https://wa.me/923260781878"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                            >
                                Bator Volunteer Shamil Hon
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export { About }