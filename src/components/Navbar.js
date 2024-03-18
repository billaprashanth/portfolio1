import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="logo links">
        P
      </Link>
      <Link to="/" className="links">
        Home
      </Link>
      <Link to="/about" className="links">
        About
      </Link>
      <Link className="links">Blog</Link>
      <Link className="links">Social</Link>
    </div>
  );
}

export default Navbar;
