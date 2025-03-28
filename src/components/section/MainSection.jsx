import React, { useEffect, useState } from 'react';
import TypeWriter from '../lib/TypeWriter';
import "../style/MainSection.css";

const MainSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [toggleText, setToggleText] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className='hero is-fullheight' id='page-bg'>


            <div className="particles"></div>

            
            <div className="glowing-dots">
                {[...Array(30)].map((_, i) => (
                    <div 
                        key={i} 
                        className="dot" 
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.1,
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`
                        }}
                    />
                ))}
            </div>

            <div className="hero-body">
                <div className="container">
                    <div className="columns hero-container is-vcentered">
                        <div className={`column is-6 hero-content ${isLoaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                            <h2 className="subtitle is-5 has-text-grey-light">Hello there, I'm</h2>
                            <h1 className="title is-1 main-title has-text-white">
                                <span className="highlight">Wanichanon</span>
                            </h1>
                            
                            <div className="typewriter-container mb-5">
                                <TypeWriter />
                            </div>
                            
                            <div onMouseEnter={() => setToggleText(!toggleText)} onMouseLeave={() => setToggleText(!toggleText)} className="quote-box">
                                <p className="subtitle is-5 has-text-grey-light mb-3 has-text-weight-bold">
                                    {toggleText ? '"ความเรียบง่ายคือสิ่งที่ซับซ้อนสูงสุด"' : '"Simplicity is the ultimate sophistication."'}
                                </p>
                            </div>
                            
                            <div className="social-links is-flex is-align-items-center">
                                <a href="https://github.com/N0Vee" target="_blank" rel="noopener noreferrer" className="has-text-white socialButton" aria-label="GitHub">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/wanichanon-saelee-0b2717252/" target="_blank" rel="noopener noreferrer" className="has-text-white socialButton" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://discordapp.com/users/Nveee#9120" target="_blank" rel="noopener noreferrer" className="has-text-white socialButton" aria-label="Discord">
                                    <i className="fab fa-discord"></i>
                                </a>
                                <a href="mailto:contact@wanichanon.work@gmail.com" className="has-text-white socialButton" aria-label="Email">
                                    <i className="fas fa-envelope"></i>
                                </a>
                                
                                <button onClick={() => window.open('images/Wanichanon_SaeLee_Resume.pdf')} className="button about-button has-text-white"><span>Resume</span></button>
                            </div>
                        </div>
                        
                        <div className={`column is-6 is-flex is-justify-content-center ${isLoaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                            <div className="profile-image-container">
                                <img src="images/me.jpg" alt="Wanichanon Saelee" className="profile-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-separator">
                <div className="separator-content">
                    <div className="separator-line"></div>
                    <div className="separator-icon">
                        <i className="fas fa-code"></i>
                    </div>
                    <div className="separator-line"></div>
                </div>
            </div>
        </section>

    );
};

export default MainSection;