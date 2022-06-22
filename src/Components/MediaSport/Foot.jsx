import React, { useState } from 'react';
import '../../Styles/ComponentStyles/MediaStyle/Foot.scss';

import { dataFichier } from '../../Data/DataFichier';
import FootComponent from '../AllComponent/FootComponent';

const Foot = () => {
   
    return (
        <div className='footComponent'>
            <h2>Football</h2>
            {
                dataFichier.map((el,index) => {
                    return (
                        < FootComponent
                             key={index}
                            data= {el}
                        
                        />
                    )
                })
            }
        </div>
    );
};

export default Foot;