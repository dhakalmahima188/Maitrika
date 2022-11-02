import React from "react";
import "./sidebar.css"
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import i18next from 'i18next';
import { MdOutlinePeopleOutline, MdTaskAlt, MdOutlineNotificationsActive, 
  MdOutlineLocalHospital, MdOutlineEventAvailable, MdLanguage } from "react-icons/md";

import { useTranslation } from "react-i18next";

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'ne',
    name: 'नेपाली',
    country_code: 'np'
  },
]

export const Sidebar = () => {
  const {t} = useTranslation()
  return (
    <>
    <div>
      <div className="sidenav">
        <a href="/">
          <img src={logo} className="logo" />
        </a>
        <br></br>
        <ul className="taskbar__items">
          <li>
            <Link to="/tasks">
              <MdOutlineNotificationsActive /> {t('Tasks')}
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdOutlinePeopleOutline /> {t('People')}
            </Link>
          </li>
          <li>
              <Link to="/target">
                <MdTaskAlt /> {t('Target') }
              </Link>
          </li>
          <li>
            <Link to="/events">
              <MdOutlineEventAvailable /> {t('Events') }
            </Link>
          </li>
          <li>
            <Link to="/doctor">
              <MdOutlineLocalHospital /> {t('Doctor') }
            </Link>
          </li>
        </ul>

        <button className="dropdown">
          <span><MdLanguage />&nbsp;भाषा</span>
          <ul className="dropdown-content">
            {languages.map(({code, name, country_code}) => (
              <>
              <button className="dropdown-item" onClick = {() => i18next.changeLanguage(code)}>
                {name}
              </button> 
              </>
            ))}
          </ul>
        </button>

      </div>
    </div>
    </>
  );
};
