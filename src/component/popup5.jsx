import React from 'react'
import '../App.css'
import ReactPlayer from 'react-player'
function Popup5(props) {
    return (props.trigger5) ? (
        <div className='popup' onClick={ () =>  props.setTrigger5(false)}>
            <div className='popup-inner'>
             
                {props.children}
            </div>


              <div className='demo-width'>

                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://vimeo.com/1043147006/c36314f9d7'
                            width='100%'
                            height='100%'
                            controls
                        />
                    </div>

                </div>
        </div>
        
    ) : ``
}

export default Popup5
