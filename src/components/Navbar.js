import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="page-wrapper">
      <header className="header header-intro-clearance header-4">
        <div className="header-bottom sticky-header">
          <div className="container">
            <div className="header-left"></div>

            <div className="header-center">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li className="megamenu-container active">
                    <Link to="/">
                      <a className="sf-with-ul">&nbsp;Home</a>
                    </Link>
                  </li>
                  <li>
                    <a className="sf-with-ul">&nbsp;Shop</a>
                  </li>
                  <li>
                    <a className="sf-with-ul">&nbsp;Product</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-right">
              <i className="la la-lightbulb-o"></i>
              <p>
                Clearance<span className="highlight">&nbsp;Up to 30% Off</span>
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
