import pufi from "../../AssetsImages/pufi.png";
import facebook from "../../AssetsImages/facebook.png";
import twitter from "../../AssetsImages/twitter.png";
import instagram from "../../AssetsImages/instagram.png";
export default function Footer() {
  return (
    <div>
      <footer id="pie-pagina">
        <div id="pufi">
          <img src={pufi} className="logo-pufi" alt="logo" />
        </div>
        <div className="pufis">
          <p>PUFI RAIN</p>
          <p>PUFI PUFF</p>
          <p>PUFI CART</p>
          <p>PUFI NAP</p>
        </div>
        <div className="contactos">
          <p>CONTACTO</p>
          <p>AYUDA</p>
          <p>CÓMO COMPRAR</p>
          <p>TÉRMINOS & CONDICIONES</p>
        </div>
        <div className="compra">
          <p>COMPRA 100% SEGURA</p>
        </div>
        <div className="seguinos">
          <p className="parrafo-redes">SEGUINOS EN</p>
          <img src={facebook} className="logo-redes" alt="logo" />
          <img src={twitter} className="logo-redes" alt="logo" />
          <img src={instagram} className="logo-redes" alt="logo" />
        </div>
      </footer>
    </div>
  );
}
