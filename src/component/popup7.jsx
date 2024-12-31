import React from 'react'
import '../App.css'
import ReactPlayer from 'react-player'
function Popup7(props) {
    return (props.trigger7) ? (
        <div className='popup' onClick={ () =>  props.setTrigger7(false)}>
            <div className='popup-inner'>
             
                {props.children}
            </div>


              <div className='demo-width'>

                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://vimeo.com/1043147023/60306b8c78'
                            width='100%'
                            height='100%'
                            controls
                        />
                    </div>

                </div>
        </div>
        
    ) : ``
}

export default Popup7
