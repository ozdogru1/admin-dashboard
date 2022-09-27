import React from "react";
import {
  MdBusinessCenter,
  MdGroups,
  MdShoppingBag,
  MdOutlineLogout,
} from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {MdLightMode} from "react-icons/md"

const SideBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  let activeStyle = {
    color: "white",
    backgroundColor: " rgb(115, 82, 255)",
    borderRadius: "10px",
    paddingLeft: "30px",
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-8 mt-8 ">
        <p className="text-slate-200 text-2xl ">Admin</p>
        <MdDarkMode className="text-2xl text-white" />
      </div>
      <div className="user main">
        <button
          onClick={handleLogout}
          className="text-black rounded-lg  bg-white px-7 py-3 flex items-center"
        >
          Logout
          <MdOutlineLogout className="ml-2" />
        </button>
      </div>
      <div className="main">
        <h3 className="title">DashBoard</h3>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="content"
        >
          <MdShoppingBag />
          E-commerce
        </NavLink>
      </div>
      <div className="main">
        <h3 className="title">Pages</h3>
        <NavLink
          to="orders"
          className="content"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <MdShoppingCart />
          Orders
        </NavLink>
        <NavLink
          to="employees"
          className="content"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <MdGroup />
          Employees
        </NavLink>
        <NavLink
          to="customers"
          className="content"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <MdGroups />
          Customers
        </NavLink>
      </div>
      <div className="main">
        <h3 className="title">Apps</h3>

        <NavLink
          to="projectmanagment"
          className="content"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <MdBusinessCenter />
          Project Managment
        </NavLink>
        <NavLink
          to="news"
          className="content"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <BiNews />
          News
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
