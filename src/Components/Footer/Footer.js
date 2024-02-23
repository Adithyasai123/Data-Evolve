import React from "react";
import "./Footer.css";
import logo from "../../Assets/images/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="row">
          <div className="col-12">
            <div className="row ">
              <div className="col-md-1"></div>
              <div className="col-md-3 d-md-block d-none">
                <div className="footer-header">
                  <span>Get in touch with us.</span>
                  <br />
                  <span> We'd love to hear from you.</span>
                </div>
              </div>
              <div className="col-md-7"></div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>

              <div className="col-md-3  d-md-block d-none details-main">
                <div style={{ display: "flex" }}>
                  <span style={{ paddingRight: "10px" }}>
                    <div className="form-outline flex-fill mb-0 mt-3">
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                        style={{ opacity: "0.7", width: "76px" }}
                        placeholder="Name"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example3c"
                      ></label>
                    </div>
                  </span>
                  <span>
                    <div className="form-outline flex-fill mb-0 mt-3">
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                        style={{ opacity: "0.7", width: "85px" }}
                        placeholder="Email"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example3c"
                      ></label>
                    </div>
                  </span>
                </div>

                <div style={{ display: "flex" }}>
                  <span style={{ paddingRight: "10px" }}>
                    <div className="form-outline flex-fill mb-0 ">
                      <input
                        type="phone"
                        id="form3Example3c"
                        className="form-control"
                        style={{ opacity: "0.7", width: "76px" }}
                        placeholder="Phone"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example3c"
                      ></label>
                    </div>
                  </span>
                  <span>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="address"
                        id="form3Example3c"
                        className="form-control"
                        style={{ opacity: "0.7", width: "85px" }}
                        placeholder="Address"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example3c"
                      ></label>
                    </div>
                  </span>
                </div>

                <div className="form-outline flex-fill mb-0">
                  <input
                    type="message"
                    id="form3Example3c"
                    className="form-control"
                    style={{ opacity: "0.7", width: "172px", height: "60px" }}
                    placeholder="Message"
                  />
                  <label
                    className="form-label"
                    htmlFor="form3Example3c"
                  ></label>
                </div>

                <div className="button-main">
                  <button className="connect-button">Connect</button>
                </div>
              </div>

              <div className="col-md-3 address-main d-md-block d-none">
                <div style={{ marginBottom: "20px" }}>
                  <span style={{ paddingLeft: "40px", fontSize: "22px" }}>
                    Hyderabad
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <span>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png"
                      className="location-img"
                      style={{ marginBottom: "20px" }}
                      alt="location"
                    />
                  </span>
                  <span style={{ fontSize: "15px", marginBottom: "20px" }}>
                    Space2Move, Vittal Rao Nagar Rd, Madhapur, Hyderabad- 500081
                  </span>
                </div>

                <div style={{ display: "flex" }}>
                  <a href="mailto:info@dataevolve.in">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2099/2099199.png"
                      className="email-img"
                      style={{ marginBottom: "20px", justifyContent: "" }}
                      alt="email"
                    />
                  </a>
                  <a
                    href="mailto:info@dataevolve.in"
                    className="email-text"
                    style={{
                      fontSize: "15px",
                      marginBottom: "20px",
                      position: "relative",
                      right: "40px",
                      top: "10px",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    info@dataevolve.in
                  </a>
                </div>

                <div style={{ display: "flex" }}>
                  <a href="tel:+919059846847">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/597/597177.png"
                      className="phone-img"
                      style={{ marginBottom: "20px", justifyContent: "" }}
                      alt="phone"
                    />
                  </a>
                  <a
                    href="tel:+919059846847"
                    style={{
                      fontSize: "15px",
                      marginBottom: "20px",
                      position: "relative",
                      right: "60px",
                      top: "10px",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    +919059846847
                  </a>
                </div>
              </div>

              <div className="col-md-2 about-main d-md-block d-none">
                <div className="about-header">
                  <span>About Us</span>
                </div>
                <div style={{ marginBottom: "10px" }}>About Dataevolve</div>
                <div style={{ marginBottom: "10px" }}>Leadership Team</div>
                <div style={{ marginBottom: "10px" }}>Locations</div>
                <div style={{ marginBottom: "10px" }}>Careers</div>
              </div>

              <div className="col-md-2 d-md-block d-none">
                <div className="about-header">
                  <span>Insights</span>
                </div>
                <div style={{ marginBottom: "10px" }}>Success Stories</div>
                <div style={{ marginBottom: "10px" }}>Newsletter</div>
              </div>
            </div>
            <div className="">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-2 logo-main">
                      <a href="/">
                        <img src={logo} className="footer-logo" alt="logo" />
                      </a>
                    </div>
                    <div className="col-md-6 copy-main">
                      <div>
                        <span>
                          Copyright © 2024 Dataevolve Solutions Pvt. Ltd.- All
                          Rights Reserved. All
                        </span>
                        <span>
                          trademarks are property of their legal owners.|
                          Privacy Policy
                        </span>
                      </div>
                    </div>
                    <div className="col-md-2 logos-main">
                      <div>
                        <a
                          href="https://www.facebook.com/dataevolve"
                          target="_blank"
                        >
                          <img
                            src="https://dataevolve.in/assets/homesrc/facebook.svg"
                            className="facebook-logo"
                            alt="facebook-logo"
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/dataevolve"
                          target="_blank"
                        >
                          <img
                            src="https://dataevolve.in/assets/homesrc/Linkedin.svg"
                            className="facebook-logo"
                            alt="LinkedIN-logo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
