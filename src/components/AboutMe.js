import React from "react";
import { AboutmeContainer } from "./styles/AboutMe.style";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
  return (
    <AboutmeContainer>
      <Fade delay="400">
        <div className="about-me">
          <h1>Who am I?</h1>
          <p>
            Hi, my name is Jesús, and I love learning new things, I have been
            interested in programming since I was 12 years old, and since that
            moment I have been involved in different areas like web development,
            mobile development, 2D & 3D Videogames development, UI Designing and
            competitive programming
          </p>
          <button>Know me</button>
        </div>
      </Fade>
    </AboutmeContainer>
  );
};

export default AboutMe;
