import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/ComponentStyles/Navbar.scss'

const Navbar = () => {

    const [show, setShow] = useState(false); 

    const handleclick = () => {
        setShow(!show)
    }

  
    return (
      <div className="navbarContainer">
        <NavLink to="/">
          <div className="connexion">
            <h2>
              100t<span>i</span>ck<span>e</span>ts
            </h2>
          </div>
        </NavLink>

        <div className={show ? "links active" : "links"}>
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to="/"
          >
            Accueil
          </NavLink>

          <NavLink
            to="/calendrier"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Calendrier
          </NavLink>

          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to="/actualite"
          >
            Actualité
          </NavLink>

          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to="/aide"
          >
            Infos+
          </NavLink>

          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to="/inscription"
          >
            Inscription
          </NavLink>
        </div>
        <div className="logo">
          <NavLink to="/">
            <img src="../assets/logo.jpg" width={70} alt="logo du site" />
          </NavLink>
        </div>

        <div onClick={handleclick} className="burger">
          <i className={show ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
      </div>
    );
};

export default Navbar;