import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from "../Components/AllComponent/Footer";
import Navbar from "../Components/AllComponent/Navbar";
 import '../Styles/PagesStyles/inscription.scss'
const Inscription = () => {
  const [connect, setConnect] = useState(true); 

  
    return (
      <div>
        <Navbar />

        <div className="formulaire">
          <NavLink to="/">
            <i class="fa-solid fa-arrow-left"></i>
          </NavLink>

          {connect ? (
            <form>
              <h2>Formulaire d'inscription </h2>
              <div>
                <label>Nom :</label>
                <br></br>
                <input type="text" placeholder="Nom" required />
              </div>

              <div>
                <label>prenom :</label>
                <br></br>
                <input type="text" placeholder="Prenom" required />
              </div>

              <div>
                <label>Email : </label> <br></br>
                <input type="email" placeholder="Email" required />
              </div>

              <div>
                <input
                  type="submit"
                  onClick={function (e) {
                    e.preventDefault();
                    setConnect(false);
                  }}
                />
              </div>

              <div></div>
            </form>
          ) : (
            <div>
              <p>
                Inscription reussir : <span>Connecté</span>
              </p>

            </div>
          )}
        </div>
        <Footer />
      </div>
    );
};

export default Inscription;