import React, { useEffect } from 'react';

export const SkillsSection = () => {
    const skills = {
        "Frontend / Frameworks": ["HTML5", "CSS3", "JavaScript", "React"],
        "UI Libraries": ["Bulma", "Bootstrap", "Tailwind"],
        "Backend": ["Node.js", "Express", "Bun", "Elysia.js"],
        "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
        "Full-Stack Framework" : ["Next.js"],
        "Software" : ["Postman"]
    };
    
    useEffect(() => {
        // Create glowing dots effect
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
        <section id="skill-bg" className="section">
            <div className="glowing-dots-skills"></div>
            <div className="container skills-container">
                <h2 className="title is-2 has-text-centered mb-6 has-text-white fade-in main-title">
                    
                </h2>
                
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, skillList], index) => (
                        <div 
                            className="skill-category-card fade-in" 
                            key={index}
                            style={{animationDelay: `${0.2 + index * 0.1}s`}}
                        >
                            <div className="category-header">
                                <h3 className="category-title">{category}</h3>
                            </div>
                            <div className="skills-content">
                                {skillList.map((skill, i) => (
                                    <span 
                                        key={i} 
                                        className="skill-tag fade-in"
                                        style={{animationDelay: `${0.4 + i * 0.05}s`}}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;