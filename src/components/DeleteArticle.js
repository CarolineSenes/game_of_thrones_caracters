import React from 'react';
import axios from 'axios';

const DeleteArticle = ({ id }) => { //on récupère le props passé dans Article

    const handleDelete = () => {
        axios.delete('http://localhost:3003/articles/' + id) //id fait référence au props récupéré
        //comme on utilise pas Redux, le getData du composant parent (News) ne se met pas à jour.
        //On est obligé de recharger la page pour 
        //que l'affichage se mette à jour sans les articles supprimés
        .then(() => {
            window.location.reload();
        })
    }

    //au clique sur Supprimer : si la fenêtre de demande de confirmation est validée, exécuter la fonction handleDelete
    return <button onClick={() => {
        if (window.confirm('Voulez-vous supprimer cet article ?')){
            handleDelete();
        }
    }}>Supprimer</button>;
};

export default DeleteArticle;