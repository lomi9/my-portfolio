

export default function Contact() {
    return (
        <div className="contact">

        <div className='contact__title'>
        <h2 className='contact__title-1'>ÉCRIVEZ-MOI</h2>
                <p className='contact__title-2'>Contact</p>
        </div>

        <form name="contact" method="POST" data-netlify="true" className="contact__form">
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="contact__form-name">
                <label htmlFor="name" className="contact__form-name-label">Nom</label>
                <input type="text" id="name" name="name" className="contact__form-name-input" />
            </div>
            <div className="contact__form-email">
                <label htmlFor="email" className="contact__form-email-label">Email</label>
                <input type="email" id="email" name="email" className="contact__form-email-input"/>
            </div>
            <div className="contact__form-message">
                <label htmlFor="message" className="contact__form-message-label">Message</label>
                <textarea id="message" name="message" className="contact__form-message-input"></textarea>
            </div>
            <button type="submit" className="contact__form-button">Envoyer</button>
        </form>
        </div>
    );
}
