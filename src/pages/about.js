import React, { useEffect, useState } from "react";
import "../GlobalStyles.css";
import Navbar from "../components/Navbar";
import Illustration from "../components/Illustration";
import Donut from "../assets/images/Donut.png";
import Sphere from "../assets/images/Sphere.png";
import Tube from "../assets/images/Tube.png";
import TubeShort from "../assets/images/TubeShort.png";
import { Main, Shapes } from "../styles/index.style";
import { motion } from "framer-motion";
import icon from "../assets/images/Icon.png";

const AboutPage = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <link rel="icon" type="image/png" href={icon} />
      <Shapes>
        <img src={Donut} alt="" className="donut" />
        <img src={Sphere} alt="" className="sphere" />
        <img src={Tube} alt="" className="tube" />
        <img src={TubeShort} alt="" className="tube-short" />
      </Shapes>
      <Navbar />
      <Main>
        <title>Jesús Cervantes l Portfolio</title>
        <div className="content">
          <div className="presentation">
            <h1 className="name">Jesús Cervantes</h1>
            <h1>
              Front-End <br />
              Developer
            </h1>
            <button
              onMouseOver={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Contact me!
            </button>
          </div>
          <div className="illustration">
            <Illustration hover={isHover} />
          </div>
        </div>
      </Main>
    </>
  );
};

export default AboutPage;
