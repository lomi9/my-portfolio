import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";
import Presentation from "../Components/Presentation/Presentation";
import Projects from '../Components/Projects/Projects';


gsap.registerPlugin(ScrollTrigger);

export default function Home () {

    const presentationRef = useRef(null);
    const presentationBorderRef = useRef(null);

    useEffect(() => {

        gsap.to(presentationBorderRef.current, {
            scrollTrigger: {
                trigger: presentationRef.current,
                start: "top top",
                endTrigger: ".home__presentation-trigger-element",
                end: "bottom top",
                scrub: true,
                toggleClass: { targets: presentationBorderRef.current, className: "home__presentation-fixed-border" } 
            }
        });
    }, []);


    return (
        <div>
            <header className='home__navbar'>
                <Navbar/>
            </header>
            <section className="home__banner" id="home">
                <Banner/>
            </section>
            <div className="home__content" id="content">
                <section className='home__presentation' ref={presentationRef} id="presentation">
                <div className="home__presentation-border" ref={presentationBorderRef}></div>
                    <Presentation/>
                    <div className="home__presentation-trigger-element"></div>
                </section>
                <section className='home__projects'  id="projects">
                    <Projects/>
                </section>
                <section className='home__tools' id="tools">
                    <p>Tools</p>
                </section>
                <section className='home__contact' id="contact">
                    <p>contact</p>
                </section>
                <div className='home__footer'>
                <p>Footer</p>
                </div>
            </div>
        </div>

    );
};