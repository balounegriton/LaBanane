import React, { useState } from 'react';
import '../App.css';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1a from '../Assets/ADRIEN GAGNON.png';
import img1b from '../Assets/DEVINCI.png';

// === EASY CUSTOMIZATION SECTION ===
// For a video project, provide a 'url'. For a photo carousel, provide an 'images' array.
const projetsPopup7 = [
    {
        titre: 'Projet Vidéo',
        description: 'Description du projet vidéo.',
        url: 'https://vimeo.com/1043147023/60306b8c78'
    },
    {
        titre: 'Projet Photos',
        description: 'Description du projet photos.',
        images: [img1a, img1b]
    },
];

function Popup7(props) {
    // Helper to detect mobile device
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // zoomState: { projetIdx, imgIdx } or null
    const [zoomState, setZoomState] = useState(null);
    return props.trigger7 ? (
        <div className='popup' style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:10000}}>
            <div
                style={{position:'absolute',top:0,left:0,width:'100vw',height:'100vh',zIndex:1,background:'transparent'}}
                onClick={() => props.setTrigger7(false)}
            />
            <div className='popup-inner' style={{position:'relative',zIndex:2}} onClick={() => props.setTrigger7(false)}>
                <button className="close-btn custom-close-btn" style={{zIndex:3}} onClick={e => {e.stopPropagation(); props.setTrigger7(false);}} aria-label="Fermer la popup">✕</button>
                {props.children}
                <div className='demo-width project-grid'>
                    {projetsPopup7.map((projet, n) => (
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
                                                    style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'8px',cursor: isMobile ? 'default' : 'zoom-in'}}
                                                    onClick={() => {
                                                        if (!isMobile) setZoomState({ projetIdx: n, imgIdx: idx });
                                                    }}
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
                {/* Zoom modal with Swiper navigation */}
                {!isMobile && zoomState && projetsPopup7[zoomState.projetIdx] && projetsPopup7[zoomState.projetIdx].images && (
                    <div className="modal-backdrop" style={{zIndex:10001}} onClick={e => {e.stopPropagation(); setZoomState(null);}}>
                        <div className="modal-content" style={{background:'transparent',boxShadow:'none',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={e => e.stopPropagation()}>
                            <Swiper
                                initialSlide={zoomState.imgIdx}
                                navigation
                                modules={[Navigation]}
                                style={{width:'70vw',height:'auto',maxHeight:'80vh'}}
                            >
                                {projetsPopup7[zoomState.projetIdx].images.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={img}
                                            alt={projetsPopup7[zoomState.projetIdx].titre + ' zoom photo ' + (idx+1)}
                                            style={{width:'100%',height:'auto',maxHeight:'80vh',borderRadius:'18px',boxShadow:'0 2px 16px rgba(0,0,0,0.25)'}}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                )}
            </div>
        </div>
    ) : null;
}

export default Popup7;
