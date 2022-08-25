import rainDos from "../../AssetsImages/umbrella.png";

const PufiRain = () => {
  return (
    <div className="container-rain">
      <div className="container-img">
        <p className="parrafo-shop">SHOP</p>
      </div>
      <div className="grupo-rain">
        <img src={rainDos} className="rain-dos" alt="almohada de viaje" />{" "}
        <h3>PUFI RAIN</h3>
        <hr className="linea-rain" />
        <p className="parrafo-rain">
          Descripción del producto. Este es <br />
          un texto simulado
        </p>
        <p className="parrafo-rain"> VER MAS</p>
      </div>
    </div>
  );
};

export default PufiRain;
