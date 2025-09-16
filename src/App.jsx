import { useState } from 'react'
import Landing from './component/landing';
import Projets from './component/projets'
import Service from './component/service'
import Apropos from './component/about'
import Contact from './component/Contact'
import Popup1 from './component/popup1';
import Popup2 from './component/popup2';
import Popup3 from './component/popup3';
import Popup4 from './component/popup4';
import Popup5 from './component/popup5';
import Popup6 from './component/popup6';
import Popup7 from './component/popup7';
import Popup8 from './component/popup8';
import PopupDemo from './component/popupDemo';

import './App.css'

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function App() {

  const [buttonPopup1, setButtonPopup1] = useState(false)
  const [buttonPopup2, setButtonPopup2] = useState(false)
  const [buttonPopup3, setButtonPopup3] = useState(false)
  const [buttonPopup4, setButtonPopup4] = useState(false)
  const [buttonPopup5, setButtonPopup5] = useState(false)
  const [buttonPopup6, setButtonPopup6] = useState(false)
  const [buttonPopup7, setButtonPopup7] = useState(false)
  const [buttonPopup8, setButtonPopup8] = useState(false)
  const [buttonPopupDemo, setButtonPopupDemo] = useState(false)



  return (
    <>
      <main>
        <div className="texteContainer" >
          <Link id="texte" to="Service" spy={true}  className="texte" activeClass="texte222"  offset={-50}>
            <div   > SERVICE  </div>
          </Link>

            <Link id="texte" to="Projets" spy={true} className="texte" activeClass="texte222" offset={-50}>
            <div   > PORTFOLIO  </div>
          </Link>
           <Link id="texte" to="Apropos" spy={true} className="texte" activeClass="texte222" offset={-50}>
            <div   > À PROPOS  </div>
          </Link>
           <Link id="texte" to="Contact" spy={true} className="texte" activeClass="texte222" offset={-50}>
            <div   > CONTACT  </div>
          </Link>


       
        </div>



        <Landing setTrigger9={setButtonPopupDemo} />
        <Element name="Service" className="element"> <Service /> </Element>
        <Element name="Projets" className="element porfolio"    > <Projets setTrigger={setButtonPopup1} setTrigger2={setButtonPopup2} setTrigger3={setButtonPopup3} setTrigger4={setButtonPopup4} setTrigger5={setButtonPopup5} setTrigger6={setButtonPopup6} setTrigger7={setButtonPopup7} setTrigger8={setButtonPopup8} />  </Element>

        <Element name="Apropos" className="element"> <Apropos /> </Element>
         <Element name="Contact" className="element"> <Contact /> </Element>
      </main>



      <Popup1 trigger={buttonPopup1} setTrigger={setButtonPopup1} >  </Popup1>
      <Popup2 trigger2={buttonPopup2} setTrigger2={setButtonPopup2} >  </Popup2>
      <Popup3 trigger3={buttonPopup3} setTrigger3={setButtonPopup3} >  </Popup3>
      <Popup4 trigger4={buttonPopup4} setTrigger4={setButtonPopup4} >  </Popup4>
      <Popup5 trigger5={buttonPopup5} setTrigger5={setButtonPopup5} >  </Popup5>
      <Popup6 trigger6={buttonPopup6} setTrigger6={setButtonPopup6} >  </Popup6>
      <Popup7 trigger7={buttonPopup7} setTrigger7={setButtonPopup7} >  </Popup7>
      <Popup8 trigger8={buttonPopup8} setTrigger8={setButtonPopup8} >  </Popup8>

      <PopupDemo trigger9={buttonPopupDemo} setTrigger9={setButtonPopupDemo} >  </PopupDemo>


    </>
  )
}

export default App
