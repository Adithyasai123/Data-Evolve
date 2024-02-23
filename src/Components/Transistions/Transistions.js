import React, { useState, useEffect } from "react";
import "./Transistions.css";
import Marquee from "react-fast-marquee";

const Transistions = () => {
  const imagesSet1 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo48.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo0.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo1.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo2.svg",
  ];

  const imagesSet2 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo3.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo4.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo5.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo27.svg",
  ];

  const imagesSet3 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo7.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo8.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo9.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo10.svg",
  ];

  const imagesSet4 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo11.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo12.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo13.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo14.svg",
  ];

  const imagesSet5 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo15.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo16.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo17.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo18.svg",
  ];

  const imagesSet6 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo19.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo20.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo21.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo22.svg",
  ];

  const imagesSet7 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo23.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo24.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo25.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo26.svg",
  ];

  const imagesSet8 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo27.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo28.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo29.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo30.svg",
  ];

  const imagesSet9 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo31.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo32.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo33.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo34.svg",
  ];

  const imagesSet10 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo35.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo36.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo37.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo38.svg",
  ];

  const imagesSet11 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo39.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo40.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo41.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo42.svg",
  ];

  const imagesSet12 = [
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo43.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo44.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo45.svg",
    "https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo46.svg",
  ];

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);
  const [currentImageIndex4, setCurrentImageIndex4] = useState(0);
  const [currentImageIndex5, setCurrentImageIndex5] = useState(0);
  const [currentImageIndex6, setCurrentImageIndex6] = useState(0);
  const [currentImageIndex7, setCurrentImageIndex7] = useState(0);
  const [currentImageIndex8, setCurrentImageIndex8] = useState(0);
  const [currentImageIndex9, setCurrentImageIndex9] = useState(0);
  const [currentImageIndex10, setCurrentImageIndex10] = useState(0);
  const [currentImageIndex11, setCurrentImageIndex11] = useState(0);
  const [currentImageIndex12, setCurrentImageIndex12] = useState(0);

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % imagesSet1.length);
    }, 3000);
    return () => clearInterval(intervalId1);
  }, [imagesSet1.length]);

  useEffect(() => {
    const intervalId2 = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % imagesSet2.length);
    }, 3000);
    return () => clearInterval(intervalId2);
  }, [imagesSet2.length]);

  useEffect(() => {
    const intervalId3 = setInterval(() => {
      setCurrentImageIndex3((prevIndex) => (prevIndex + 1) % imagesSet3.length);
    }, 3000);
    return () => clearInterval(intervalId3);
  }, [imagesSet3.length]);

  useEffect(() => {
    const intervalId4 = setInterval(() => {
      setCurrentImageIndex4((prevIndex) => (prevIndex + 1) % imagesSet4.length);
    }, 3000);
    return () => clearInterval(intervalId4);
  }, [imagesSet4.length]);

  useEffect(() => {
    const intervalId5 = setInterval(() => {
      setCurrentImageIndex5((prevIndex) => (prevIndex + 1) % imagesSet5.length);
    }, 3000);
    return () => clearInterval(intervalId5);
  }, [imagesSet5.length]);

  useEffect(() => {
    const intervalId6 = setInterval(() => {
      setCurrentImageIndex6((prevIndex) => (prevIndex + 1) % imagesSet6.length);
    }, 3000);
    return () => clearInterval(intervalId6);
  }, [imagesSet6.length]);

  useEffect(() => {
    const intervalId7 = setInterval(() => {
      setCurrentImageIndex7((prevIndex) => (prevIndex + 1) % imagesSet7.length);
    }, 3000);
    return () => clearInterval(intervalId7);
  }, [imagesSet7.length]);

  useEffect(() => {
    const intervalId8 = setInterval(() => {
      setCurrentImageIndex8((prevIndex) => (prevIndex + 1) % imagesSet8.length);
    }, 3000);
    return () => clearInterval(intervalId8);
  }, [imagesSet8.length]);

  useEffect(() => {
    const intervalId9 = setInterval(() => {
      setCurrentImageIndex9((prevIndex) => (prevIndex + 1) % imagesSet9.length);
    }, 3000);
    return () => clearInterval(intervalId9);
  }, [imagesSet9.length]);

  useEffect(() => {
    const intervalId10 = setInterval(() => {
      setCurrentImageIndex10(
        (prevIndex) => (prevIndex + 1) % imagesSet10.length
      );
    }, 3000);
    return () => clearInterval(intervalId10);
  }, [imagesSet10.length]);

  useEffect(() => {
    const intervalId11 = setInterval(() => {
      setCurrentImageIndex11(
        (prevIndex) => (prevIndex + 1) % imagesSet11.length
      );
    }, 3000);
    return () => clearInterval(intervalId11);
  }, [imagesSet11.length]);

  useEffect(() => {
    const intervalId12 = setInterval(() => {
      setCurrentImageIndex12(
        (prevIndex) => (prevIndex + 1) % imagesSet12.length
      );
    }, 3000);
    return () => clearInterval(intervalId12);
  }, [imagesSet12.length]);

  return (
    <div className="trans-main">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 d-none d-lg-block">
              <div className="trans-header">
                <span>We Work With</span>
              </div>
              <div className="trans-images">
                <img
                  src={imagesSet1[currentImageIndex1]}
                  className="trans-1"
                  alt=""
                />
                <img
                  src={imagesSet2[currentImageIndex2]}
                  className="trans-2"
                  alt=""
                />
                <img
                  src={imagesSet3[currentImageIndex3]}
                  className="trans-3"
                  alt=""
                />
                <img
                  src={imagesSet4[currentImageIndex4]}
                  className="trans-4"
                  alt=""
                />
              </div>
              <div className="trans-images">
                <img
                  src={imagesSet5[currentImageIndex5]}
                  className="trans-5"
                  alt=""
                />
                <img
                  src={imagesSet6[currentImageIndex6]}
                  className="trans-6"
                  alt=""
                />
                <img
                  src={imagesSet7[currentImageIndex7]}
                  className="trans-7"
                  alt=""
                />
                <img
                  src={imagesSet8[currentImageIndex8]}
                  className="trans-8"
                  alt=""
                />
              </div>
              <div className="trans-images">
                <img
                  src={imagesSet9[currentImageIndex9]}
                  className="trans-9"
                  alt=""
                />
                <img
                  src={imagesSet10[currentImageIndex10]}
                  className="trans-10"
                  alt=""
                />
                <img
                  src={imagesSet11[currentImageIndex11]}
                  className="trans-11"
                  alt=""
                />
                <img
                  src={imagesSet12[currentImageIndex12]}
                  className="trans-12"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row second-block">
            <div className="d-block d-lg-none" style={{display:"flex",justifyContent:"space-between"}}>
              <div className="trans-header">
                <span>We Work With</span>
              </div>
              <Marquee speed={200}>
                <div>
                  <img
                    src=" https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo4.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo7.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo10.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo13.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo16.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo17.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo18.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo22.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo38.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo2.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo8.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo14.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/clients/clientlogo25.svg"
                    className="marquee-imgs"
                    alt=""
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Transistions;
