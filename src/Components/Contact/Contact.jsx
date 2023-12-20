import React, { useState } from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {
    const [modalMessage, setModalMessage] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_55y0hni', 'template_tpkjx4e', e.target, 'pMI3LN0J9BfTnu2Mt')
            .then((result) => {
                setModalMessage('Votre message a été envoyé avec succès !');
                setIsModalVisible(true);
                e.target.reset();
            }, (error) => {
                setModalMessage("Une erreur s'est produite, veuillez réessayer.");
                setIsModalVisible(true);
            });
    };


    return (
        <div className="contact">

        <div className='contact__title'>
        <h2 className='contact__title-1'>ÉCRIVEZ-MOI</h2>
                <p className='contact__title-2'>Contact</p>
        </div>

        <form onSubmit={sendEmail} className="contact__form">
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
        {isModalVisible && (
            <div className='modal-filter'>
                <div className="modal">
                    <div className='modal__content'>
                    <p className='modal__content-message'>{modalMessage}</p>
                    <button className='modal__content-btn' onClick={() => setIsModalVisible(false)}>Fermer</button>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
}
