import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/log">Employee Portal</NavLink>
        </div>
    )
}
export default Navbar;