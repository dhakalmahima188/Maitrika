import React from "react";
import "./sidebar.css"
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import i18next from 'i18next';
import { MdOutlinePeopleOutline, MdTaskAlt, MdOutlineNotificationsActive, 
  MdOutlineLocalHospital, MdOutlineEventAvailable, MdLanguage } from "react-icons/md";

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'ne',
    name: 'Nepali',
    country_code: 'np'
  },
]

export const Sidebar = () => {
  return (
    <>
    <div>
      <div className="sidenav">
        <a href="#">
          <img src={logo} className="logo" />
        </a>
        <br></br>
        <ul className="taskbar__items">
          <li>
            <Link to="/tasks">
              <MdOutlineNotificationsActive /> Tasks
            </Link>
          </li>
          <li>
            <Link to="/people">
              <MdOutlinePeopleOutline /> People
            </Link>
          </li>
          <li>
              <Link to="/target">
                <MdTaskAlt /> Target
              </Link>
          </li>
          <li>
            <Link to="/events">
              <MdOutlineEventAvailable /> Events
            </Link>
          </li>
          <li>
            <Link to="/doctor">
              <MdOutlineLocalHospital /> Doctor
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
