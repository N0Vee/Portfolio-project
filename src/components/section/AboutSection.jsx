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
                            <p>My name is Wanichanon SaeLee, but you can call me Aum. I'm a web developer with a passion for exploring new ideas, constantly thinking, creating, and pushing boundaries.

                                With a deep interest in both technology and design, I strive to build solutions that are not only functional but also visually compelling. I’m always looking for ways to improve, innovate, and craft digital experiences that leave a lasting impact.</p>

                            <h2>My Journey</h2>
                            <p>What started as a curiosity about how things work turned into a passion for building and creating. Every project is a chance for me to learn, experiment, and refine my skills—blending technology with design to craft meaningful digital experiences. I’m always looking for new challenges to push my creativity and technical abilities further.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;