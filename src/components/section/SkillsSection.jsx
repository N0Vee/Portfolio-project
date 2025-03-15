import React from 'react';
import { div } from 'three/tsl';

export const SkillsSection = () => {
    const frontend = ["html5", "css3", "js", "react"];
    const ui = ["Bulma", "bootstrap", "Tailwind"];
    const backend = ["node-js", "Express"];
    const database = ["MySQL", "PostgreSQL", "MongoDB", "Firebase"];

    const iconMap = {
        "Bulma": "https://bulma.io/assets/brand/Bulma%20Logo%20White.png",
        "Tailwind": "https://www.loopple.com/img/tailwind-logo.png",
        "Express": "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=abb1bf",
        "MySQL": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        "PostgreSQL": "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
        "MongoDB": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        "Firebase": "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original-wordmark.svg"
    };


    const SkillSectionFactory = (type, skills) => {
        return () => (
            <>
                <p id={type} className='mt-4 has-text-centered appear'>{type}</p>
                <div className="grid">
                    <div className="columns is-multiline">
                        {skills.map((iconName, index) => (
                            <div key={index} className="column is-one-four">
                                <div className="is-center mx-5 my-5">
                                    <span className="icon appear">
                                        {iconMap[iconName] ? (
                                            <img id='imgIcon' src={iconMap[iconName]} alt={iconName} className='' />
                                        ) : (
                                            <i id='Icon' className={'fab fa-' + iconName}></i>
                                        )}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    };


    const FrontendSection = SkillSectionFactory("Frontend/Framework", frontend);
    const UISection = SkillSectionFactory("UI Libraries", ui);
    const BackendSection = SkillSectionFactory("Backend", backend);
    const DatabaseSection = SkillSectionFactory("Databases", database);

    return (
        <div id='skill-bg'>
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

            <div className="container mt-6">
                <div className="content">
                    <div className="is-flex is-justify-content-center is-flex-direction-column is-align-items-center">
                        <h3 className='mt-6'>Featured Skill</h3>
                        <FrontendSection />
                        <UISection />
                        <BackendSection />
                        <DatabaseSection />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SkillsSection;
