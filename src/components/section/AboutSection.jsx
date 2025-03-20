import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import "../style/AboutSection.css";

const AboutSection = () => {
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
            <section className='About' id='about-bg' ref={sectionRef}>
                <div className="about-container">
                    <motion.div
                        className="about-header"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="about-title">About Me</h1>
                        <div className="about-underline"></div>
                    </motion.div>

                    <div className="about-content">
                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="image-container">
                                <div className="image-placeholder">
                                    <img src="images/me.jpg" alt="Wanichanon Saelee" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h2>Who I Am</h2>
                            <p>Hello, my name is Wanichanon SaeLee, but you can call me Aum. I’m an IT student at KMUTNB with a passion for web development. I have skills in Next.js, React, Node.js, and UX/UI design. I’m always looking for ways to create websites that are both functional and visually appealing. I’m eager to learn new things and continue improving myself.</p>

                            <h2>My Journey</h2>
                            <p>What started as a curiosity about how things work led me to develop my skills in website development. Through personal projects, I’ve had the opportunity to experiment and grow my abilities. I’m always looking for new challenges to expand my knowledge and technical skills.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;