import "./Home.css";
import NavbarPufi from "../NavbarPufi/NavbarPufi";
import PufiCart from "../PufiCart/PufiCart";
import PufiNap from "../PufiNap/PufiNap";
import PufiPuff from "../PufiPuff/PufiPuff";
import PufiRain from "../PufiRain/PufiRain";
import Espufi from "../Espufi/Espufi";
import Footer from "../Footer/Footer";

export const Home = () => {
  return (
    <div className="Home">
      <NavbarPufi />
      <PufiRain />
      <PufiPuff />
      <PufiCart />
      <PufiNap />
      <Espufi />
      <Footer />
    </div>
  );
};

export default Home;
