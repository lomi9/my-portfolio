import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import photo from "../../assets/loriane.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Presentation() {

    const pictureRef = useRef(null);
    const titleRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);

    useEffect(() => {
        if (pictureRef.current && titleRef.current && textRef1.current && textRef2.current && textRef3.current) {
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
              .fromTo(textRef1.current, 
                { y: 50, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.8, ease: "power1.out" })
              .fromTo(textRef2.current, 
                { y: 50, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.8, ease: "power1.out" })
              .fromTo(textRef3.current, 
                { y: 50, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.8, ease: "power1.out" });
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
                    <div className="presentation__content-description-text">
                        <p ref={textRef1} className="presentation__content-description-text-p">
                        Je suis Loriane, une passionnée de développement web venant tout juste de terminer avec succès une année de formation de développeur web avec OpenClassrooms. Je recherche activement une opportunité de contrat d’apprentissage, stage, ou toute autre dispositif de formation au sein d’une entreprise dynamique.
                        </p>
                        <p ref={textRef2} className="presentation__content-description-text-p">
                        Mon objectif : Renforcer mes compétences en tant que développeuse front-end ou full stack, et surtout continuer d’apprendre. En effet, j’aime passer des heures à créer des designs avec CSS, créer des composants avec React, ou dynamiser une page avec JavaScript. J’aime également le back-end, pour lequel je souhaiterai également me former.
                        </p>
                        <p ref={textRef3} className="presentation__content-description-text-p">
                        Sortant tout juste de formation, je ne passerai certainement pas tous les tests immédiatement. Cependant, étant quelqu’un d’autonome et très persévérante, je sais rechercher les solutions à mes problèmes afin de les résoudre. Si vous cherchez une personne motivée, et jamais lassée d’apprendre, n’hésitez pas à me contacter.
                        </p>
                    </div>
                </div>
            </div>

        </article>
    )
    }