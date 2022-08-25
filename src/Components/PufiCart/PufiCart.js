import cart from "../../AssetsImages/img-bolsa.png";
import cartUno from "../../AssetsImages/img-bolsas.png";

export default function PufiCart() {
  return (
    <div className="container-pufi-cart">
      <div>
        {" "}
        <img src={cartUno} className="cart-uno" alt="almohada de viaje" />
      </div>{" "}
      <div className="grupo-cart">
        <img src={cart} className="nap-uno" alt="almohada de viaje" />{" "}
        <h3>PUFI CART</h3>
        <hr className="linea-cart" />
        <p className="parrafo-cart">
          Descripción del producto. Este es <br />
          un texto simulado
        </p>
        <p className="parrafo-cart"> VER MAS</p>
      </div>
    </div>
  );
}
