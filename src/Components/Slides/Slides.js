import React from "react";
import "./Slides.css";

const Slides = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="premier-text">
                <span>PREMIER</span>
                <br />
                <span>TECHNOLOGY</span>
                <br />
                <span>COLLOABRATIONS</span>
                <div className="dive-text">
                  <span>Dive Deeper into Our Partnerships</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="images-main1">
                <div className="aws-main">
                  <span>
                    <img
                      className="aws-img"
                      src="https://dataevolve.in/assets/homesrc/awsnewsvg.svg"
                      alt="aws"
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <img
                      className="gcp-img"
                      src="https://dataevolve.in/assets/homesrc/google%20logo%20svg.svg"
                      alt="gcp"
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <img
                      className="azure-img"
                      src="https://dataevolve.in/assets/homesrc/newmicroazur%20svg.svg"
                      alt="azure"
                    />
                  </span>
                </div>
              </div>
              <div className="images-main2">
                <div className="trend-main">
                  <span>
                    <img
                      className="trend-img"
                      src="https://dataevolve.in/assets/homesrc/trendsvg.svg"
                      alt="trend-micro"
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <img
                      className="oracle-img"
                      src="https://dataevolve.in/assets/homesrc/oraclesvg.svg"
                      alt="oracle"
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <img
                      className="vmware-img"
                      src="https://dataevolve.in/assets/homesrc/vmwearsvg.svg"
                      alt="vm-ware"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slides;
