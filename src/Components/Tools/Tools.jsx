import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faSass } from '@fortawesome/free-brands-svg-icons';

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
        { name: "Sass", icon: faSass },
        { name: "Figma", icon: faFigma },
    ];

    const technosRef = useRef(null);

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
                    start: "top center", 
                    toggleActions: "play none none none",
                    once: true 
                }
            }
        );
    }, []);

return (
    <div className="tools">
        <article className="tools__technos">
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
    </div>
)
}