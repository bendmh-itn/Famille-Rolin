import React from 'react';
import { NavLink } from "react-router-dom";
import Firebase from "../firebase";

const NavBar = () => {
    return ( 
        <>
            <nav id="MyModification" className="navbar navbar-expand-lg navbar-dark">
                <NavLink className="navbar-brand" to="/">Famille Rolin</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/anniversaire" >Annif</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/generation3">Génération 3</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/generation4">Génération 4</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/jeu">Jeu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/creer">créer</NavLink>
                        </li>
                    </ul>
                    {/*<button
                        className="buttonConnexion navbar-brand text-right" onClick = {() => {Firebase.signInWithGoogle()}}>
                        Connexion
                    </button>*/}
                </div>
            </nav>
        </>
     );
}
 
export default NavBar;