import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function Tools () {

    const technos = [
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3 },
        { name: "JavaScript", icon: faJs },
        { name: "React", icon: faReact },
        { name: "NodeJS", icon: faNode },
    ];

    const others = [
        { name: "Figma", icon: faFigma },
    ];

    const technosRef = useRef(null);
    const othersRef = useRef(null);

    useEffect(() => {

        gsap.fromTo(
            technosRef.current.children, 
            { y: 50, opacity: 0 }, 
            {
                y: 0, 
                opacity: 1, 
                stagger: 0.2, 
                duration: 0.7,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: technosRef.current,
                    start: "top center+=100", 
                    toggleActions: "play none none none",
                    once: true 
                }
            }
        );
        gsap.fromTo(
            othersRef.current.children, 
            { y: 50, opacity: 0 }, 
            {
                y: 0, 
                opacity: 1, 
                stagger: 0.2, 
                duration: 0.7,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: othersRef.current,
                    start: "top center+=100", 
                    toggleActions: "play none none none",
                    once: true 
                }
            }
        );
    }, []);

return (
    <div className="tools">
        <article className="tools__technos">
            <h4 className="tools__technos-title">Les technologies utilisées</h4>
            <div className="tools__technos-content" ref={technosRef}>
            {technos.map((technos, index) => (
                        <div key={index} className="tools__technos-content-item">
                            <div className="tools__technos-content-item-background">
                            <FontAwesomeIcon icon={technos.icon} size="lg" className='tools-icon'/>
                            </div>
                            <p className="tools__technos-content-item-name">{technos.name}</p>
                        </div>
                    ))}
            </div>

        </article>
        <article className="tools__others">
            <h4 className="tools__others-title">Les outils utilisés</h4>
            <div className="tools__others-content" ref={othersRef}>
            {others.map((others, index) => (
                        <div key={index} className="tools__others-content-item">
                            <div className="tools__others-content-item-background">
                            <FontAwesomeIcon icon={others.icon} size="lg" className='tools-icon'/>
                            </div>
                            <p className="tools__others-content-item-name">{others.name}</p>
                        </div>
                    ))}

            </div>
        </article>

    </div>
)
}