import React, { useState } from 'react';
import '../App.css';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1a from '../Assets/ADRIEN GAGNON.png';
import img1b from '../Assets/DEVINCI.png';
import img2a from '../Assets/BATTERIES EXPERT.png';
import img2b from '../Assets/FaimMuseau.png';
import img3a from '../Assets/JCP.png';
import img3b from '../Assets/Sentier.png';
import img4a from '../Assets/SmokyBay.png';

function Popup3(props) {
    const [zoomImg, setZoomImg] = useState(null);

// === EASY CUSTOMIZATION SECTION ===
// To add or change a project, edit the array below.
// For a video project, provide a 'url'. For a photo carousel, provide an 'images' array.
const projetsPopup3 = [
    {
        titre: 'Projet Vidéo 1',
        description: 'Description du projet vidéo 1.',
        url: 'https://vimeo.com/1043146909/4cba15ec4d'
    },
    {
        titre: 'Projet Photos 1',
        description: 'Description du projet photos 1.',
        images: [img1a, img1b]
    },
    {
        titre: 'Projet Vidéo 2',
        description: 'Description du projet vidéo 2.',
        url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
    },
    {
        titre: 'Projet Photos 2',
        description: 'Description du projet photos 2.',
        images: [img2a, img2b]
    },
    {
        titre: 'Projet Photos 3',
        description: 'Description du projet photos 3.',
        images: [img3a, img3b]
    },
    {
        titre: 'Projet Photos 4',
        description: 'Description du projet photos 4.',
        images: [img4a]
    },
    {
        titre: 'Projet Photos 4',
        description: 'Description du projet photos 4.',
        images: [img4a]
    },
];


    return props.trigger3 ? (
        <div className='popup' style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:10000}}>
            <div
                style={{position:'absolute',top:0,left:0,width:'100vw',height:'100vh',zIndex:1,background:'transparent'}}
                onClick={() => props.setTrigger3(false)}
            />
            <div className='popup-inner' style={{position:'relative',zIndex:2}} onClick={() => props.setTrigger3(false)}>
                <button className="close-btn custom-close-btn" style={{zIndex:3}} onClick={e => {e.stopPropagation(); props.setTrigger3(false);}} aria-label="Fermer la popup">✕</button>
                {props.children}
                <div className='demo-width project-grid'>
                    {projetsPopup3.map((projet, n) => (
                        <div key={n} className="project-block" style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'1em',margin:'0.5em 0'}} onClick={e => e.stopPropagation()}>
                            <div style={{marginBottom:'0.7em',fontWeight:'bold',fontSize:'1.1em',color:'#222',textAlign:'center'}}>{projet.titre}</div>
                            {projet.url ? (
                                <div className='player-wrapper' style={{width:'100%',background:'none',boxShadow:'none',margin:'0',aspectRatio:'16/9',overflow:'hidden',borderRadius:'8px'}}>
                                    <ReactPlayer url={projet.url} width="100%" height="100%" controls style={{borderRadius:'8px'}} />
                                </div>
                            ) : (
                                <div className='player-wrapper' style={{width:'100%',background:'none',boxShadow:'none',margin:'0',aspectRatio:'16/9',overflow:'hidden',borderRadius:'8px'}}>
                                    <Swiper
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        navigation
                                        modules={[Navigation]}
                                        style={{width:'100%',height:'100%'}}
                                    >
                                        {projet.images.map((img, idx) => (
                                            <SwiperSlide key={idx}>
                                                <img
                                                    src={img}
                                                    alt={projet.titre + ' photo ' + (idx+1)}
                                                    style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'8px',cursor:'zoom-in'}}
                                                    onClick={() => setZoomImg(img)}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            )}
                            <div className="description" style={{fontWeight:'normal',fontSize:'0.98em',color:'#444',textAlign:'center',marginTop:'0.5em',maxWidth:'90%',lineHeight:'1.3'}}>{projet.description}</div>
                        </div>
                    ))}
                </div>
                {/* Zoom modal */}
                {zoomImg && (
                    <div className="modal-backdrop" style={{zIndex:10001}} onClick={e => {e.stopPropagation(); setZoomImg(null);}}>
                        <div className="modal-content" style={{background:'transparent',boxShadow:'none',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={e => e.stopPropagation()}>
                            <img src={zoomImg} alt="Zoom" style={{maxWidth:'90vw',maxHeight:'80vh',borderRadius:'18px',boxShadow:'0 2px 16px rgba(0,0,0,0.25)'}} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    ) : null;
}

export default Popup3;
