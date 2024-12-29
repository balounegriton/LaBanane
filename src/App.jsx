import { useState } from 'react'
import Landing from './component/landing';
import Projets from './component/projets'
import Service from './component/service'
import Apropos from './component/about'
import Popup1 from './component/popup1';
import Popup2 from './component/popup2';


import './App.css'

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function App() {

  const [buttonPopup1, setButtonPopup1] = useState(false)
  const [buttonPopup2, setButtonPopup2] = useState(false)

  const scrollToProjet = () => {

    scroller.scrollTo('Projets', {
      duration: 400,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  const scrollToService = () => {

    scroller.scrollTo('Service', {
      duration: 400,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  const scrollToApropos = () => {

    scroller.scrollTo('Apropos', {
      duration: 400,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <>
      <main>
        <div className="texteContainer" >
          <div id="texte" className="texte" onClick={scrollToProjet}> PROJETS  </div>
          <div id="texte" className="texte" onClick={scrollToService}> SERVICES  </div>
          <div id="texte" className="texte" onClick={scrollToApropos}> À PROPOS  </div>
        </div>



        <Landing />
        <Element name="Projets" className="element"> <Projets  setTrigger={setButtonPopup1} setTrigger2={setButtonPopup2}     />  </Element>
        <Element name="Service" className="element"> <Service /> </Element>
        <Element name="Apropos" className="element"> <Apropos /> </Element>
      </main>



      <Popup1 trigger={buttonPopup1} setTrigger={setButtonPopup1} >  </Popup1>
      <Popup2 trigger2={buttonPopup2} setTrigger2={setButtonPopup2} >  </Popup2>


      

    </>
  )
}

export default App
