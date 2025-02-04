import React, { useEffect } from 'react';
import * as THREE from 'three';
import Vanta from 'vanta/dist/vanta.halo.min'; 

const MainSection = () => {

    useEffect(() => {
        const vantaEffect = Vanta({
            el: "#page-bg",
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return (
        <section id="page-bg">
            <div className="greeting">
                <p className="heading">
                    Hi , I am <span className="name">No</span><span className="name2">va</span>
                </p>
                <p className="sub-heading">Front-end Developer</p>
                <div className="contact">
                    <a
                        className="facebook"
                        href="https://www.facebook.com/profile.php?id=100008777108311"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a
                        className="github"
                        href="https://github.com/N0Vee"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/wanichanon-saelee-0b2717252/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        className="discord"
                        href="https://discordapp.com/users/Nveee#9120"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-discord"></i>
                    </a>
                </div>
                <a href="about.html">
                    <button>About Me</button>
                </a>
            </div>
            <div className="my-img">
                <img className="" src='./public/images/me.jpg' alt="Profile" />
            </div>
        </section>
    );
};

export default MainSection;
