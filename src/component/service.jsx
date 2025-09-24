
import React, { useState } from 'react';
import productionImg from '../Assets/production.jpg';
import montageImg from '../Assets/Montage.jpeg';
import LiveImg from '../Assets/LIVE.jpeg';
import PostProdImg from '../Assets/PostProd.jpg';
import tournageImg from '../Assets/Tournage.jpg';
import troisDImg from '../Assets/3D.jpg';

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
        <div className="icon-placeholder large" style={{background:'none',padding:0,position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={tournageImg} alt="Tournage" style={{width:'10vw',height:'10vw',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.10)'}} />
          <span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white',fontFamily:'gotBold,Arial,sans-serif',textShadow:'0 2px 8px rgba(0,0,0,0.45)',pointerEvents:'none'}}>Tournage</span>
        </div>
        <div className="element-text">
          Que ce soit en studio ou sur le terrain, on capte vos images avec soin et créativité. De la prise de vue au montage, on transforme vos idées en vidéos qui marquent.
        </div>
      </div>
      <div className="element2">
        <div className="icon-placeholder large" style={{background:'none',padding:0,position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={productionImg} alt="Diffusion" style={{width:'10vw',height:'10vw',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.10)'}} />
          <span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white',fontFamily:'gotBold,Arial,sans-serif',textShadow:'0 2px 8px rgba(0,0,0,0.45)',pointerEvents:'none'}}>Diffusion</span>
        </div>
        <div className="element-text">
          Nous vous accompagnons dans vos démarches auprès des Normes de la publicité et telecaster. Nous préparons et soumettons vos demandes afin que vos messages respectent les règles en vigueur et puissent être diffusés sans souci.
        </div>
      </div>
    </div>
    <div className="elements-container">
      <div className="element2">
        <div className="icon-placeholder large" style={{background:'none',padding:0,position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={LiveImg} alt="Live" style={{width:'10vw',height:'10vw',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.10)'}} />
          <span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white',fontFamily:'gotBold,Arial,sans-serif',textShadow:'0 2px 8px rgba(0,0,0,0.45)',pointerEvents:'none'}}>Live</span>
        </div>
        <div className="element-text">
          Envie de partager votre événement en temps réel ? On s’occupe de tout. Que ce soit un spectacle, une conférence ou un lancement, notre équipe capte et diffuse votre live avec une image et un son de qualité professionnelle.
        </div>
      </div>
      <div className="element2">
        <div className="icon-placeholder large" style={{background:'none',padding:0,position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={productionImg} alt="Livraison" style={{width:'10vw',height:'10vw',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.10)'}} />
          <span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white',fontFamily:'gotBold,Arial,sans-serif',textShadow:'0 2px 8px rgba(0,0,0,0.45)',pointerEvents:'none'}}>Livraison</span>
        </div>
        <div className="element-text">
          On s’occupe de tout pour la diffusion: sous-titrage précis et respect strict des spécifications techniques propres à chaque média, pour une diffusion sans souci.
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
        <div className="icon-placeholder large" style={{background:'none',padding:0,position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={montageImg} alt="Montage" style={{width:'10vw',height:'10vw',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.10)'}} />
          <span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white',fontFamily:'gotBold,Arial,sans-serif',textShadow:'0 2px 8px rgba(0,0,0,0.45)',pointerEvents:'none'}}>Montage</span>
        </div>
        <div className="element-text">
         On assemble vos images pour créer une histoire fluide, rythmée et engageante.
        </div>
      </div>
      <div className="element2">
        <div className="icon-placeholder large" style={{background:'none',padding:0,position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={montageImg} alt="Motion design" style={{width:'10vw',height:'10vw',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.10)'}} />
          <span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white',fontFamily:'gotBold,Arial,sans-serif',textShadow:'0 2px 8px rgba(0,0,0,0.45)',pointerEvents:'none'}}>Motion design</span>
        </div>
        <div className="element-text">
        Des animations dynamiques pour expliquer, illustrer et captiver.
        </div>
      </div>

    </div>
    <div className="elements-container">
      <div className="element2">
        <div className="icon-placeholder large" style={{background:'none',padding:0,position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={troisDImg} alt="3D" style={{width:'10vw',height:'10vw',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.10)'}} />
          <span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white',fontFamily:'gotBold,Arial,sans-serif',textShadow:'0 2px 8px rgba(0,0,0,0.45)',pointerEvents:'none'}}>3D</span>
        </div>
        <div className="element-text">
          Conceptualisation et animation 3D. De la maquette au rendu réaliste, on conçoit vos projets en trois dimensions.
        </div>
      </div>
      <div className="element2">
        <div className="icon-placeholder large" style={{background:'none',padding:0,position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={montageImg} alt="VFX" style={{width:'10vw',height:'10vw',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.10)'}} />
          <span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white',fontFamily:'gotBold,Arial,sans-serif',textShadow:'0 2px 8px rgba(0,0,0,0.45)',pointerEvents:'none'}}>VFX</span>
        </div>
        <div className="element-text">
          Des effets visuels précis et percutants qui subliment vos images et renforcent l’impact de vos vidéos.
        </div>
      </div>
    

    </div>
        <div className="elements-container">
      <div className="element2">
        <div className="icon-placeholder large" style={{background:'none',padding:0,position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={montageImg} alt="Couleurs" style={{width:'10vw',height:'10vw',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.10)'}} />
          <span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white',fontFamily:'gotBold,Arial,sans-serif',textShadow:'0 2px 8px rgba(0,0,0,0.45)',pointerEvents:'none'}}>Couleurs</span>
        </div>
        <div className="element-text">
        Nous optimisons et harmonisons les couleurs de vos images afin d’assurer une cohérence visuelle et une esthétique soignée. L’étalonnage permet aussi de renforcer l’ambiance et de donner une signature unique à votre production.
        </div>
      </div>
      <div className="element2">
        <div className="icon-placeholder large" style={{background:'none',padding:0,position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={montageImg} alt="Audio" style={{width:'10vw',height:'10vw',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.10)'}} />
          <span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:'white',fontFamily:'gotBold,Arial,sans-serif',textShadow:'0 2px 8px rgba(0,0,0,0.45)',pointerEvents:'none'}}>Audio</span>
        </div>
        <div className="element-text">
      Conception sonore, habillage sonore,mixage audio. Chaque image prend vie grâce à un design sonore précis et immersif.
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
          <img src={PostProdImg} alt="Post-Production" />
        </div>
        <div className="text-container">
          <h3 className="section-heading">Post-Production</h3>
          {/* Image entre le titre et le texte sur mobile */}
          <div className="image-placeholder image-mobile-only">
            <img src={PostProdImg} alt="Post-Production" />
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
