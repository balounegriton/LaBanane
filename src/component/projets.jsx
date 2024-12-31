import '../App.css'
import image1 from '../Assets/ADRIEN GAGNON.png'
import image2 from '../Assets/BATTERIES EXPERT.png'
import image3 from '../Assets/DEVINCI.PNG'
import image4 from '../Assets/JCP.png'
import image5 from '../Assets/SmokyBay.png'
import image6 from '../Assets/FaimMuseau.png'
import image7 from '../Assets/waterax.png'
import image8 from '../Assets/Sentier.png'

function Projets(props) {

  return (
    <>
  

  <div className="logoContainer">
        <div className="texteSectionService">Projets:</div>
      </div >
      <div className="projectContainer">


        <div className="container" >
          <img className="image" id="image1" src={image1} alt="logo" onClick={() => props.setTrigger(true)} />
          <div className="centered" >Adrien Gagnon</div>
        </div>
        {props.children}
        <div className="container" >
          <img className="image" id="image1" src={image2} alt="logo" onClick={() => props.setTrigger2(true)} />
          <div className="centered" >Batterie Expert</div>
        </div>



      </div>



      <div className="projectContainer">


        <div className="container" >
          <img className="image" id="image1" src={image3} alt="logo" onClick={() => props.setTrigger3(true)} />
          <div className="centered" >Devinci</div>
        </div>

        <div className="container" >
          <img className="image" id="image1" src={image4} alt="logo" onClick={() => props.setTrigger4(true)} />
          <div className="centered" >JC Perreault</div>
        </div>



      </div>

      <div className="projectContainer">


        <div className="container" >
          <img className="image" id="image1" src={image5} alt="logo" onClick={() => props.setTrigger5(true)}/>
          <div className="centered" >SmokeyBay</div>
        </div>

        <div className="container" >
          <img className="image" id="image1" src={image6} alt="logo" onClick={() => props.setTrigger6(true)}/>
          <div className="centered" >Faim Museau</div>
        </div>



      </div>
      <div className="projectContainer">


        <div className="container" >
          <img className="image" id="image1" src={image7} alt="logo" onClick={() => props.setTrigger7(true)} />
          <div className="centered" >Waterax</div>
        </div>

        <div className="container" >
          <img className="image" id="image1" src={image8} alt="logo" onClick={() => props.setTrigger8(true)}  />
          <div className="centered" >Sentier de l'est</div>
        </div>



      </div>





    </>
  )
}

export default Projets
