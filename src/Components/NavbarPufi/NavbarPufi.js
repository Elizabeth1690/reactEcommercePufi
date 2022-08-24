import pufi from "../../AssetsImages/pufi.png";
import puff from "../../AssetsImages/puff.png";
import rain from "../../AssetsImages/img-sombrilla.png";
import cart from "../../AssetsImages/bolsa-organica.png";
import nap from "../../AssetsImages/almohada-de-cuello.png";
import flecha from "../../AssetsImages/flecha-hacia-abajo.png";

const NavbarPufi = () => {
  return (
    <div className="main">
      <div className="container-menu">
        <ul className="nav-menu-one">
          <li className="nav-menu-item-one">
            <a className="nav-menu-link-one" id="cuenta">
              MI CUENTA{" "}
              <img src={flecha} className="flecha" alt="flecha hacía abajo" />
            </a>
          </li>
          <li className="nav-menu-item">
            <a className="nav-menu-link-one">MI COMPRA</a>
          </li>
        </ul>
        <nav className="nav">
          <img src={pufi} className="logo-pufi" alt="logo" />

          <ul className="nav-menu">
            <li className="nav-menu-item">
              <img src={puff} className="logo-puff" alt="puff" />
              <a className="nav-menu-link">PUFI PUFF</a>
            </li>
            <li className="nav-menu-item">
              <img src={rain} className="logo-rain" alt="sombrilla" />
              <a className="nav-menu-link">PUFI RAIN</a>
            </li>
            <li className="nav-menu-item">
              <img src={cart} className="logo-cart" alt="bolsa-mercado" />
              <a className="nav-menu-link">PUFI CART</a>
            </li>
            <li className="nav-menu-item">
              <img src={nap} className="logo-nap" alt="almohada-viaje" />
              <a className="nav-menu-link">PUFI NAP</a>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="titulo">
        ESTÁR CÓMODO,
        <br />
        NUNCA FUE TAN FÁCIL.
      </h1>
      <p className="parrafo">SHOP</p>
    </div>
  );
};

export default NavbarPufi;
