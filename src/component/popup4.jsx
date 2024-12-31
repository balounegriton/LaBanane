import React from 'react'
import '../App.css'
import ReactPlayer from 'react-player'
function Popup4(props) {
    return (props.trigger4) ? (
        <div className='popup' onClick={ () =>  props.setTrigger4(false)}>
            <div className='popup-inner'>
             
                {props.children}
            </div>


              <div className='demo-width'>

                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://vimeo.com/1043146953/385174fa8d'
                            width='100%'
                            height='100%'
                            controls
                        />
                    </div>

                </div>
        </div>
        
    ) : ``
}

export default Popup4
