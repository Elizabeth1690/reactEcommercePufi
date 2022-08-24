import "./Home.css";
import NavbarPufi from "../NavbarPufi/NavbarPufi";
import PufiCart from "../PufiCart/PufiCart";
import PufiNap from "../PufiNap/PufiNap";
import PufiPuff from "../PufiPuff/PufiPuff";
import PufiRain from "../PufiRain/PufiRain";

export const Home = () => {
  return (
    <div className="calendar text-xs">
      <NavbarPufi />
      <PufiCart />
      <PufiNap />
      <PufiPuff />
      <PufiRain />
    </div>
  );
};

export default Home;
