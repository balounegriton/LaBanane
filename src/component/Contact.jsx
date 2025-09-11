import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import '../App.css'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'

function Contact() {
  const formRef = useRef();

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ton service EmailJS
    emailjs.sendForm('service_0ebjtys', 'template_ad1xzja', e.target, '7DbSLNDiFbjRdORct')
      .then((result) => {
        alert('Message envoyé !');
      }, (error) => {
        alert('Erreur lors de l\'envoi.');
      });
  };

  return (
    <div>
      <h2 className="section-title">Contact</h2>
      <div className="contact-wrapper">

        {/* Formulaire */}
        <div className="contact-form">
          <h3 className="form-title">Parlez-nous de votre projet</h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom*</label>
              <input type="text" id="nom" name="nom" placeholder="Votre nom" required />
            </div>
            <div className="form-group">
              <label htmlFor="entreprise">Entreprise</label>
              <input type="text" id="entreprise" name="entreprise" placeholder="Votre entreprise" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Courriel*</label>
              <input type="email" id="courriel" name="courriel" placeholder="Votre courriel" required />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Téléphone</label>
              <input type="tel" id="telephone" name="telephone" placeholder="Votre téléphone"  />
            </div>
            <div className="form-group">
              <label htmlFor="sujet">Sujet*</label>
              <select id="sujet" name="sujet" required>
                <option value="">Choisir un sujet</option>
                <option>Production</option>
                <option>Post-production</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Décrivez votre projet" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Envoyer</button>
          </form>
        </div>

        {/* Contact info */}
        <div className="contact-info">
          <div className="info-item size1">LAC-BROME</div>
          <div className="info-item size2">19 Chem. Howard Lac-Brome,QC</div>
          <div className="info-item size3">H2K 3G8</div>
          <div className="info-item size4">info@la-banane.ca</div>
          
          {/* Icônes réseaux */}
          <div className="social-icons">
            <img src={facebook} alt="Facebook" onClick={() => handleClick('https://facebook.com/LaBananeStudio')} />
            <img src={instagram} alt="Instagram" onClick={() => handleClick('https://instagram.com/labanane_studio')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
