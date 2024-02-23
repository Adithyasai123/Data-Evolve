import React, { useState, useEffect } from "react";
import logo from "../../Assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 20) {
        document.querySelector(".navbar").classList.remove("scrolled");
      } else {
        document.querySelector(".navbar").classList.add("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light Nav_main">
        <div className="container main-nav-con">
          <img src={logo} alt="Logo" className="logo" />
          <button
            className="navbar-toggler nav_toggler"
            type="button"
            onClick={handleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          >
            <ul className="navbar-nav ms-auto nav_ul">
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white", cursor: "pointer",marginLeft:"20px"}}
                >
                  What we Do
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white", cursor: "pointer",marginLeft:"20px" }}
                >
                  Who we are
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white", cursor: "pointer",marginLeft:"20px" }}
                >
                  Partners
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white", cursor: "pointer",marginLeft:"20px" }}
                >
                  Insights
                </a>
              </li>
              <li className="nav-item">
                <button className="letstalk-btn">Lets Talk</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
