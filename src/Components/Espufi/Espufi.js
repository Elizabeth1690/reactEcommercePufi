import derecha from "../../AssetsImages/flechas-a-la-derecha.png";
/*import { useForm, ValidationError } from "@formspree/react";*/

const Espufi = () => {
  //SE DEJA ESTE CÓDIGO COMENTADO, PORQUE FORMSPREE NO ME CONECTO, ME SALIA ERROR EN LA RUTA import { useForm, ValidationError } from "@formspree/react"; PRINCIPALMENTE POR LA PARTE DEL @ TOME EL CÓDIGO DE LA PROPIA PÁGINA, MIRE UN VIDEO UNA DOCUMENTACIÓN DE GOOGLE Y CON TODOS ME SALE ERROR EN LO QUE YA MENCIONE*/
  /*const [state, handleSubmit] = useForm("mpznwror");*/
  /*{<ValidationError prefix="Email" field="email" errors={state.errors} />}*/
  /* disabled={state.submitting}*/
  /* if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }*/
  const handleSubmit = () => {};

  return (
    <div className="espufi">
      <div></div>
      <p className="parrafo-uno">NEWSLETTER</p>
      <p className="parrafo-dos">SUSCRIBITE</p>
      <p>y enterate de todas las novedades</p>
      <form
        action="https://formspree.io/f/mpznwror"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="container-text">
          <input
            id="email"
            type="email"
            className="text"
            placeholder="Ingresa tu email"
            name="email"
            required
          ></input>

          <button className="btn-flecha" type="submit">
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
