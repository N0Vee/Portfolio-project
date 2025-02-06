import React from 'react'

export const SkillSection = () => {

    const frontend = [
        "html5", "css3", "js", "react"
    ];

    const ui = [
        "Bulma", "bootstrap", "Tailwind"
    ];

    const backend= [
        "node-js", "Express"
    ];

    const database= [
        "MySQL", "PostgreSQL", "MongoDB", "Firebase"
    ];

    const iconMap = {
        "Bulma" : "https://bulma.io/assets/brand/Bulma%20Logo%20White.png",
        "Tailwind": "https://www.loopple.com/img/tailwind-logo.png",
        "Express" : "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=abb1bf",
        "MySQL" : "MySQL",
        "PostgreSQL" : "PostgreSQL",
        "MongoDB" : "MongoDB",
        "Firebase" : "Firebase"
        
    };

    const SkillSection = (title, type) => {
        return(
            <>
                <p className='mt-4'>{title}</p>
                        <div className="grid">
                            <div className="columns is-multiline">
                                {type.map((iconName, index) => (
                                    <div key={index} className="column is-one-four">
                                        <div className="is-center mx-5 my-5">
                                            <span className="icon">
                                                {iconMap[iconName] ? (
                                                    <img id='imgIcon' src={iconMap[iconName]} alt={iconName} className=''/>
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
        )
    };

    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="is-flex is-justify-content-center is-flex-direction-column is-align-items-center">
                        
                        <h3 className=''>Featured Skill</h3>
                        
                        {SkillSection("Frontend/Framework", frontend)}
                        {SkillSection("UI Libraries", ui)}
                        {SkillSection("Backend", backend)}
                        {SkillSection("Databases", database)}

                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillSection;
