import React from 'react'
import '../App.css'
import ReactPlayer from 'react-player'
function Popup1(props) {
    return (props.trigger) ? (
        <div className='popup' onClick={() => props.setTrigger(false)}>
            <div className='popup-inner'>

                {props.children}

                <div className='demo-width'>

                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://vimeo.com/1043146875/242ff43d4d'
                            width='100%'
                            height='100%'
                            controls
                        />
                    </div>

                </div>
            </div>

        </div>

    ) : ``
}

export default Popup1
