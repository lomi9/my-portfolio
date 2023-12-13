/* global VANTA */
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';



export default function Banner ( ) {

    const [vantaEffect, setVantaEffect] = useState(0); 
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) { 
            setVantaEffect(VANTA.BIRDS({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0xF3EDE2,
                color1: 0x671320,
                color2: 0xF58F3B,
                colorMode: "variance",
                birdSize: 1.10,
                wingSpan: 10.00,
                speedLimit: 4.00,
                separation: 78.00
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy(); 
        };

        
    }, [vantaEffect]); 

    useEffect(() => {
        gsap.registerPlugin(TextPlugin);
        gsap.to('.home__banner-content-title-h1', {
            duration: 2,
            text: {
                value: "LORIANE MICHEL .",
                delimiter: "" 
            },
            ease: "none"
        });
    }, []);


    return (
        <div className="home__banner-content" id='vanta-background' ref={vantaRef}>
        <div className="home__banner-content-title">
            <h1 className='home__banner-content-title-h1'>L</h1>
        </div>
        <p className="home__banner-content-text">Développeuse web en recherche d'apprentissage</p>
        <Link  to="content" smooth={true} duration={500} className="home__banner-content-icon">
        <FontAwesomeIcon icon={faAngleDown} className='fa-angle-down' bounce />  
        </Link>
    </div>
    )
}