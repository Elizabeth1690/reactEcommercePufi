import puffUno from "../../AssetsImages/puffpequeño.jpg";
import puffDos from "../../AssetsImages/puff.webp";
export default function PufiPuff() {
  return (
    <div className="container-puff">
      {" "}
      <div className="grupo-puff">
        <img src={puffUno} className="puff-uno" alt="puff" /> <h3>PUFI Puff</h3>
        <hr className="linea-puff" />
        <p className="parrafo-puff">
          Descripción del producto. Este es <br /> un texto simulado
        </p>
        <p className="parrafo-puff"> VER MAS</p>
      </div>
      <div>
        {" "}
        <img src={puffDos} className="puff-dos" alt="almohada de viaje" />
      </div>
    </div>
  );
}
