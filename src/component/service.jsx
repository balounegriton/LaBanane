import React, { useState } from 'react';
import productionImg from '../Assets/production.jpg';

function Service() {
  const [showProduction, setShowProduction] = useState(false);
  const [showPost, setShowPost] = useState(false);

  const handleShowProduction = () => {
    setShowProduction(true);
  };

  const handleShowPost = () => {
    setShowPost(true);
  };

  // Contenu détaillé pour "Production"
const productionDetails = (
  <div className="full-details">
   
    <div className="elements-container">
 
      <div className="element2">
        <div className="icon-placeholder large">Live</div>
        <div className="element-text">
          Envie de partager votre événement en temps réel ? On s’occupe de tout. Que ce soit un spectacle, une conférence ou un lancement, notre équipe capte et diffuse votre live avec une image et un son de qualité professionnelle.
        </div>
        
      </div>
      <div className="element2">
        <div className="icon-placeholder large">Normes pub</div>
        <div className="element-text">
          Normes de la publicité: En plus de la production vidéo, nous vous accompagnons dans vos démarches auprès des Normes de la publicité. Nous préparons et soumettons vos demandes pour assurer qu'elles respectent la réglementation.
        </div>
      </div>

    </div>
    <div className="elements-container">
      <div className="element2">
        <div className="icon-placeholder large">Tournage</div>
        <div className="element-text">
          Que ce soit en studio ou sur le terrain, on capte vos images avec soin et créativité. De la prise de vue au montage, on transforme vos idées en vidéos qui marquent.
        </div>
      </div>
      <div className="element2">
        <div className="icon-placeholder large">Live</div>
        <div className="element-text">
          Envie de partager votre événement en temps réel ? On s’occupe de tout. Que ce soit un spectacle, une conférence ou un lancement, notre équipe capte et diffuse votre live avec une image et un son de qualité professionnelle.
        </div>
        
      </div>
    

    </div>
  </div>
);

  // Contenu détaillé pour "Post-Production"
  const postProductionDetails = (
  <div className="full-details">
   
    <div className="elements-container">
 
      <div className="element2">
        <div className="icon-placeholder large">Live</div>
        <div className="element-text">
          Envie de partager votre événement en temps réel ? On s’occupe de tout. Que ce soit un spectacle, une conférence ou un lancement, notre équipe capte et diffuse votre live avec une image et un son de qualité professionnelle.
        </div>
        
      </div>
      <div className="element2">
        <div className="icon-placeholder large">Normes pub</div>
        <div className="element-text">
          Normes de la publicité: En plus de la production vidéo, nous vous accompagnons dans vos démarches auprès des Normes de la publicité. Nous préparons et soumettons vos demandes pour assurer qu'elles respectent la réglementation.
        </div>
      </div>

    </div>
    <div className="elements-container">
      <div className="element2">
        <div className="icon-placeholder large">Tournage</div>
        <div className="element-text">
          Que ce soit en studio ou sur le terrain, on capte vos images avec soin et créativité. De la prise de vue au montage, on transforme vos idées en vidéos qui marquent.
        </div>
      </div>
      <div className="element2">
        <div className="icon-placeholder large">Live</div>
        <div className="element-text">
          Envie de partager votre événement en temps réel ? On s’occupe de tout. Que ce soit un spectacle, une conférence ou un lancement, notre équipe capte et diffuse votre live avec une image et un son de qualité professionnelle.
        </div>
        
      </div>
    

    </div>
  </div>
  );

  return (
    <div className="montage-section">
      <h2 className="section-title">Services</h2>

      {/* Section Production */}
      <div className="section-row reverse">
        <div className="text-container">
          <h3 className="section-heading">Production</h3>
          {/* Image entre le titre et le texte sur mobile */}
          <div className="image-placeholder image-mobile-only">
            <img src={productionImg} alt="Production" />
          </div>
          <p className="section-text">
            De la pré-production à la production. Nous organisons les tournages et capturons les images, en studio ou sur le terrain, avec caméras, lumière et son professionnels. Chaque plan est pensé pour servir votre message.
          </p>
          {!showProduction && (
            <button className="voir-plus-btn" onClick={handleShowProduction}>
              Voir détails
            </button>
          )}
        </div>
        {/* Image à droite sur desktop uniquement */}
        <div className="image-placeholder image-desktop-only">
          <img src={productionImg} alt="Production" />
        </div>
      </div>
      {/* Affichage du contenu production si activé, qui reste visible */}
      {showProduction && (
        <div className="full-details">{productionDetails}</div>
      )}

      {/* Section Post-Production */}
      <div className="section-row">
        {/* Image à gauche sur desktop uniquement */}
        <div className="image-placeholder image-desktop-only">
          <img src={productionImg} alt="Post-Production" />
        </div>
        <div className="text-container">
          <h3 className="section-heading">Post-Production</h3>
          {/* Image entre le titre et le texte sur mobile */}
          <div className="image-placeholder image-mobile-only">
            <img src={productionImg} alt="Post-Production" />
          </div>
          <p className="section-text">
            Nous transformons vos images en contenu final prêt à diffuser : montage, habillage graphique, animation, 3D, effets visuels et mixage sonore. Chaque détail est travaillé pour livrer une vidéo de qualité, efficace et percutante.
          </p>
          {!showPost && (
            <button className="voir-plus-btn" onClick={handleShowPost}>
              Voir détails
            </button>
          )}
        </div>
      </div>
      {/* Affichage du contenu detail post-production si activé, qui reste visible */}
      {showPost && (
        <div className="full-details">{postProductionDetails}</div>
      )}
    </div>
  );
}

export default Service;
