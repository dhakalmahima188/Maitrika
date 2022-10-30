import React from "react";
import "./sidebar.css"
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { MdOutlinePeopleOutline, MdTaskAlt, MdOutlineNotificationsActive, MdOutlineLocalHospital, MdOutlineEventAvailable } from "react-icons/md";

export const Sidebar = () => {
  return (
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
            <Link to="/tasks">
              <MdOutlineLocalHospital /> Doctor
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};
