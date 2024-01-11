import logo from "../../assets/logo_transparent_beige.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer () {

    return (
        <div className="footer">
            <div className="footer__content">
                <img src={logo} alt="logo - Loriane MICHEL" className="footer__content-logo"/>
                <div className="footer__content-link">
                <a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/loriane-michel-b791a6268" className="footer__content-link-a"><FontAwesomeIcon icon={faLinkedin} className="footer__content-link-a-linkedin"/></a>
                </div>
                <span className="footer__content-text">Dernière mise à jour : Janvier 2024</span>
            </div>

        </div>
    )
}