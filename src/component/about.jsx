import '../App.css';

function Apropos() {
  return (
    <>
      <h2 className="section-title">À propos</h2>
      
      <div className="apropos-container">
        {/* Texte */}
        <div className="texteAbout">
          Fondé en 2019, La Banane est un studio créatif basé à Lac-Brome, QC.
          Nous concevons et réalisons des publicités percutantes pour la télévision et le web, en offrant des services complets ou à la carte : production, post-production.
          Que vous soyez une entreprise ou une agence, notre mission est de comprendre vos besoins pour développer des solutions créatives et efficaces qui font rayonner votre marque.
        </div>
        {/* Placeholder rouge */}
        <div className="image-placeholder"></div>
      </div>
    </>
  )
}

export default Apropos;
