import Caracters from "../components/Caracters";
import Navigation from "../components/Navigation";
import ReactLogo from "../components/ReactLogo";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <ReactLogo />
      <h1>Accueil</h1>
      <Caracters />
    </div>
  );
};

//exporter pour que le component soit dispo partout
export default Home;
