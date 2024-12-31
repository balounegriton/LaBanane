import React from 'react'
import '../App.css'
import ReactPlayer from 'react-player'
function Popup6(props) {
    return (props.trigger6) ? (
        <div className='popup' onClick={ () =>  props.setTrigger6(false)}>
            <div className='popup-inner'>
             
                {props.children}
            </div>


              <div className='demo-width'>

                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://vimeo.com/1043146922/c49c095312'
                            width='100%'
                            height='100%'
                            controls
                        />
                    </div>

                </div>
        </div>
        
    ) : ``
}

export default Popup6
