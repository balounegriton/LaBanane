import React from 'react'
import '../App.css'
import ReactPlayer from 'react-player'
function Popup2(props) {
    return (props.trigger2) ? (
        <div className='popup' onClick={ () =>  props.setTrigger2(false)}>
            <div className='popup-inner'>
             
                {props.children}
            </div>


              <div className='demo-width'>

                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://vimeo.com/668244502'
                            width='100%'
                            height='100%'
                            controls
                        />
                    </div>

                </div>
        </div>
        
    ) : ``
}

export default Popup2
