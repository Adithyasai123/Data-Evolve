import React from "react";
import "./Map.css";
import NumberCounter from "number-counter";

const Map = () => {
  return (
    <div>
      <section style={{paddingTop:"50px"}}>
        <div>
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <div className="elevate-header">
                    <span>ELEVATE YOUR BUSINESS WITH CLOUD9</span>
                  </div>
                  <div className="elevate-para">
                    <span>
                      As a leading cloud service provider, Dataevolve stands at
                      the forefront. We possess a distinctive prowess to guide
                      you through your remarkable expedition into the cloud. Our
                      squads of tech visionaries, strategists, and creative
                      minds forge impactful digital odysseys. Championing
                      diverse sectors, we craft ingenious remedies for the most
                      intricate obstacles faced by our clients. The evidence
                      lies in the digits themselves.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="row">
            <div className="col-12 col-md-12">
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <div className="col-md-1"></div>

                <div className="col-md-2">
                  <div className="counter-wrapper" style={{ display: "flex" }}>
                    <div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            color: "#53D4FE",
                            fontSize: "36px",
                          }}
                        >
                          <span>
                            <NumberCounter end={500} start={190} delay={10} />
                          </span>
                          <span>+</span>
                        </div>
                        <br />
                        <span style={{ fontSize: "20px" }}>
                          Well-Executed Projects
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="counter-wrapper" style={{ display: "flex" }}>
                    <div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            color: "#53D4FE",
                            fontSize: "36px",
                          }}
                        >
                          <span>
                            <NumberCounter end={250} start={10} delay={10} />
                          </span>
                          <span>+</span>
                        </div>
                        <br />
                        <span
                          style={{ fontSize: "20px", justifyContent: "center" }}
                        >
                          Cloud Accreditation Across Leading Cloud Platforms
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="counter-wrapper" style={{ display: "flex" }}>
                    <div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            color: "#53D4FE",
                            fontSize: "36px",
                          }}
                        >
                          <span>
                            <NumberCounter end={100} start={10} delay={10} />
                          </span>
                          <span>+</span>
                        </div>
                        <br />
                        <span style={{ fontSize: "20px" }}>Cloud Experts</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="counter-wrapper" style={{ display: "flex" }}>
                    <div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            color: "#53D4FE",
                            fontSize: "36px",
                          }}
                        >
                          <span>
                            <NumberCounter end={4} start={0} delay={5} />
                          </span>
                        </div>
                        <br />
                        <span style={{ fontSize: "20px" }}>
                          Global Footprints
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="map-container">
        <div className="row">
        <div className="col-12 d-none d-lg-block">
        <div>
        <img
            src="https://dataevolve.in/assets/homesrc/mapsvg.svg"
            className="map-img"
            alt=""
        />
        </div>
        </div>
        </div></div>
      </section>
    </div>
  );
};

export default Map;
