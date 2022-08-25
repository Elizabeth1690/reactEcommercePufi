import napUno from "../../AssetsImages/img-nap.jpg";
import napDos from "../../AssetsImages/img-naps.webp";

export default function PufiCart() {
  return (
    <div className="container-nap">
      {" "}
      <div className="grupo-nap">
        <img src={napUno} className="nap-uno" alt="almohada de viaje" />{" "}
        <h3>PUFI NAP</h3>
        <p>Descripción del producto. Este es un texto simulado</p>
        <p> MAS INFO</p>
      </div>
      <div>
        {" "}
        <img src={napDos} className="nap-dos" alt="almohada de viaje" />
      </div>
    </div>
  );
}
