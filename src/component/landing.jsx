import '../App.css'
import logo from "../Assets/logoBanane.png";

function Landing() {

  return (
    <>
    <div className="logoContainer">
        <img className="logoLanding" id="logo" src={logo} alt="logo" />
      </div >

      <div className="logoContainer">
        <div className="textePostprod">Production | Post-production</div>
      </div >
    </>
  )
}

export default Landing
