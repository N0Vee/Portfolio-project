import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import "../style/SkillsSection.css";

export const SkillsSection = () => {
    const skills = {
        "Frontend / Frameworks": ["HTML", "CSS", "JavaScript", "React"],
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


            <div className="glowing-dots-skills"></div>
            <div className="container skills-container">
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, skillList], index) => (
                        <motion.div
                            className="skill-category-card"
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="category-header">
                                <h3 className="category-title">{category}</h3>
                            </div>
                            <div className="skills-content">
                                {skillList.map((skill, i) => (
                                    <span key={i} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;