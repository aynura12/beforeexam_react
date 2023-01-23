import React from "react";
import { Link } from "react-router-dom";
import "../components/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h5>HEXA</h5>
          </div>
          <div className="col-4">
            <ul className="lists">
              <li className="item">
                <Link to="/" className="link">
                  HOME
                </Link>
              </li>

              <li className="item">
                <Link to="about" className="link">
                  ABOUT
                </Link>
              </li>
              <li className="item">
                <Link to="add" className="link">
                  ADD
                </Link>
              </li>

              <li className="item">
                <Link to="project" className="link">
                  PROJECT
                </Link>
              </li>

              <li className="item">
                <Link to="services" className="link">
                  SERVICES
                </Link>
              </li>
              <li className="item">
                <Link to="blog" className="link">
                  BLOG
                </Link>
              </li>

              <li className="item">
                <Link to="contact" className="link">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
         
        </div>
        <div className="button">
            <button>Colorlib</button>
          </div>
      </div>
     
    </div>
  );
};

export default Navbar;
