import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";



export default function ProjectCard ({ project }) {

    const [isFlipped, setFlipped] = useState(false);
 
    const handleFlip = () => {
        setFlipped(!isFlipped);
    };


    
    return (
        <>
        <div className="project-flip-card">
        <div className="container">
        <div className={`flip-card ${ isFlipped ? "flipped" : "" }`} >
        <div className='flip-card-inner'>
        <div className="card-border flip-card-front" >
        <div className="card card-content">
            <div className="card__description">
                <div className="card__description-links">
                    <a target="_blank" rel="noopener noreferrer" href={project.github} className="card__description-links-btn icon-hover"><FontAwesomeIcon icon={faGithub} className='card__description-links-btn-icon'/></a>
                    <a target="_blank" rel="noopener noreferrer" href={project.live} className="card__description-links-btn icon-hover"><FontAwesomeIcon icon={faCirclePlay} className='card__description-links-btn-icon'/></a>
                </div>
                <div className="card__description-content">
                    <h3 className="card__description-content-title">{project.title}</h3>
                    <p className="card__description-content-text">{project.subtitle}</p>
                    <div className="card__description-content-tags">
                    {project.tags.map(tag => (
                        <span className="tag" key={tag}>{tag}</span>
                    ))}
                    </div>
                </div>
            </div>
            <div className="card__picture">
                <div className="card__picture-container">
                    <img  src={project.image}className="card__picture-img" alt="Capture d'écran du projet"/>
                    <div className="card__picture-overlay">
                        <button className="flip-button" onClick={handleFlip}>
                        <FontAwesomeIcon icon={faArrowRightLong} className="flip-button-icon"/>
                    </button></div>
                </div>

            </div>
        </div>
        </div>
        <div className="card-border flip-card-back">
        <div className="card-content card-content-back card">
            <div className="card__description">
                <div className="card__description-links">
                    <a target="_blank" rel="noopener noreferrer" href={project.github} className="card__description-links-btn icon-hover"><FontAwesomeIcon icon={faGithub} className='card__description-links-btn-icon'/></a>
                    <a target="_blank" rel="noopener noreferrer" href={project.live} className="card__description-links-btn icon-hover"><FontAwesomeIcon icon={faCirclePlay} className='card__description-links-btn-icon'/></a>
                </div>
                <div className="card__description-content">
                    <h3 className="card__description-content-titleback">{project.title}</h3>
                    <p className="card__description-content-subtitleback">{project.subtitle}</p>
                    <p className="card__description-content-description">{project.description}</p>
                    <div className="card__description-content-tags">
                    {project.tags.map(tag => (
                        <span className="tag" key={tag}>{tag}</span>
                    ))}
                    </div>
                </div>
            </div>
            <div className="card__picture-back">
                        <button className="flip-button" onClick={handleFlip}>
                        <FontAwesomeIcon icon={faArrowRightLong} className="flip-button-back-icon"/>
                    </button>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>

    </>
    );
};

