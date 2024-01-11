import logo from "../../assets/logo_transparent_beige.png";

export default function Footer () {

    return (
        <div className="footer">
            <div className="footer__content">
                <img src={logo} alt="logo - Loriane MICHEL" className="footer__content-logo"/>
                <span className="footer__content-text">Dernière mise à jour : Janvier 2024</span>
            </div>

        </div>
    )
}