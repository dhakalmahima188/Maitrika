import React from "react";
import "./sidebar.css"
import logo from "../../assets/logo.png";
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
            <a href="#">
              <MdOutlineNotificationsActive /> Tasks
            </a>
          </li>
          <li>
            <a href="#">
              <MdOutlinePeopleOutline /> People
            </a>
          </li>
          <li>
            <a href="#">
              <MdTaskAlt /> Targets
            </a>
          </li>
          <li>
            <a href="#">
              <MdOutlineEventAvailable /> Events
            </a>  
          </li>
          <li>
            <a href="#">
              <MdOutlineLocalHospital /> Doctors
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};
