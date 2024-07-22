"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import "../Styles/Header.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="page-wrapper">
      <header>
        <div className="container">
          <div className="left">
            <ul>
              <li>Los Angeles Gournadi, 1230 Barisal</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>noreply@pbminfotech.com</li>
              <li>+(123) 1234-567-8901</li>
            </ul>
          </div>
        </div>
        <div className="container-2">
          <div className="container-3">
            <img
              src="https://capigo-demo.pbminfotech.com/html-demo/images/dark-logo.svg"
              alt="Logo"
            />
          </div>
          <div className={`list ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>HOME</li>
              <li>PAGES</li>
              <li>SERVICES</li>
              <li>PROJECT</li>
              <li>BLOG</li>
              <li>CONTACT US</li>
              <li style={{ fontSize: "1.5rem" }}>
                <IoIosSearch />
              </li>
            </ul>
            <div className="close" onClick={toggleMenu}>
              &times;
            </div>
          </div>
          <div className="btn">
            <button>GET IN TOUCH</button>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
