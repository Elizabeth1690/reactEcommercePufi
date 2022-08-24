import pufi from "../../AssetsImages/pufi.jpg";
import puff from "../../AssetsImages/puff.png";
import rain from "../../AssetsImages/img-sombrilla.png";
import cart from "../../AssetsImages/bolsa-organica.png";
import nap from "../../AssetsImages/almohada-de-cuello.png";

const NavbarPufi = () => {
  return (
    <div className="main">
      <div className="container-menu">
        <ul className="nav-menu-one">
          <li className="nav-menu-item-one">
            <a className="nav-menu-link-one">Mi Cuenta</a>
          </li>
          <li className="nav-menu-item">
            <a className="nav-menu-link">Mi Compra</a>
          </li>
        </ul>
        <nav className="nav">
          <img src={pufi} className="logo-pufi" alt="logo" />

          <ul className="nav-menu">
            <li className="nav-menu-item">
              <img src={puff} className="logo-puff" alt="puff" />
              <a className="nav-menu-link">Pufi Puff</a>
            </li>
            <li className="nav-menu-item">
              <img src={rain} className="logo-rain" alt="sombrilla" />
              <a className="nav-menu-link">Pufi Rain</a>
            </li>
            <li className="nav-menu-item">
              <img src={cart} className="logo-cart" alt="bolsa-mercado" />
              <a className="nav-menu-link">Pufi Cart</a>
            </li>
            <li className="nav-menu-item">
              <img src={nap} className="logo-nap" alt="almohada-viaje" />
              <a className="nav-menu-link">Pufi Nap</a>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="titulo">ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.</h1>
    </div>
  );
};

export default NavbarPufi;
