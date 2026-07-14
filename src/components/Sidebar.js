import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaMapMarkedAlt, FaUsers, FaCog } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ open, setOpen }) => {

  return (

    <div className={open ? "sidebar active" : "sidebar"}>

      <NavLink
        to="/dashboardlayout"
        end
        className={({ isActive }) => isActive ? "active link" : "link"}
        onClick={() => setOpen(false)}
      >
        <FaHome className="icon"/>
        Home
      </NavLink>

      <NavLink
        to="/dashboardlayout/RegiPopularDestination"
        className={({ isActive }) => isActive ? "active link" : "link"}
        onClick={() => setOpen(false)}
      >
        <FaMapMarkedAlt className="icon"/>
        Popular Destination
      </NavLink>

      <NavLink
        to="/dashboardlayout/RegiDiscount"
        className={({ isActive }) => isActive ? "active link" : "link"}
        onClick={() => setOpen(false)}
      >
        <FaUsers className="icon"/>
        Travel offer
      </NavLink>

      <NavLink
        to="/dashboardlayout/adminupdated"
        className={({ isActive }) => isActive ? "active link" : "link"}
        onClick={() => setOpen(false)}
      >
        <FaCog className="icon"/>
        Requested list
      </NavLink>

    </div>

  );

};

export default Sidebar;