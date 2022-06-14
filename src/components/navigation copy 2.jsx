import React from "react";
import { useState } from "react" ; 
import myLogo from './logo-cg.jpg';
import "./Nav.css";
    //

    export const Navigation = (props) => {
    const  [showLinks, setShowLinks] = useState(false);
    /* button navbar-burger => onClick () */
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
        /* on edite la valeur (affiche les links) 
           que si showlinks est différent de (false) et à true on l'active */
    }
    /*console.log(showLinks);*/

    return (
        /* si classe chow-nav activée => on affiche 
        <nav className="navbar show-nav"> 
        on passe en jajascript pour effectuer la condition
        */    
        <nav id='menu' className={`navbar ${ showLinks ? "show-nav" : "hide-nav"} `}>
        <div className='container'>   
        <div className="navbar__logo">
            <a href="/" className="navbar__link"> 
            <img className="logo" src={myLogo} alt="christina grillet logo" />
            </a></div> 
            <ul className="navbar__links">
               <li className="navbar__item slideInDown-1" nav={showLinks} onClick={() => setShowLinks(!showLinks)}>
                   <a href="#accueil" className="navbar__link"> 
                   Accueil
                   </a>{''}
               </li>
               <li className="navbar__item slideInDown-2" nav={showLinks} onClick={() => setShowLinks(!showLinks)}>
                   <a href="#soins" className="navbar__link"> 
                   Soins
                   </a>
               </li>
               <li className="navbar__item slideInDown-3" nav={showLinks} onClick={() => setShowLinks(!showLinks)}>
                   <a href='#cabinet' className="navbar__link">
                   Cabinet
                    </a>
               </li>
               <li className="navbar__item slideInDown-3" nav={showLinks} onClick={() => setShowLinks(!showLinks)}>
               <a href='#temoignages' className="navbar__link">
               Témoignages
                </a>
               </li>
                <li className="navbar__item slideInDown-2" nav={showLinks} onClick={() => setShowLinks(!showLinks)}>
                <a href='#contact' className="navbar__link"> 
                Contact
                </a>
               </li>
           </ul>
           <button className="navbar__burger" onClick= {handleShowLinks} >
            <span className="burger-bar">
                </span>         
           </button>
           </div>
        </nav>
    )
}

