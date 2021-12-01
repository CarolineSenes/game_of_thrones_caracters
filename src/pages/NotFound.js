import React from "react";
import Navigation from '../components/Navigation';
import ReactLogo from '../components/ReactLogo';


const NotFound = () => {
  return (
    <div>
      <Navigation />
      <ReactLogo />
      <h1>Erreur 404</h1>
    </div>
  );
};

export default NotFound;
