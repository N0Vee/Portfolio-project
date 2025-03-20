import React, { useEffect, useState, useRef } from 'react';
import "../style/EducationSection.css";

const EducationSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    
    return (
        <section className='education' id='education' ref={sectionRef}>
            <div className="education-container">
                <div className={`education-header ${isVisible ? 'fade-in' : ''}`}>
                    <h2 className="education-title">
                        My <span className="highlight">Education</span> Journey
                    </h2>
                </div>
                
                <div className="section-separator">
                    <div className="separator-content">
                        <div className="separator-line"></div>
                        <div className="separator-icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div className="separator-line"></div>
                    </div>
                </div>
                
                <div className="timeline-container">
                    <div className="timeline-track">
                        <div 
                            className="timeline-progress" 
                            style={{ height: isVisible ? '100%' : '0%' }}
                        ></div>
                    </div>
                    
                    <div className="timeline-events">
                        <div className={`timeline-event ${isVisible ? 'fade-in' : ''}`} style={{animationDelay: "0.2s"}}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="education-card-header">
                                    <h3>KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</h3>
                                    <p className="timeline-year">2022 - Present</p>
                                </div>
                                <div className="timeline-description">
                                    <p>Bachelor's degree in IT, Software Engineering</p>
                                    <ul className="education-highlights">
                                        <li>Faculty of Information Technology and Management</li>
                                        <li>Current GPA: 3.14</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className={`timeline-event ${isVisible ? 'fade-in' : ''}`} style={{animationDelay: "0.4s"}}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="education-card-header">
                                    <h3>SIAM BUSINESS ADMINISTRATION TECHNOLOGICAL COLLEGE</h3>
                                    <p className="timeline-year">2019 - 2022</p>
                                </div>
                                <div className="timeline-description">
                                    <p>Vocational degree in Information Technology</p>
                                    <ul className="education-highlights">
                                        <li>GPA: 3.03</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className={`timeline-event ${isVisible ? 'fade-in' : ''}`} style={{animationDelay: "0.6s"}}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="education-card-header">
                                    <h3>Rajavinit Bangkhen School</h3>
                                    <p className="timeline-year">2017 - 2019</p>
                                </div>
                                <div className="timeline-description">
                                    <p>Science and Mathematics program</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;