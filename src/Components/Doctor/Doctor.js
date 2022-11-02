import React from 'react';
import "./doctor.css";
import { gynecologistData, pediatricianData } from './Data';
import videoCall from '../../assets/videoCall.png'
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom'

export const Doctor = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='container doctor__container'>

        <h2 className='doctor__type'>
          {t('Gynaecologist')}
        </h2>
        {gynecologistData.map((item) => {
          return (
            <>
              <div className="doctor__box">
                <img src={item.image} alt="" className='doctor__img' />
                <div className="doctor__textbox">
                  <h4 className="doctor__title">{t(item.title)}</h4>
                  <h6 className="doctor__contact">{item.contact}</h6>
                  <span className="online__status"
                    style={{ color: item.status == "Online" ? "#41A029" : "black" }}
                  >{t(item.status)}</span>
                </div>
                <Link to={`/video`}>
                  <img src={videoCall} className="call"></img>
                </Link>

              </div>
            </>
          )
        })}

        <h2 className='doctor__type'>
          {t('Pediatrician')}
        </h2>
        {pediatricianData.map((item) => {
          return (
            <>
              <div className="doctor__box">
                <img src={item.image} alt="" className='doctor__img' />
                <div className="doctor__textbox">
                  <h4 className="doctor__title">{t(item.title)}</h4>
                  <h6 className="doctor__contact">{item.contact}</h6>
                  <span className="online__status"
                    style={{ color: item.status == "Online" ? "#41A029" : "grey" }}
                  >{t(item.status)}</span>
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