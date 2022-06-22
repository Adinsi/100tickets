import React from 'react';
import Footer from '../Components/AllComponent/Footer';
import HeroesActualite from "../Components/AllComponent/HeroesActualite";
import Basket from '../Components/MediaSport/Basket';

import Foot from '../Components/MediaSport/Foot';
import Handball from '../Components/MediaSport/Handball';
import Navbar from "../Components/AllComponent/Navbar";

import '../Styles/PagesStyles/actualite.scss'

const Actualite = () => {
    return (
        <div>
        <Navbar />
        <div>
          <HeroesActualite/>
        </div>

        <div className="section">
          <div className="buttonSection">

          <a href='#foot' >Foot <i class="fa-solid fa-futbol"></i></a>
          <a href='#handball' > Handball<i class="fa-solid fa-baseball"></i></a>
  
          <a href='#basketball' > Basketball<i class="fa-solid fa-basketball"></i></a>
          
          </div>

          <div id='foot' className="foot">
            <Foot/>
          </div>

          <div id='handball' className="handball">
            <Handball/>
          </div>

   
          <div id='basketball' className="basket">
            <Basket/>
          </div>

        
        </div>
        <Footer/>
        </div>
    );
};

export default Actualite;