import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tickets } from '../../Data/DataTickets';
import '../../Styles/ComponentStyles/SectionTickets.scss';
import TicketsComponent from './TicketsComponent';

const SectionTickets = () => {
    return (
      <div>
        <div className="sectionASavoir">
          <h1>A savoir </h1>
          <p>
            <NavLink to="/inscription">
              <span className="spanprincipal">Inscrivez vous</span>
            </NavLink>{" "}
            sur le site avec un email valide,
            <a href="#tickets">
              <span className="spanprincipal">
                choisissez un ticket et suivez les instructions
              </span>{" "}
            </a>{" "}
            , <span className="span1"> </span> vous recevrez un  <i class="fa-solid fa-envelope"></i> qui valide votre achat. Cet <i class="fa-solid fa-envelope"></i>{" "}
            vous servira de preuve pour retirer votre ticket sur
            <NavLink to="/aide">
              <span className="spanprincipal">
                {" "}
                nos six lieu de distribution .
              </span>
            </NavLink>{" "}
            La vente des tickets est lancé 48h avant l'éhéance retirable dans
            votre zone de résidence.
          </p>
        </div>

        <div className="containerTickets">
          <h2 id="tickets">100 tickets disponible</h2>
          <div className="containerTicketsElements">
            {Tickets.map((el) => {
              return (
                <div>
                  <TicketsComponent data={el} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
};

export default SectionTickets;