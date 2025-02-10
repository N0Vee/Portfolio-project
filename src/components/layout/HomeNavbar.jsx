import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const CLIENT_ID = "367457418777-ffcu5lmja31v91s99dhe4d9elkur2dcj.apps.googleusercontent.com"; 

function HomeNavbar() {
    const location = useLocation();
    const [user, setUser] = useState(null);

    function checkPath(path) {
        return location.pathname === path ? "navbar-item is-selected" : "navbar-item";
    }

    useEffect(() => {
        
        const storedUser = Cookies.get("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.google.accounts.id.initialize({
                client_id: CLIENT_ID,
                callback: handleCredentialResponse,
                ux_mode: "popup",
                login_uri: window.location.href,  
            });

            window.google.accounts.id.renderButton(
                document.getElementById("google-login"),
                { theme: "outline", size: "large" }
            );
        };
    }, []);

    const handleCredentialResponse = (response) => {
        const userInfo = JSON.parse(atob(response.credential.split(".")[1]));
        setUser(userInfo);
        Cookies.set("user", JSON.stringify(userInfo), { expires: 7 });
        console.log("User Info:", userInfo);
    };

    const logout = () => {
        setUser(null);
        Cookies.remove("user");
        window.location.reload();
    };

    function Profile() {
        return (
            <>
                {!user ? (
                    <div id="google-login" className="navbar-item"></div>
                ) : (
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">{user.name}</a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item" onClick={logout}>Logout</a>
                        </div>
                    </div>
                )}
            </>
        );
    }

    return (
        <>
            <header className="container">
                <nav className="navbar py-2">
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
                            <Profile />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default HomeNavbar;
