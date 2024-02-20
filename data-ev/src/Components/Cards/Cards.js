import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <section className="migrate-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="migrations-img">
                <img
                  src="https://dataevolve.in/assets/homesrc/migrations.png"
                  alt="migrations"
                  className="migrations-img"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="migrate-main">
                <div className="migrate-text">
                  <span>MIGRATE</span>
                </div>
                <div className="migrate-header">
                  <div>
                    <span>Discover the Power</span>
                  </div>
                  <div>
                    <span>& Flexibility of</span>
                  </div>
                  <div>
                    <span>Cloud Migration</span>
                  </div>
                </div>
                <div className="migrate-para">
                  <span>
                    Navigate your journey to the cloud seamlessly with our
                    expert guidance. We assess your IT landscape, streamline
                    migration, and ensure robust cloud security. Our
                    cost-effective solutions leverage diverse cloud computing
                    models for enhanced agility.
                  </span>
                </div>
                <div>
                  <button className="migrate-btn">lets Migrate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="migrations-img">
                <img
                  src="https://dataevolve.in/assets/homesrc/modernizeimg.svg"
                  alt="migrations"
                  className="migrations-img"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="migrate-main">
                <div className="migrate-text">
                  <span>MODERNIZE</span>
                </div>
                <div className="migrate-header">
                  <div>
                    <span>Cloud Modernization: </span>
                  </div>
                  <div>
                    <span>A Masterful Approach</span>
                  </div>
                </div>
                <div className="migrate-para">
                  <span>
                    We help you successfully assess as cloud solutions are ever
                    evolving, we provide services to meet the ever-changing
                    demands and future needs of your business. IT teams can
                    leverage our services to innovate and build new applications
                    over their existing ones.
                  </span>
                </div>
                <div>
                  <button className="migrate-btn">lets Modernize</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="migrations-img">
                <img
                  src="https://dataevolve.in/assets/homesrc/appdatabasesvg.svg"
                  alt="migrations"
                  className="migrations-img"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="migrate-main">
                <div className="migrate-text">
                  <span>MANAGE</span>
                </div>
                <div className="migrate-header">
                  <div>
                    <span>WANT TO</span>
                  </div>
                  <div>
                    <span>FOCUS & UPSCALE</span>
                  </div>
                  <div>
                    <span>YOUR BUSINESS?</span>
                  </div>
                </div>
                <div className="migrate-para">
                  <span>
                    Team Dataevolve with our consultative engagement model helps
                    you set up a managed services plan that has exactly the
                    right services and lets you focus on your core business.
                    This makes sure your cloud infrastructure is available,
                    secure, and cost-effective all the time.
                  </span>
                </div>
                <div>
                  <button className="migrate-btn">lets Manage</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
