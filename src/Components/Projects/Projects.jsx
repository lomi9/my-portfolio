import ProjectCard from "../ProjectCard/ProjectCard";
import Booki from "../../assets/booki.png";
import SophieBluel from "../../assets/sophie-bluel.png";
import NinaCarducci from "../../assets/nina-carducci.png";
import Kasa from "../../assets/kasa.png";
import MonVieuxGrimoire from "../../assets/mon-vieux-grimoire.png";
import Portfolio from "../../assets/portfolio.png";

export default function Projects () {

    const projects = [
        {
            title: "Booki",
            subtitle: "Projet OpenClassrooms",
            tags: ["HTML", "CSS"],
            image: Booki,
            github: "https://github.com/lomi9/projet_2",
            live: "https://lomi9.github.io/projet_2"
        },
        {
            title: "Sophie Bluel - Architecte",
            subtitle: "Projet OpenClassrooms",
            tags: ["HTML", "CSS", "JavaScript"],
            image: SophieBluel,
            github: "https://github.com/lomi9/projet_3",
            live: "https://lomi9.github.io/projet_3"
        },
        {
            title: "Nina Carducci - Photographe",
            subtitle: "Projet OpenClassrooms",
            tags: ["HTML", "CSS", "JavaScript"],
            image: NinaCarducci,
            github: "https://github.com/lomi9/projet_5",
            live: "https://lomi9.github.io/projet_5"
        },
        {
            title: "Kasa",
            subtitle: "Projet OpenClassrooms",
            tags: ["REACT", "SASS"],
            image: Kasa,
            github: "https://github.com/lomi9/projet_6",
            live: "https://lomi9.github.io/projet_6/"
        },
        {
            title: "Mon vieux grimoire",
            subtitle: "Projet OpenClassrooms",
            tags: ["Node.JS", "ExpressJS"],
            image: MonVieuxGrimoire,
            github: "https://github.com/lomi9/projet_7",
            live: "lien_vers_version_live"
        },
        {
            title: "Mon Portfolio",
            subtitle: "Projet OpenClassrooms",
            tags: ["React", "Sass", "Gsap"],
            image: Portfolio,
            github: "https://github.com/lomi9/portfolio",
            live: "lien_vers_version_live"
        },

    ];

    return (
        <div className="projects">
        <div className='projects__title'>
        <h2 className='projects__title-1'>TRAVAUX</h2>
                <p className='projects__title-2'>Mes projets</p>
        </div>
        <div className="projects-grid">
            {projects.map(project => <ProjectCard project={project} key={project.title} />)}
        </div>
        </div>
    )
}