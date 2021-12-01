import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


const Caracters = () => {
  //déclaration d'une nouvelle variable d'état : data (récupérées de l'appel api)
  //setData servira à actualiser data
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  //quand l'appel API est joué 1 fois, la valeur passe à false, donc l'appel API ne se rejoue plus en boucle
  const [playOnce, setPlayOnce] = useState(true); //valeur par défaut sur true

  //stocke la famille selectionné dans le menu déroulant
  const [selectedOption, setSelectedOption] = useState("");

  // useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    if (playOnce) {
      axios
        .get("https://thronesapi.com/api/v2/Characters")
        //on stocke la réponse de l'API dans la variable data en utilisant setData
        //comme le callback (crochets de fin) est vide, il fait l'appel à l'api qu'1 fois
        .then((res) => {
          setData(res.data);
          setPlayOnce(false);
        });
    }

    const sortedCaracter = () => {
      //pour utiliser la fonction "sort" en JS, il faut d'abord transformer l'array data en objet
      const caracterObj = Object.keys(data).map((i) => data[i]);
      //Sort an array of objects by strings
      const sortedArray = caracterObj.sort((a, b) => {
        let fa = a.fullName.toLowerCase(),
          fb = b.fullName.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      //on stocke sortedArray dans sortedData
      setSortedData(sortedArray);
    };
    sortedCaracter();
  }, [data, playOnce]); //quand la data de axios est arrivée, on relance avec la callback le useEffect pour la fonction sortedCaracter (sans l'appel API, qui sera passé à false)

  const family = data.map((f) => f.family);
  const sortFamily = [...new Set(family)].sort();

  return (
    //on map le tableau de réponse pour itérer sur chq item et récupérer le nom des caracters
    <div className="caracters">
      <div className="sort-container">
        <select name="families" value={selectedOption} onChange={e => setSelectedOption(e.currentTarget.value)}>
          <option value="">-- Toutes les familles --</option>
          {sortFamily.map((family) => {
            return (
              <option
                key={family}
              >
                {family}
              </option>
            );
          })}
        </select>
      </div>
      <ul className="caracters-list">
        {sortedData
        .filter((caracter) => caracter.family.includes (selectedOption))
        .map((caracter) => (
          //on passe une props au component Card : on envoie les données de caracter à Card
          //chaque item mapé doit avoir une key pour que React puisse identifier chq changement
          <Card caracter={caracter} key={caracter.id} />
        ))}
      </ul>
    </div>
  );
};

export default Caracters;
