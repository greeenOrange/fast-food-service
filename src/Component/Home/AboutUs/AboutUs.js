import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className='aboutus-section'>
            <div className="container">
                <div className="about-us-top">
                    <div className="aboutus-one">
                        <div className="about-left">
                        <h2>Get to know <span>us</span></h2>
                        <img src="https://i.ibb.co/txkkTCv/aboutus1.png" alt="" />
                        </div>
                        <div className="aboutus-details">
                            <div>
                            <h2><span className='team-color'>Teamwork</span> is the key to <span className='success'>our sucess</span></h2>
                            <p>At TasteNow we make sure that every decision is determined by a team of us. Everyone´s opinion matters, and as group, we are stronger. We firmly belive that team work, makes the dream work.</p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutus-one">
                        <div className="aboutus-details">
                            <div>
                            <h2> We are all in for the <span 
                            style={{display: 'block'}}
                            className='team-color'>enviroment</span></h2>
                            <p>TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world.</p>
                            </div>
                        </div>
                        <div className="about-left">
                        <img src="https://i.ibb.co/5WZZppy/aboutus2.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;