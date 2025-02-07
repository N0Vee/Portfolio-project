import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


function HomeNavbar() {
    const location = useLocation();

    function checkPath(path) {
        return location.pathname === path ? "navbar-item is-selected" : "navbar-item";
    }

    return (
        <>
            <header className='container'>
                <nav className='navbar py-2'>
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item is-size-5"><strong>WS</strong></Link>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/" className={checkPath("/")}>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fas fa-home"></i>
                                    </span>
                                    <span>Home</span>
                                </span>
                            </Link>
                            <Link to="/about" className={checkPath("/about")}>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    <span>About</span>
                                </span>
                            </Link>
                            <Link to="/#Databases" className={checkPath("/skills")} onClick={() => {
                                databaseRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fas fa-code"></i>
                                    </span>
                                    <span>Skills</span>
                                </span>
                            </Link>
                            <Link to="/education" className={checkPath("/education")}>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fas fa-book-open"></i>
                                    </span>
                                    <span>Education</span>
                                </span>
                            </Link>
                            <Link to="/contact" className={checkPath("/contact")}>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fas fa-at"></i>
                                    </span>
                                    <span>Contact</span>
                                </span>
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <Link to="/blog" className={checkPath("/blog")}>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fas fa-flag"></i>
                                    </span>
                                    <span>Blog</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default HomeNavbar;
