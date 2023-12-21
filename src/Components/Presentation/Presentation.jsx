import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import photo from "../../assets/loriane.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Presentation() {

    const pictureRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (pictureRef.current && titleRef.current && textRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.presentation',
                    start: 'top bottom',
                    toggleActions: 'play none none none',
                    once: true,
                }
            });
    
            tl.fromTo(pictureRef.current, 
                { y: 50, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.9, ease: "power1.out" })
              .fromTo(titleRef.current, 
                { y: 50, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1, ease: "power1.out" }) 
              .fromTo(textRef.current, 
                { y: 50, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1, ease: "power1.out" }); 
        }


    }, []);


    return (
        
        <article className="presentation">

            <div className="presentation__picture">
                <img ref={pictureRef} src={photo} alt="Loriane" className="presentation__picture-img"/>
            </div>

            <div className="presentation__content">
                <div className="presentation__content-description">
                    <h2 ref={titleRef} className="presentation__content-description-title">Á PROPOS DE MOI</h2>
                    <p ref={textRef} className="presentation__content-description-text">
                    Je suis Loriane, une passionnée de développement web actuellement en phase finale d'une année de formation de développeur web avec OpenClassrooms. Je recherche activement une opportunité de contrat d'apprentissage ou tout autre dispositif de formation pratique au sein d'une entreprise dynamique. Mon objectif est de renforcer mes compétences en tant que développeuse front-end ou full-stack, en contribuant avec créativité et efficacité aux projets sur lesquels je travaillerai. Si vous recherchez une développeuse motivée et prête à relever de nouveaux défis, n'hésitez pas à me contacter!
                    </p>
                </div>
            </div>

        </article>
    )
    }