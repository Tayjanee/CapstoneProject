import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div className="footer-header">
          <h3>
            <a href="https://twitter.com/">
              <FaTwitter />
            </a>
            {""}
            <a href="https://facebook.com/">
              <FaFacebook />
            </a>
            {""}
            <a href="https://instagram.com/">
              <FaInstagram />
            </a>
            {""}
            <a href="https://pinterest.com/">
              <FaPinterest />
            </a>
          </h3>
          <h5>parkshelp@parks.gov</h5>
          <h5>312-456-7890</h5>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
          </ul>
          {`Copyright © ANNIETAYLORJOSEPH ${year}`}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
