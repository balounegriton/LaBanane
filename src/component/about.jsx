import '../App.css'
import ReactPlayer from 'react-player'
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
function Apropos() {
  const handleClick = () => {
    window.open('https://www.facebook.com/LaBananeStudio', '_blank');
  }

  const handleClick2 = () => {
    window.open('https://www.instagram.com/labanane_studio/', '_blank');
  }
  return (
    <>
      <div className="logoContainer">
        <div className="texteSectionService">À propos:</div>
      </div >


      <div className="texteAbout"  > Fondé en 2017 par Virginie Delorme et Noé Provost, La Banane est un studio créatif plein services, basé à Lac-Brome, Qc. Nous sommes spécialisés dans les publicités TV et web. Nous offrons un service de consultation qui cible vos besoins afin de proposer une solution efficace adaptée à vos besoins. 

      </div>

      <div className='demo-width2'>
{/* 
      <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://vimeo.com/668244502'
            width='100%'
            height='100%'
            controls
          />
        </div> */}

      </div>

      <div className="container2000">
      <div className="containerContact">

        <div >

          <div className="texteContact"  >
            Contact
          </div>
          <div className="texteContact2"  >

            info@la-banane.ca
          </div>

        </div>



        <div>

          <div className="texteContact"  >
          Basée à
          </div>
          <div className="texteContact2"  >

            Lac-Brome, Canada
          </div>
        </div>


      </div>
      <div className="container1000"  >

        <img className="facebook" id="" src={facebook} alt="logoL" onClick={handleClick} />
        <img className="facebook2" id="" src={instagram} alt="logoL" onClick={handleClick2} />

      </div>

</div>
    </>
  )
}

export default Apropos
