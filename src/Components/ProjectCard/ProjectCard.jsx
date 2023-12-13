import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';



export default function ProjectCard ({ project }) {



    
    return (
        <article className="card-border" >
        <div className="card">
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
                    <div className="card__picture-overlay"></div>
                </div>

            </div>
        </div>
        </article>
    );
};

