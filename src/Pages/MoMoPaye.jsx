import React  from 'react';
import {  useParams,NavLink } from 'react-router-dom';

const MoMoPaye = ({data}) => {
  const { id } = useParams();

    return (
      <div>
        <NavLink to="/">
          <i class="fa-solid fa-arrow-left"></i>
        </NavLink>
        <button>Payer par MOMO</button>
      </div>
    );
};

export default MoMoPaye;