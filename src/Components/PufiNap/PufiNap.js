import napUno from "../../AssetsImages/img-nap.jpg";
import napDos from "../../AssetsImages/img-naps.webp";

export default function PufiNap() {
  return (
    <div className="container-nap">
      {" "}
      <div className="grupo-nap">
        <img src={napUno} className="nap-uno" alt="almohada de viaje" />{" "}
        <h3>PUFI NAP</h3>
        <hr className="linea-nap" />
        <p className="parrafo-nap">
          Descripción del producto. Este es <br /> un texto simulado
        </p>
        <p className="parrafo-nap"> MAS INFO</p>
      </div>
      <div>
        {" "}
        <img src={napDos} className="nap-dos" alt="almohada de viaje" />
      </div>
    </div>
  );
}
