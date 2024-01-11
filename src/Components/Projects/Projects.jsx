import React, { useEffect, useState } from 'react';
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
import casaMarerio from "../../assets/casa-marerio.webp";
import halimaGarden from "../../assets/halima-garden.webp";

gsap.registerPlugin(TextPlugin, ScrollTrigger);


export default function Projects () {

    const projects = [
        {
            category : "academic",
            title: "Booki",
            tags: ["HTML", "CSS"],
            image: Booki,
            github: "https://github.com/lomi9/projet_2",
            live: "https://lomi9.github.io/projet_2",
            description : "Création responsive d'un site web pour Booki, fidèle à la maquette FIGMA, en utilisant HTML et CSS pour une expérience utilisateur fluide sur tous les appareils."

        },
        {
            category : "academic",
            title: "Sophie Bluel - Architecte",
            tags: ["HTML", "CSS", "JS"],
            image: SophieBluel,
            github: "https://github.com/lomi9/projet_3",
            live: "https://lomi9.github.io/projet_3",
            description : "Développement d'un site web dynamique pour une architecte d'intérieur, intégrant une galerie de projets, une page d'authentification administrateur et une modale d'upload média avec JavaScript."

        },
        {
            category : "academic",
            title: "Nina Carducci - Photographe",
            tags: ["HTML", "CSS", "JS"],
            image: NinaCarducci,
            github: "https://github.com/lomi9/projet_5",
            live: "https://lomi9.github.io/projet_5",
            description : "Optimisation et débogage d'un site de photographie pour accélérer le chargement, renforcer l'accessibilité et améliorer le référencement, grâce à une meilleure gestion des images et une restructuration du code."

        },
        {
            category : "academic",
            title: "Kasa",
            tags: ["REACT", "SASS", "NODE.JS"],
            image: Kasa,
            github: "https://github.com/lomi9/projet_6",
            live: "https://lomi9.github.io/projet_6/",
            description : "Développement d'une application de location immobilière responsive avec React et Node.js. Utilisation de React Router et Sass."

        },
        {
            category : "academic",
            title: "Mon vieux grimoire",
            tags: ["NODE.JS", "ExpressJS", "API REST", "MongoDB"],
            image: MonVieuxGrimoire,
            github: "https://github.com/lomi9/projet_7",
            live: "",
            description : "Implémentation du back-end pour un site de notation de livres avec Node.js, Express et MongoDB, intégrant une API REST pour des opérations CRUD et une authentification sécurisées. Application des principes du Green code."

        },
        {
            category : "academic",
            title: "Mon Portfolio",
            tags: ["REACT", "SASS", "GSAP"],
            image: Portfolio,
            github: "https://github.com/lomi9/portfolio",
            live: "lien_vers_version_live",
            description : "Création de mon portfolio personnel en utilisant React et SASS, présentant une interface utilisateur responsive, mettant en valeur mes projets et compétences en développement web."

        },
        {
            category : "personal",
            title: "Casa Marerio",
            tags: ["REACT", "SASS", "i18n"],
            image: casaMarerio,
            github: "https://github.com/lomi9/casa-marerio",
            live: "https://casa-marerio.com",
            description : "Création de la page de présentation et de réservation pour la location d'un logement de vacances, en utilisant React, sass et i18n pour les différentes langues. Le site est responsive."

        },
        {
            category : "personal",
            title: "Halima Garden (en cours)",
            tags: ["REACT", "SASS"],
            image: halimaGarden,
            github: "https://github.com/lomi9/halima-garden",
            live: "",
            description : "Application de vente d'huiles marrocaines (huiles alimentaires et de beauté) avec une page de connexion utilisateur et une modale administrateur d'ajout de produits."

        },

    ];

    const [filter, setFilter] = useState('academic');

    const filteredProjects = projects.filter(project => project.category === filter);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };


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
        <div className="projects__filter">
            <div className='projects__filter-div'>
            <div className='projects__filter-div-btn'>
                <button className={filter === 'academic' ? 'active' : ''} onClick={() => handleFilterChange('academic')}>Études</button>
                <span className='projects__filter-div-btn-span'>|</span>
                <button className={filter === 'personal' ? 'active' : ''} onClick={() => handleFilterChange('personal')}>Personnels</button>
                <div className={`filter-indicator ${filter}`}></div>
            </div>
            </div>
            </div>
        <div className="projects-grid">
            {filteredProjects.map(project => <ProjectCard project={project} key={project.title} />)}
        </div>
        </div>
    )
}