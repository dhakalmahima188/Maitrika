import React from 'react';
import "./doctor.css";
import {gynecologistData, pediatricianData} from './Data';
import videoCall from '../../assets/videoCall.png'

export const Doctor = () => {
  return (
    <>
        <h4 className='area__name'>Amrita's Area, Sadar Marga, Ramaroshan Gaupalika, Achham</h4>

        <div className='container doctor__container'>

            <h2 className='doctor__type'>
            Gynecologist 
            </h2>
            {gynecologistData.map((item) => {
              return (
                <>
                <div className="doctor__box">
                    <img src={item.image} alt="" className='doctor__img'/>
                    <div className="doctor__textbox">
                        <h4 className="doctor__title">{item.title}</h4>
                        <h6 className="doctor__contact">{item.contact}</h6>
                        <span className="online__status">{item.status}</span>
                    </div>
                    <img src={videoCall} className="call"></img>
                </div>
                </>
              )
            })}

<h2 className='doctor__type'>
            Pediatrician 
            </h2>
            {pediatricianData.map((item) => {
              return (
                <>
                <div className="doctor__box">
                    <img src={item.image} alt="" className='doctor__img'/>
                    <div className="doctor__textbox">
                        <h4 className="doctor__title">{item.title}</h4>
                        <h6 className="doctor__contact">{item.contact}</h6>
                        <span className="online__status">{item.status}</span>
                    </div>
                    <img src={videoCall} className="call"></img>
                </div>
                </>
              )
            })}
        </div>
    </>
  )
};