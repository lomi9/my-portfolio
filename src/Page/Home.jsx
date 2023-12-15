import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";
import Presentation from "../Components/Presentation/Presentation";
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import Tools from '../Components/Tools/Tools';


gsap.registerPlugin(ScrollTrigger);

export default function Home () {

    const presentationRef = useRef(null);
    const presentationBorderRef = useRef(null);
    const projectRef = useRef(null);
    const projectBorderRef = useRef(null);

    useEffect(() => {

        gsap.to(presentationBorderRef.current, {
            scrollTrigger: {
                trigger: presentationRef.current,
                start: "top top",
                endTrigger: ".home__presentation-trigger-element",
                end: "bottom center",
                scrub: true,
                toggleClass: { targets: presentationBorderRef.current, className: "home__presentation-fixed-border" } 
            }
        });
        gsap.to(projectBorderRef.current, {
            scrollTrigger: {
                trigger: projectRef.current,
                start: "top top",
                endTrigger: ".home__project-trigger-element",
                end: "bottom center",
                scrub: true,
                toggleClass: { targets: projectBorderRef.current, className: "home__project-fixed-border" } 
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
                <div className='home__div-1'>
                <section className='home__presentation' ref={presentationRef} id="presentation">
                <div className="home__presentation-border" ref={presentationBorderRef}></div>
                    <Presentation/>
                </section>
                <section className='home__project' ref={projectRef} id="projects">
                <div className="home__project-border" ref={projectBorderRef}></div>
                    <Projects/>
                </section>
                <section className='home__tools' id="tools">
                    <Tools/>
                </section>
                <div className="home__presentation-trigger-element"></div>
                <div className="home__project-trigger-element"></div>
                </div>
                <section className='home__contact' id="contact">
                    <Contact/>
                </section>
                <div className='home__footer'>
                <p>Footer</p>
                </div>
            </div>
        </div>

    );
};