import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import ReactLogo from "../components/ReactLogo";
import axios from "axios";
import Article from "../components/Article";

const News = () => {
  //on stocke les data
  const [newsData, setNewsData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  //on lance la fonction getData dans un useEffet
  useEffect(() => {
    getData();
  }, []);

  //on récupère les données de notre API locale (db.json) et on utilise setNewsData pour mettre à jour la varaible newsData
  const getData = () => {
    axios
      .get("http://localhost:3003/articles")
      .then((res) => setNewsData(res.data));
  };

  //fonction qui se lance au submit du button
  const handleSubmit = (e) => {
    e.preventDefault(); //évite le rechargement de page au submit du button
    if (content.length < 3) {
      setError(true);
    } else {
      axios
        .post("http://localhost:3003/articles", {
          //envoie les variables author, content et la date à la base de données
          author: author,
          content: content,
          date: Date.now(),
        })
        .then(() => {
          setError(false);
          setAuthor(""); //on remet à 0 les variables author et content
          setContent(""); //on remet à 0 les variables author et content
          getData(); //lance fonction qui récupère les données de l'API
        });
    }
  };

  return (
    <div className="news-container">
      <Navigation />
      <ReactLogo />
      <h1>News</h1>

      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={(e) => setAuthor(e.target.value)} //a chq changement dans l'input, la valeur de l'input sera stockée dans la variable "author"
          type="text"
          placeholder="Nom"
          value={author} //prend la nouvelle valeur de la variable après la remise à 0 dans axios
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }} //terner qui teste si error est true, alors bordure rouge, sinon bordure normale
          onChange={(e) => setContent(e.target.value)} //a chq changement dans l'input, la valeur du textarea sera stockée dans la variable "content"
          placeholder="Message"
          value={content} //prend la nouvelle valeur de la variable après la remise à 0 dans axios
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 3 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>

      <ul>
        {newsData
          .sort((a, b) => b.date - a.date) //tri les articles du +récent au -récent
          .map((article) => (
            <Article article={article} key={article.id} /> //on passe "article" en props pour récupérer les données dans le component Article.
          ))}
      </ul>
    </div>
  );
};

export default News;
