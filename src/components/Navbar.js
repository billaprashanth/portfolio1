import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuClickHandler = () => {
    console.log("Menu clivcked");
    setIsOpen((open) => !open);
  };
  return (
    <div className="nav">
      <div className={`links ${isOpen ? "is-open" : "d-none"}`}>
        <Link to="/" className="logo links">
          P
        </Link>
        <Link to="/" className="links li">
          Home
        </Link>
        <Link to="/about" className="links li">
          About
        </Link>
        {/* <Link className="links li">Blog</Link>
        <Link className="links li">Social</Link> */}
      </div>
      <div className="menu" onClick={MenuClickHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
