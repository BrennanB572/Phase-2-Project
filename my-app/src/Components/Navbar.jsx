import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <nav>
          <NavLink className="navlinks" to="/">Home</NavLink>
          <NavLink className="navlinks" to="/EmployeeTracker">Logger/Tracker</NavLink>
           </nav>
        </div>
    )
}
export default Navbar;