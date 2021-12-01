import React from 'react';
import { NavLink } from 'react-router-dom'

const Card = ({ caracter }) => {
        //destructuring = { caracter } = props.caracter.
        //permet de récupérer les données de Caracters
   
    return (
        <li className='card'>
            <img src={caracter.imageUrl} alt="personnage" />
            <div className='data-container'>
                <ul>
                    <li>{caracter.fullName}</li>
                    <li>Aka: {caracter.title}</li>
                    <li>Famille: {caracter.family}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;