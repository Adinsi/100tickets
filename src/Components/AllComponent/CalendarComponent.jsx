import React from 'react';

const CalendarComponent = (props) => {

    const {Dom,ext,Domimg,extimg,heure,date,stade} = props.data
    return (
        <div className='calendarComponent'>
            <p>{Dom} < img src={Domimg} width={55} /> - < img src={extimg} width={55} /> {ext}</p>
            <p> Heure de démarrage : {heure}non définie </p>
            <p>Date : {date}</p>
            <p>Stade : {stade}</p>
        </div>
    );
};

export default CalendarComponent;