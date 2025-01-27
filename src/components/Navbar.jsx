import { isAction } from "@reduxjs/toolkit";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-500 text-white shadow-md">
      <div className="text-2xl font-bold">CodeVault</div>
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:text-yellow-200"
          }
        >
          Pastes
        </NavLink>
        <NavLink
          to={"/commands"}
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:text-yellow-200"
          }
        >
          Commands
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
