import React from 'react';
import "./target.css";
import {targetData} from './Data';
import { useTranslation } from 'react-i18next';

export const Target = () => {
  const {t} = useTranslation()
  return (
    <>
        <h4 className='area__name'>Amrita's Area, Sadar Marga, Ramaroshan Gaupalika, Achham</h4>

        <div className='container target__container'>
            {targetData.map((item) => {
              return (
                <>
                <div className="target__box">
                  <div className='target__imgAndText'>
                    <img src={item.image} alt="" className='target__img'/>
                    <div className="target__textbox">
                        <h4 className="target__title">{t(item.title)}</h4>
                        <span className="target__duration">{t(item.duration)}</span>
                    </div>
                  </div>
                  <div className='target__number'>{item.number}</div>
                </div>
                </>
              )
            })}
        </div>
    </>
  )
};