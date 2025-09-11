import React, { useState } from 'react';
import '../App.css';
import logo from "../Assets/logoBanane.png";
import video from "../Assets/short.mp4";
import ReactPlayer from 'react-player';

function Landing() {
  const [showModal, setShowModal] = useState(false);

  const handlePageClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div onClick={handlePageClick} className="landing">
      <div className="logoContainer">
        <img className="logoLanding" id="logo" src={logo} alt="logo" />
      </div>

      <div className="logoContainer">
        <div className="textePostprod">Production | Post-production</div>
      </div>

      <div className="videoPlayer">
        <video src={video} autoPlay loop muted playsInline></video>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Bouton fermer */}
            <button className="close-btn" onClick={closeModal}>X</button>

            {/* ReactPlayer Vimeo */}
            <div className="player-wrapper" onClick={(e) => e.stopPropagation()}>
              <ReactPlayer
                className="react-player"
                url="https://vimeo.com/668244502"
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
