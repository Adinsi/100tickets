import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Accueil from './Pages/Accueil';
import Calendar from './Pages/Calendar';
import Actualite from './Pages/Actualite';
import Help from './Pages/Help';
import Inscription from './Pages/Inscription';
import MoMoPaye from './Pages/MoMoPaye';
import { Tickets } from './Data/DataTickets';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Accueil />} />
          <Route path="/calendrier" element={<Calendar />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/aide" element={<Help />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path={`/payer/:id`} element={<MoMoPaye
          
            data={Tickets} />} />
        </Routes>
      </BrowserRouter>
    );
};

export default App;