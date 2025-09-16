import React from 'react'
import '../App.css'
import ReactPlayer from 'react-player'
function PopupDemo(props) {
    return (props.trigger9) ? (
        <div className='popup' onClick={ () =>  props.setTrigger9(false)}>
            <div className='popup-inner2'>
                {props.children}
            </div>
            <div className='popup9-demo-width'>
                <div className='popup9-yellow-frame'>
                    <div className='popup9-player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://vimeo.com/668244502'
                            controls
                        />
                    </div>
                </div>
            </div>
        </div>
        
    ) : ``
}

export default PopupDemo
