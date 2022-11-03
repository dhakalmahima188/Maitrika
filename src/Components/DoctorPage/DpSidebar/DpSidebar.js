import React from "react";
import "./sidebar.css"
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import i18next from 'i18next';
import { MdOutlinePeopleOutline, MdTaskAlt, MdOutlineNotificationsActive, 
  MdOutlineLocalHospital, MdOutlineEventAvailable, MdLanguage } from "react-icons/md";

import { useTranslation } from "react-i18next";

const languages = [
  {
    code: 'en',
    name: 'En',
    country_code: 'gb'
  },
  {
    code: 'ne',
    name: 'ने',
    country_code: 'np'
  },
]

export const DpSidebar = () => {
  const {t} = useTranslation()
  return (
    <>
      <div className="sidenav">
        <a href="/">
          <img src={logo} className="logo" />
        </a>
        <br></br>
        <ul className="taskbar__items">
          <li>
            <Link to="/doctorpage">
              <MdOutlinePeopleOutline /><br /> 
              <span className="nav__text">{t('People')}</span>
            </Link>
          </li>
          <li>
              <Link to="/doctorpage/target">
                <MdTaskAlt /><br /> 
              <span className="nav__text">{t('Target') }</span>
              </Link>
          </li>
          <li>
            <Link to="/doctorpage/fchv">
              <MdOutlineLocalHospital /><br /> 
              <span className="nav__text">{t('FCHV') }</span>
            </Link>
          </li>
        </ul>

            {languages.map(({code, name, country_code}) => (
              <>
              <button className="dropdown-item" onClick = {() => i18next.changeLanguage(code)}>
                {name}
              </button> 
              </>
            ))}
    </div>
    <h4 className='area__name'>{t('Amrita Baskota')}, {t('Sadar Marga')}, {t('Ramaroshan')} {t('Gaupalika')}, {t('Achham')}</h4>
    </>
  );
};
