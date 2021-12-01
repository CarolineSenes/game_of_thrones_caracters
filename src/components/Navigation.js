import React from 'react';
// NavLink permet en cliquant sur un lien de naviguer entre les pages
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    const active = ({ isActive }) => "nav-link" + (isActive ? " nav-active" : "")

    return (
        //NavLink = a href
        <div className='navigation'>
            <NavLink to='/' className={active}>
                Accueil
            </NavLink>
            <NavLink to='/news' className={active}>
                News
            </NavLink>
            <NavLink to='/about' className={active}>
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;