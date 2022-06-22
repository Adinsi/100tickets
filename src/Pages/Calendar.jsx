import React from 'react';
import CalendarComponent from "../Components/AllComponent/CalendarComponent";
import Footer from "../Components/AllComponent/Footer";
import HeroesCalendar from "../Components/AllComponent/HeroesCalendar";
import Navbar from "../Components/AllComponent/Navbar";
import { CalendarData } from '../Data/DataCalendrier';
import '../Styles/PagesStyles/calendar.scss';



const Calendar = () => {
    return (
        <div>
            <Navbar />
            <HeroesCalendar />
            <div className='sectionCalendar'>
            <div className='buttonmatch'>
                <a href='#can' >    <button>Eliminatoire Can </button>
                </a>

                <a href='#wc' >    <button>World Cup </button>
                </a>

                <a href='#am' >    <button>Amical Match </button>
                </a>
            
                <a href='#ci' >    <button>International Cup</button>
                </a>
            
              
            </div>
            
            <h2  id='can' className='program' >CAN Eliminatoire programs</h2>
            <div className='can' ><br></br><br></br>

              
          
                   
                        {
                        CalendarData.map((el,index) => {
                            return (
                                <div className='calendarElement' key={index}>
                                    < CalendarComponent
                                  data={el}  />
                          </div>
                      )
                  })                    }
                   
           
                
            </div>

            <div >
                <h2 className='program' id='wc'>
                    World Cup Eliminatoire

                </h2 >
                <p>Aucun match disponible</p>
            </div>
            
            <div>
                <h2 className='program' id='am'>Match amicaux</h2>
                <p>Aucun match disponible</p>

            </div>

            <div>
                <h2 className='program' id='ci'>Competition internationale</h2>

                <p>Aucun match disponible</p>
            </div>
            </div>
           

            <Footer/>
            
        </div>

      


    );
};

export default Calendar;