import React, { useState } from "react";
import axios from "axios";
import DeleteArticle from "./DeleteArticle";

const Article = ({ article }) => {
  //destructuring = { article } = props.article.
  //permet de récupérer les données de News

  const [isEditing, setIsEditing] = useState(false); //est-ce qu'on est en train d'éditer ?
  const [editedContent, setEditedContent] = useState(""); //variable qui stocke le contenu édité

  //convertir timestamp en date locale
  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      //ajoute heure et minutes
      hour: "numeric",
      minute: "numeric",
    });
    return newDate;
  };

  const handleEdit = () => {
    //envoyer les données modifiées (data) à la base de données avec l'id de l'article concerné
    const data = {
      author: article.author, //si base de données nosql ou sql : ne mettre que le(s) champs modifié(s)
      content: editedContent ? editedContent : article.content, //si la variable editedContent est sur true (=contient qlqch), alors afficher le contenu, sinon reprendre le contenu de article.content. On ne pourra pas remonter cette donnée au paren sans utiliser Redux
      date: article.date,
    };
    axios.put("http://localhost:3003/articles/" + article.id, data)
    //passe isEditing à false pour transformer le textarea en p
    .then(() => {
      setIsEditing(false);
    })
  };

  return (
    <div className="article" style={{background: isEditing ? "#f3feff" : 'white'}}>
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateParser(article.date)}</em>
      </div>
      {isEditing ? ( //si button Editer cliqué : on créé un textarea avec comme contenu par défaut article.content
        <textarea
          onChange={(e) => setEditedContent(e.target.value)}
          autoFocus
          defaultValue={editedContent ? editedContent : article.content} //si on utilisait Redux la defaultValue serait juste {article.content}
        ></textarea>
      ) : (
        //sinon on créé un p avec comme contenu editedContent ou article.content en fonction de l'état de editedContent
        //si on utilisait Redux on aurait pas besoin de la terner. On afficherait juste {article.content}
        <p>{editedContent ? editedContent : article.content}</p>
      )}

      <div className="btn-container">
        {isEditing ? (
          <button onClick={handleEdit}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Editer</button>
        )}
        <DeleteArticle id={article.id} />
      </div>
    </div>
  );
};

export default Article;
