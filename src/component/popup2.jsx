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

function Popup2(props) {
    // Helper to detect mobile device
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const [zoom, setZoom] = useState({ projetIdx: null, imgIdx: null });

    const projetsPopup2 = [
        {
            titre: 'Adrien Gagnon',
            description: 'Description du projet Adrien Gagnon.',
            images: [img1a, img1b]
        },
        {
            titre: 'Batteries Expert',
            description: 'Description du projet Batteries Expert.',
            url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
        },
        {
            titre: 'JCP',
            description: 'Description du projet JCP.',
            images: [img3a, img3b]
        },
        {
            titre: 'Smoky Bay',
            description: 'Description du projet Smoky Bay.',
            url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw'
        },
    ];

    return props.trigger2 ? (
        <div className='popup' style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:10000}}>
            <div
                style={{position:'absolute',top:0,left:0,width:'100vw',height:'100vh',zIndex:1,background:'transparent'}}
                onClick={() => props.setTrigger2(false)}
            />
            <div className='popup-inner' style={{position:'relative',zIndex:2}} onClick={() => props.setTrigger2(false)}>
                <button className="close-btn custom-close-btn" style={{zIndex:3}} onClick={e => {e.stopPropagation(); props.setTrigger2(false);}} aria-label="Fermer la popup">✕</button>
                {props.children}
                <div className='demo-width project-grid'>
                    {projetsPopup2.map((projet, n) => (
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
                                                        if (!isMobile) setZoom({ projetIdx: n, imgIdx: idx });
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
                {/* Zoom modal avec Swiper */}
                {!isMobile && zoom.projetIdx !== null && zoom.imgIdx !== null && (
                    <div className="modal-backdrop" style={{zIndex:10001}} onClick={e => {e.stopPropagation(); setZoom({ projetIdx: null, imgIdx: null });}}>
                        <div className="modal-content" style={{background:'transparent',boxShadow:'none',display:'flex',justifyContent:'center',alignItems:'center',maxWidth:'95vw',maxHeight:'90vh'}} onClick={e => e.stopPropagation()}>
                            <Swiper
                                initialSlide={zoom.imgIdx}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation
                                modules={[Navigation]}
                                 style={{width:'70vw',height:'auto',maxHeight:'80vh'}}
                            >
                                {projetsPopup2[zoom.projetIdx].images.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={img}
                                            alt={projetsPopup2[zoom.projetIdx].titre + ' photo ' + (idx+1)}
                                            style={{width:'100%',height:'100%',objectFit:'contain',borderRadius:'18px',boxShadow:'0 2px 16px rgba(0,0,0,0.25)'}}
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

export default Popup2;
