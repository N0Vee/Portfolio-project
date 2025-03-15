import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

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
        <>
            <section className='Education' id='education-bg' ref={sectionRef}>
                <div className="education-container">
                    <motion.div 
                        className="education-header"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="education-title">My Educational Journey</h1>
                        <div className="education-underline"></div>
                        <p className="education-subtitle">The path that shaped my knowledge and skills</p>
                    </motion.div>
                    
                    <div className="timeline-wrapper">
                        <div className="timeline-decoration">
                            <div className="timeline-stars">
                                {[...Array(5)].map((_, i) => (
                                    <div 
                                        key={i} 
                                        className="star"
                                        style={{
                                            top: `${15 + i * 20}%`,
                                            left: `${(i % 2) * 5}px`,
                                            animationDelay: `${i * 0.2}s`
                                        }}
                                    ></div>
                                ))}
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
                                <motion.div 
                                    className="timeline-event"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                                    transition={{ duration: 0.7, delay: 0.3 }}
                                >
                                    <div className="timeline-marker"><span>3</span></div>
                                    <div className="timeline-content">
                                        <div className="education-card-header">
                                            <div className="education-logo kmutb"></div>
                                            <div className="education-title-group">
                                                <h3>KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK (KMUTNB)</h3>
                                                <p className="timeline-year">2022 - Currently (Year 3)</p>
                                            </div>
                                        </div>
                                        <div className="timeline-description">
                                            <p>Currently pursuing a degree in IT with a major in Software Engineering, focusing on modern web development technologies and UI/UX design to build seamless and user-friendly digital experiences.</p>
                                            <ul className="education-highlights">
                                                <li>Faculty : FITM</li>
                                                <li>Branch : IT</li>
                                                <li>Degree : 3.14</li>
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    className="timeline-event"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                                    transition={{ duration: 0.7, delay: 0.6 }}
                                >
                                    <div className="timeline-marker"><span>2</span></div>
                                    <div className="timeline-content">
                                        <div className="education-card-header">
                                            <div className="education-logo sbac"></div>
                                            <div className="education-title-group">
                                                <h3>SIAM BUSINESS ADMINISTRATION TECHNOLOGICAL COLLEGE (SBAC)</h3>
                                                <p className="timeline-year">2019 - 2022</p>
                                            </div>
                                        </div>
                                        <div className="timeline-description">
                                            <p>Graduated with a vocational degree in IT, covering a broad range of foundational skills. Passionate about web development, software engineering, and UI/UX design, always eager to learn and improve.</p>
                                            <ul className="education-highlights">
                                                <li>Branch : IT</li>
                                                <li>Degree : 3.03</li>
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    className="timeline-event"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                                    transition={{ duration: 0.7, delay: 0.9 }}
                                >
                                    <div className="timeline-marker"><span>1</span></div>
                                    <div className="timeline-content">
                                        <div className="education-card-header">
                                            <div className="education-logo rajavinit"></div>
                                            <div className="education-title-group">
                                                <h3>Rajavinit Bangkhen School</h3>
                                                <p className="timeline-year">2017 - 2019</p>
                                            </div>
                                        </div>
                                        <div className="timeline-description">
                                            <p>Graduated from Rajavinit Bangkhen School with a background in Science and Mathematics, which inspired my interest in IT and software development.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        
                        <div className="timeline-end-marker">
                            <motion.div 
                                className="end-marker-circle"
                                initial={{ scale: 0 }}
                                animate={{ scale: isVisible ? 1 : 0 }}
                                transition={{ duration: 0.5, delay: 1.5 }}
                            ></motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EducationSection;