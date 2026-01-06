import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ cart }) {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="logo">GYMLAND 🏋️‍♂️</h2>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Savat ({cart?.length || 0})</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
