import derecha from "../../AssetsImages/flechas-a-la-derecha.png";

import { useForm, ValidationError } from "@formspree/react";

const Espufi = () => {
  const ACTION = process.env.REACT_APP_ACTION;
  const [state, handleSubmit] = useForm("mpznwror");
  if (state.succeeded) {
    return (
      <p>
        Gracias por suscribirte a Pufi. ¡Te agregamos a nuestra lista de correo
        y recibirás actualizaciones directamente en tu buzón de entrada!
      </p>
    );
  }

  return (
    <div className="espufi">
      <div>
        {" "}
        <p className="parrafo-uno">INSTAGRAM</p>
        <p className="parrafo-dos">#ESPUFI</p>
        <div className="grid-container">
          <div className="item-uno"></div>
          <div className="item-dos"></div>
          <div className="item-tres"></div>
          <div className="item-cuatro"></div>
          <div className="item-cinco"></div>
          <div className="item-seis"></div>
        </div>
      </div>
      <p className="parrafo-uno">NEWSLETTER</p>
      <p className="parrafo-dos">SUSCRIBITE</p>
      <p>y enterate de todas las novedades</p>
      <form action="ACTION" method="POST" onSubmit={handleSubmit}>
        <div className="container-text">
          <input
            id="email"
            type="email"
            className="text"
            placeholder="Ingresa tu email"
            name="email"
            required
          ></input>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <button
            className="btn-flecha"
            type="submit"
            disabled={state.submitting}
          >
            <img
              src={derecha}
              className="flecha-derecha"
              alt="flecha hacía la drecha"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Espufi;
