import * as React from "react";
import "../GlobalStyles.css";
import Navbar from "../components/Navbar";
import image from "../assets/img/Illustration3DPerson.png";
import Donut from "../assets/img/Donut.png";
import Sphere from "../assets/img/Sphere.png";
import Tube from "../assets/img/Tube.png";
import TubeShort from "../assets/img/TubeShort.png";
import { Main, Shapes } from "./styles/index.style";

const IndexPage = () => {
  return (
    <>
      <Shapes>
        <img src={Donut} alt="" className="donut" />
        <img src={Sphere} alt="" className="sphere" />
        <img src={Tube} alt="" className="tube" />
        <img src={TubeShort} alt="" className="tube-short" />
      </Shapes>
      <Navbar />
      <Main>
        <title>Jesus Cervantes</title>
        <div className="content">
          <div className="presentation">
            <h1 className="name">Jesus Cervantes</h1>
            <h1>Front-End Developer</h1>
          </div>
          <div className="illustration">
            <img src={image} alt="" />
          </div>
        </div>
      </Main>
    </>
  );
};

export default IndexPage;
