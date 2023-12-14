import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Presentation() {


    return (
        
        <article className="presentation">
            <div className='presentation__title'>
            <h2 className='presentation__title-1'>Á PROPOS DE MOI</h2>
                    <p className='presentation__title-2'>Présentation</p>
            </div>

            <div className="presentation__content">
                <div className="presentation__content-left">
                    <div className="presentation__content-left-top"><FontAwesomeIcon icon={faQuoteLeft} className="presentation__content-left-top-icon"/></div>
                    <p className="presentation__content-left-text">
                    Je suis Loriane, une passionnée de développement web actuellement en phase finale d'une année de formation de développeur web avec OpenClassrooms. Je recherche activement une opportunité de contrat d'apprentissage ou tout autre dispositif de formation pratique au sein d'une entreprise dynamique. Mon objectif est de renforcer mes compétences en tant que développeuse front-end ou full-stack, en contribuant avec créativité et efficacité aux projets sur lesquels je travaillerai. Si vous recherchez une développeuse motivée et prête à relever de nouveaux défis, n'hésitez pas à me contacter!
                    </p>
                    <div className="presentation__content-left-bottom"><FontAwesomeIcon icon={faQuoteRight} className="presentation__content-left-bottom-icon"/></div>
                </div>
            </div>
        </article>
    )
    }