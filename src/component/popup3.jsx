import React from 'react'
import '../App.css'
import ReactPlayer from 'react-player'
function Popup3(props) {
    return (props.trigger3) ? (
        <div className='popup' onClick={ () =>  props.setTrigger3(false)}>
            <div className='popup-inner'>
             
                {props.children}
            </div>


              <div className='demo-width'>

                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://vimeo.com/1043146909/4cba15ec4d'
                            width='100%'
                            height='100%'
                            controls
                        />
                    </div>

                </div>
        </div>
        
    ) : ``
}

export default Popup3
