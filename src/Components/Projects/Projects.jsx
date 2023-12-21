import React, { useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from "../ProjectCard/ProjectCard";
import Booki from "../../assets/booki.png";
import SophieBluel from "../../assets/sophie-bluel.png";
import NinaCarducci from "../../assets/nina-carducci.png";
import Kasa from "../../assets/kasa.png";
import MonVieuxGrimoire from "../../assets/mon-vieux-grimoire.png";
import Portfolio from "../../assets/portfolio.png";

gsap.registerPlugin(TextPlugin, ScrollTrigger);


export default function Projects () {

    const projects = [
        {
            title: "Booki",
            subtitle: "Projet OpenClassrooms",
            tags: ["HTML", "CSS"],
            image: Booki,
            github: "https://github.com/lomi9/projet_2",
            live: "https://lomi9.github.io/projet_2",
            description : "Création responsive d'un site web pour Booki, fidèle à la maquette FIGMA, en utilisant HTML et CSS pour une expérience utilisateur fluide sur tous les appareils."

        },
        {
            title: "Sophie Bluel - Architecte",
            subtitle: "Projet OpenClassrooms",
            tags: ["HTML", "CSS", "JavaScript"],
            image: SophieBluel,
            github: "https://github.com/lomi9/projet_3",
            live: "https://lomi9.github.io/projet_3",
            description : "Développement d'un site web dynamique pour une architecte d'intérieur, intégrant une galerie de projets, une page d'authentification administrateur et une modale d'upload média avec JavaScript."

        },
        {
            title: "Nina Carducci - Photographe",
            subtitle: "Projet OpenClassrooms",
            tags: ["HTML", "CSS", "JavaScript"],
            image: NinaCarducci,
            github: "https://github.com/lomi9/projet_5",
            live: "https://lomi9.github.io/projet_5",
            description : "Optimisation et débogage d'un site de photographie pour accélérer le chargement, renforcer l'accessibilité et améliorer le référencement, grâce à une meilleure gestion des images et une restructuration du code."

        },
        {
            title: "Kasa",
            subtitle: "Projet OpenClassrooms",
            tags: ["REACT", "SASS"],
            image: Kasa,
            github: "https://github.com/lomi9/projet_6",
            live: "https://lomi9.github.io/projet_6/",
            description : "Développement d'une application de location immobilière responsive avec React et Node.js. Utilisation de React Router et Sass."

        },
        {
            title: "Mon vieux grimoire",
            subtitle: "Projet OpenClassrooms",
            tags: ["Node.JS", "ExpressJS"],
            image: MonVieuxGrimoire,
            github: "https://github.com/lomi9/projet_7",
            live: "lien_vers_version_live",
            description : "Implémentation du back-end pour un site de notation de livres avec Node.js, Express et MongoDB, intégrant une API REST pour des opérations CRUD et une authentification sécurisées. Application des principes du Green code."

        },
        {
            title: "Mon Portfolio",
            subtitle: "Projet OpenClassrooms",
            tags: ["React", "Sass"],
            image: Portfolio,
            github: "https://github.com/lomi9/portfolio",
            live: "lien_vers_version_live",
            description : "Création de mon portfolio personnel en utilisant React et SASS, présentant une interface utilisateur responsive, mettant en valeur mes projets et compétences en développement web."

        },

    ];

    useEffect(() => {
        gsap.to('.projects__title-1', {
            scrollTrigger: {
                trigger: '.projects__title-1',
                start: 'top bottom', 
                toggleActions: 'play none none none',
            },
            duration: 2,
            text: {
                value: ".MES PROJETS.",
                delimiter: ""
            },
            ease: "none"
        });

    }, []);

    return (
        <div className="projects">
        <div className='projects__title'>
            <h2 className='projects__title-1'>.</h2>
        </div>
        <div className="projects-grid">
            {projects.map(project => <ProjectCard project={project} key={project.title} />)}
        </div>
        </div>
    )
}