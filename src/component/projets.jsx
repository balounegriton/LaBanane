import React, { useState } from 'react';
import '../App.css';

import image1 from '../Assets/ADRIEN GAGNON.png';
import image2 from '../Assets/BATTERIES EXPERT.png';
import image3 from '../Assets/DEVINCI.PNG';
import image4 from '../Assets/JCP.png';
import image5 from '../Assets/SmokyBay.png';
import image6 from '../Assets/FaimMuseau.png';
import image7 from '../Assets/waterax.png';
import image8 from '../Assets/Sentier.png';

function Projets(props) {
  const totalProjects = 8;
  const [projectCount, setProjectCount] = useState(4); // 4, 6, 8
  const [buttonDisabled, setButtonDisabled] = useState(false); // Pour cacher le bouton après 8

  const handleClick = () => {
    if (projectCount === 4) {
      setProjectCount(6); // Augmente à 6 projets
    } else if (projectCount === 6) {
      setProjectCount(8); // Passe à 8 projets
      setButtonDisabled(true); // Désactive le bouton
    }
  };

  const projects = [
    { img: image1, name: "Adrien Gagnon", trigger: props.setTrigger },
    { img: image2, name: "Batterie Expert", trigger: props.setTrigger2 },
    { img: image3, name: "Devinci", trigger: props.setTrigger3 },
    { img: image4, name: "JC Perreault", trigger: props.setTrigger4 },
    { img: image5, name: "SmokeyBay", trigger: props.setTrigger5 },
    { img: image6, name: "Faim Museau", trigger: props.setTrigger6 },
    { img: image7, name: "Waterax", trigger: props.setTrigger7 },
    { img: image8, name: "Sentier de l'est", trigger: props.setTrigger8 },
  ];

  // Sélectionner les projets à afficher
  const projetsAffiches = projects.slice(0, projectCount);

  // Diviser en lignes de 2 projets
  const lignes = [];
  for (let i = 0; i < projetsAffiches.length; i += 2) {
    lignes.push(projetsAffiches.slice(i, i + 2));
  }

  return (
    <>
 
      <h2 className="section-title">Portfolio</h2>

      {/* Affichage des lignes */}
      {lignes.map((ligne, index) => (
        <div className="projectContainer" key={index}>
          {ligne.map((proj, idx) => (
            <div className="container" key={idx}>
              <img
              id="image1"
                className="image"
                src={proj.img}
                alt={proj.name}
                onClick={() => proj.trigger(true)}
              />
              <div className="centered">{proj.name}</div>
            </div>
          ))}
        </div>
      ))}

      {/* Bouton voir plus */}
      {!buttonDisabled && (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <button className="voir-plus-btn" onClick={handleClick}>
            Voir plus
          </button>
        </div>
      )}
    </>
  );
}

export default Projets;
