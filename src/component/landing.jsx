import React, { useState } from 'react';
import '../App.css';
import { useEffect } from 'react';
import logo from "../Assets/logoBanane.png";
import video from "../Assets/short.mp4";


function Landing(props) {




  return (
    <div className="landing" onClick={() => props.setTrigger9(true)} >
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
      onClick={() => props.setTrigger9(true)}>
       Demo Reel
      </button>
      
   

    </div>
  );
}

export default Landing;
