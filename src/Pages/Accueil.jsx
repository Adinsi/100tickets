import React from 'react';
import Footer from '../Components/AllComponent/Footer';
import Heroes from '../Components/AllComponent/Heroes';
import Navbar from '../Components/AllComponent/Navbar';
import SectionTickets from '../Components/AllComponent/SectionTickets';




const Accueil = () => {
    return (
      <div>
        <div>

     <Navbar/>
        </div>
        <div>

    <Heroes/>
        </div>
        <div>
       <SectionTickets/>
        </div>
        <div>
        <Footer/>
        </div>
        </div>
    );
};

export default Accueil;