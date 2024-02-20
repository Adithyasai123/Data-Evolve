import "./Navbar.css";
import React, { useState } from "react";
import logo from "../../Assets/images/logo.png";
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light Nav_main  ">
        <div className="container main-nav-con">
          <img src={logo} alt="Logo" className="logo" />

          <button
            className="navbar-toggler nav_toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded={!collapsed ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
            id="basic-navbar-nav"
          >
            <ul className="navbar-nav ms-auto nav_ul">
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "black", cursor: "pointer" }}
                >
                  What we Do
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "black", cursor: "pointer" }}
                >
                  Who we are
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "black", cursor: "pointer" }}
                >
                  Partners
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "black", cursor: "pointer" }}
                >
                  Insights
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "black", cursor: "pointer" }}
                >
                  <button className="letstalk-btn">Lets Talk</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
