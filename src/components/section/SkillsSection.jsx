import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import "../style/SkillsSection.css";

export const SkillsSection = () => {
    const skills = {
        "Frontend / Frameworks": ["HTML5", "CSS3", "JavaScript", "React"],
        "UI Libraries": ["Bulma", "Bootstrap", "Tailwind"],
        "Backend": ["Node.js", "Express", "Bun", "Elysia.js"],
        "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
        "Full-Stack Framework": ["Next.js"],
        "Software": ["Postman", "Docker"]
    };
    
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
    
    useEffect(() => {
        const container = document.querySelector('.skills-container');
        if (container) {
            for (let i = 0; i < 20; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                dot.style.left = `${Math.random() * 100}%`;
                dot.style.top = `${Math.random() * 100}%`;
                dot.style.opacity = (Math.random() * 0.5).toFixed(2);
                document.querySelector('.glowing-dots-skills').appendChild(dot);
            }
        }
    }, []);
    
    return (
        <section id="skill-bg" className="section" ref={sectionRef}>
            <div className="glowing-dots-skills"></div>
            <div className="container skills-container">
                <motion.div
                    className="skills-grid"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.8 }}
                >
                    {Object.entries(skills).map(([category, skillList], index) => (
                        <motion.div
                            className="skill-category-card"
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className="category-header">
                                <h3 className="category-title">{category}</h3>
                            </div>
                            <div className="skills-content">
                                {skillList.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        className="skill-tag"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                                        transition={{ duration: 0.5, delay: isVisible ? index * 0.1 + i * 0.05 : 0 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;