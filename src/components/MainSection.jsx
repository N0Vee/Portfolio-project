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
                    
                    <h1 className='title is-size-4'> Hello </h1>
                    <h1 className='title mb-5 is-size-1'> I'm <span className='has-text-link is-size-1'>Wanichanon</span></h1>
                    <TypeWriter />

                    <div className="box mt-6">
                        <p className="subtitle">In the beninging.</p>
                        <code>-Aum</code>
                    </div>
                    
                    <div className="content mt-5 is-flex is-flex-direction-row is-justify-content-start is-align-content-center is-align-items-center">
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

                        <button className='button is-link ml-6 is-small'>About me</button>
                    </div>

                </div>
                
                <div className="images is-justify-content-center is-align-content-center mr-6">
                    <img src="images/me.jpg" />
                </div>
                
            </div>
            
        </section>
    );
    
};

export default MainSection;
