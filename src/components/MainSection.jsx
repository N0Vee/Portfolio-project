import React, { useEffect } from 'react';
import * as THREE from 'three';
import Vanta from 'vanta/dist/vanta.halo.min'; 
import TypeWriter from './TypeWriter'


const MainSection = () => {

    // useEffect(() => {
    //     const vantaEffect = Vanta({
    //         el: "#page-bg",
    //         THREE: THREE,
    //         mouseControls: true,
    //         touchControls: true,
    //         gyroControls: false,
    //         minHeight: 200.00,
    //         minWidth: 200.00,
    //     });

    //     return () => {
    //         if (vantaEffect) vantaEffect.destroy();
    //     };
    // }, []);

    return (
        <section className='hero' id='page-bg'>
            <div className="container is-flex ">

                <div className="hero-body is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                    
                    <h1 className='title'> Hello, I'm <span className='has-text-link'>WANICHANON</span></h1>
                    <TypeWriter />

                    <div className="content mt-6 ml-3">
                        <p className="subtitle">In the beninging.</p>
                        <code>-Aum</code>
                    </div>
                    
                    <div className="content mt-5">
                        <span className="icon-text mx-2">
                            <span className="icon">
                                <a href="https://github.com/N0Vee" className='has-text-white'><i className="fab fa-github"></i></a>
                            </span>
                        </span>
                        |
                        <span className="icon-text mx-2">
                            <span className="icon">
                                <a href="https://www.linkedin.com/in/wanichanon-saelee-0b2717252/" className='has-text-white'><i className="fab fa-linkedin"></i></a>
                            </span>
                        </span>
                        |
                        <span className="icon-text mx-2">
                            <span className="icon">
                                <a href="https://discordapp.com/users/Nveee#9120" className='has-text-white'><i className="fab fa-discord"></i></a>
                            </span>
                        </span>
                    </div>

                </div>
                
                <div className="images is-justify-content-center is-align-content-center mr-6">
                    <img src="images/me.jpg" />
                </div>
                
            </div>
            
        </section>
    );
        // <section id="page-bg">
        //     <div className="greeting">
        //         <p className="heading">
        //             Hi , I am <span className="name">No</span><span className="name2">va</span>
        //         </p>
        //         <p className="sub-heading"> <TypeWriter /> </p>
        //         <div className="contact">
        //             <a
        //                 className="facebook"
        //                 href="https://www.facebook.com/profile.php?id=100008777108311"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 <i className="fa-brands fa-facebook"></i>
        //             </a>
        //             <a
        //                 className="github"
        //                 href="https://github.com/N0Vee"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 <i className="fa-brands fa-github"></i>
        //             </a>
        //             <a
        //                 className="linkedin"
        //                 href="https://www.linkedin.com/in/wanichanon-saelee-0b2717252/"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 <i className="fa-brands fa-linkedin"></i>
        //             </a>
        //             <a
        //                 className="discord"
        //                 href="https://discordapp.com/users/Nveee#9120"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 <i className="fa-brands fa-discord"></i>
        //             </a>
        //         </div>
        //         <a href="about.html">
        //             <button className='button'>About Me</button>
        //         </a>
        //     </div>
        //     <div className="my-img">
        //         <img className="" src='/images/me.jpg' alt="Profile" />
        //     </div>
        // </section>
    
};

export default MainSection;
