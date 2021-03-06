import React from "react";
import Navigation from "../components/Navigation";
import ReactLogo from "../components/ReactLogo";

const About = () => {
  return (
    <div>
      <Navigation />
      <ReactLogo />
      <h1>A propos de la série Game of Thrones</h1>
      <br />
      <p>
        Il y a très longtemps, à une époque oubliée, une force a détruit
        l'équilibre des saisons. Dans un pays où l'été peut durer plusieurs
        années et l'hiver toute une vie, des forces sinistres et surnaturelles
        se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la
        Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir
        d'au-delà du Mur protecteur, n'a plus les ressources nécessaires pour
        assurer la sécurité de tous. Après un été de dix années, un hiver
        rigoureux s'abat sur le Royaume avec la promesse d'un avenir des plus
        sombres. Pendant ce temps, complots et rivalités se jouent sur le
        continent pour s'emparer du Trône de Fer, le symbole du pouvoir absolu.
        <br />
        [Source Allociné]
      </p>

    </div>
  );
};

export default About;
