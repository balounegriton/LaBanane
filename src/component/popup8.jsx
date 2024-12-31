import React from 'react'
import '../App.css'
import ReactPlayer from 'react-player'
function Popup8(props) {
    return (props.trigger8) ? (
        <div className='popup' onClick={ () =>  props.setTrigger8(false)}>
            <div className='popup-inner'>
             
                {props.children}
            </div>


              <div className='demo-width'>

                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://vimeo.com/1043146973/c838f5826b'
                            width='100%'
                            height='100%'
                            controls
                        />
                    </div>

                </div>
        </div>
        
    ) : ``
}

export default Popup8
