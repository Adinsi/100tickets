import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const TicketsComponent = (props) => {
 

    const { id, code, Entry } = props.data;
    return (
      <div className="TicketsComponents" key={id}>
        <i class="fa-solid fa-futbol"></i>

        <p> Ticket N° : {id}</p>

        <p>Entrée : {Entry}</p>
        <p>Statut: Libre et Gratuit</p>
        <Link to={`/`}>
          <button>Commander ce ticket</button>
        </Link>
      </div>
    );
};

export default TicketsComponent;