import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import "../style/Navbar.css";

function HomeNavbar() {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const userId = Cookies.get("USER_ID");
        const userName = Cookies.get("USER_NAME");
        const userEmail = Cookies.get("USER_EMAIL");
        const userPicture = Cookies.get("USER_PICTURE");

        if (userId) {
            setUser({ sub: userId, email: userEmail, name: userName, picture: userPicture });
        }
    }, []);

    const handleLogout = () => {
        googleLogout();
        Cookies.remove("USER_ID");
        Cookies.remove("USER_NAME");
        Cookies.remove("USER_EMAIL");
        Cookies.remove("USER_PICTURE");
        setUser(null);
        window.location.reload();
    };

    function checkPath(path) {
        return location.pathname === path ? "navbar-item is-selected" : "navbar-item";
    }

    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
            <div id="nav-bg" className={scrolled ? "has-shadow" : ""}>
                <header className="">
                    <nav className={`navbar py-2 ${scrolled ? "is-scrolled" : ""}`}>
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item is-size-5">
                                <strong>WS</strong>
                            </Link>
                            
                            {/* Hamburger for mobile */}
                            <a 
                                role="button" 
                                className="navbar-burger" 
                                aria-label="menu" 
                                aria-expanded="false"
                                onClick={() => {
                                    const burger = document.querySelector('.navbar-burger');
                                    const menu = document.querySelector('.navbar-menu');
                                    burger.classList.toggle('is-active');
                                    menu.classList.toggle('is-active');
                                }}
                            >
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-start">
                                <Link to="/" className={checkPath("/")}>
                                    <span className="icon-text">
                                        <span className="icon"><i className="fas fa-home"></i></span>
                                        <span>Home</span>
                                    </span>
                                </Link>
                                <Link to="/about" className={checkPath("/about")}>
                                    <span className="icon-text">
                                        <span className="icon"><i className="fas fa-user"></i></span>
                                        <span>About</span>
                                    </span>
                                </Link>
                                <Link to="/education" className={checkPath("/education")}>
                                    <span className="icon-text">
                                        <span className="icon"><i className="fas fa-book-open"></i></span>
                                        <span>Education</span>
                                    </span>
                                </Link>
                                <Link to="/projects" className={checkPath("/projects")}>
                                    <span className="icon-text">
                                        <span className="icon"><i className="fas fa-code"></i></span>
                                        <span>Projects</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="navbar-end">
                                <Link to="https://ink-space-ten.vercel.app/" className={checkPath("/blog")}>
                                    <span className="icon-text">
                                        <span className="icon"><i className="fas fa-blog"></i></span>
                                        <span>Blog</span>
                                    </span>
                                </Link>
                                <div className="navbar-item">
                                    {user ? (
                                        <div className="is-flex is-align-items-center">
                                            <span className="mx-2">{user.name}</span>
                                            <span onClick={handleLogout} className="icon is-clickable">
                                                <i id="logoutIcon" className="fa-solid fa-right-from-bracket"></i>
                                            </span>
                                        </div>
                                    ) : (
                                        <GoogleLogin
                                            onSuccess={(credentialResponse) => {
                                                const userInfo = jwtDecode(credentialResponse.credential);

                                                Cookies.set("USER_ID", userInfo.sub, { expires: 7, secure: true });
                                                Cookies.set("USER_NAME", userInfo.name, { expires: 7, secure: true });
                                                Cookies.set("USER_EMAIL", userInfo.email, { expires: 7, secure: true });
                                                Cookies.set("USER_PICTURE", userInfo.picture, { expires: 7, secure: true });
                                                setUser(userInfo);
                                                window.location.reload();
                                            }}
                                            onError={() => {
                                                console.log("Login Failed");
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </GoogleOAuthProvider>
    );
}

export default HomeNavbar;