import React, { useState } from 'react';
import '../App.css';
import logo from "../Assets/logoBanane.png";
import video from "../Assets/short.mp4";
import ReactPlayer from 'react-player';

function Landing() {
  const [showModal, setShowModal] = useState(false);

  // Ouvre le popup
  const handleOpenPopup = () => {
    setShowModal(true);
  };

  // Ferme le popup
  const closePopup = () => {
    setShowModal(false);
  };

  return (
    <div className="landing" onClick={handleOpenPopup}>
      {/* Logo */}
      <div className="logoContainer">
        <img className="logoLanding" id="logo" src={logo} alt="logo" />
      </div>
      
      {/* Texte */}
      <div className="logoContainer">
        <div className="textePostprod">Production | Post-production</div>
      </div>
      
      {/* Video en fond */}
      <div className="videoPlayer">
        <video src={video} autoPlay loop muted playsInline></video>
      </div>
      
      {/* Bouton mobile centré en haut */}
      <button 
        className="popup-toggle-btn"
        onClick={(e) => {
          e.stopPropagation(); // empêche la fermeture
          handleOpenPopup();
        }}>
        Voir Demo Reel
      </button>
      
      {/* Modal */}
{showModal && (
  <div className="modal-backdrop" onClick={closePopup}>
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()} // empêche la fermeture si clic dans le contenu
    >
      {/* Bouton fermer */}
      <button className="close-btn" onClick={closePopup}>X</button>
      
      {/* Zone du lecteur Vimeo */}
      <div className="player-wrapper" onClick={(e) => e.stopPropagation()}>
        <ReactPlayer
          url="https://vimeo.com/668244502"
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default Landing;
