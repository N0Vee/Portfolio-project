import { delay, motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import projects from '../../assets/projects/projects.json';
import "../style/ProjectSection.css";

const ProjectSection = () => {
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

    // Breakpoint columns for the masonry grid
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <section id="projects" className="section project-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header has-text-centered mb-6">
                    <h2 className="title is-2">Projects</h2>
                    <div className="divider"></div>
                    <p className="subtitle is-5">Check out some of my recent work</p>
                </div>

                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid-column"
                >
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <motion.div
                                className="card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                                transition={{ duration: 0.8, delay: project.id * 0.2 }}
                            >

                                <div className="card-image">
                                    <figure className="image">
                                        <img src={project.image} alt={project.title} />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <p className="tag mb-2">{project.category}</p>
                                    <h3 className="title is-4">{project.title}</h3>
                                    <p className="description">{project.description}</p>
                                    <div className="buttons mt-4">
                                        <button className="button githubButton">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="has-text-white" aria-label="GitHub">
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </button>
                                        {/* <button className="button is-text">Demo</button> */}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </Masonry>
            </div>
        </section>
    );
};

export default ProjectSection;