import React, { useState } from "react";
import PCFrame from "../assets/img/PCFrame.png";
import PhoneFrame from "../assets/img/PhoneFrameWithoutNotch.png";
import ReviewsicPC from "../assets/img/Reviewsic/PC.gif";
import ReviewsicPhone from "../assets/img/Reviewsic/Phone.gif";
import { motion } from "framer-motion";
import { WorkContainer } from "./styles/Projects.style";
import { Link } from "gatsby";
import LightSpeed from "react-reveal/LightSpeed";

const Project = () => {
  return (
    <>
      <LightSpeed left>
        <motion.div className="project reviewsic">
          <motion.div className="images">
            <div className="image-container">
              <img src={PCFrame} className="pc" />
              <div className="pcgif-container">
                <img src={ReviewsicPC} alt="" />
              </div>
            </div>
            <div className="image-container">
              <img src={PhoneFrame} className="phone" />
              <div className="phonegif-container">
                <img src={ReviewsicPhone} alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div className="description">
            <h1>Reviewsic</h1>
            <br />
            <p>
              Reviewsic is a place where you can share your favorite music with
              everyone, and also interact with other’s reviews.
            </p>
          </motion.div>
        </motion.div>
      </LightSpeed>
      <LightSpeed right>
        <motion.div className="project project-2 lpdla-app">
          <motion.div className="description">
            <h1>Lpdla Team</h1>
            <br />
            <p>
              This is an web app to see the stats of my team with my friends of
              League of Legends using the Riot API.
            </p>
          </motion.div>
          <motion.div className="images">
            <div className="image-container">
              <img src={PCFrame} className="pc" />
              <div className="pcgif-container">
                <img src={ReviewsicPC} alt="" />
              </div>
            </div>
            <div className="image-container">
              <img src={PhoneFrame} className="phone" />
              <div className="phonegif-container">
                <img src={ReviewsicPhone} alt="" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </LightSpeed>

      <LightSpeed left>
        <motion.div className="project project-2 camera-app">
          <motion.div className="images">
            <div className="image-container">
              <img src={PCFrame} className="pc" />
              <div className="pcgif-container">
                <img src={ReviewsicPC} alt="" />
              </div>
            </div>
            <div className="image-container">
              <img src={PhoneFrame} className="phone" />
              <div className="phonegif-container">
                <img src={ReviewsicPhone} alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div className="description">
            <h1>Camera App</h1>
            <br />
            <p>
              This app allows to the users to capture exact frames of the video
              of your camera, using different algorithms and AI libraries.
            </p>
          </motion.div>
        </motion.div>
      </LightSpeed>

      <LightSpeed right>
        <motion.div className="project project-2 covid-app">
          <motion.div className="description">
            <h1>COVID-19 RV</h1>
            <br />
            <p>
              Reviewsic is a place where you can share your favorite music with
              everyone, and also interact with other’s reviews.
            </p>
          </motion.div>
          <motion.div className="images">
            <div className="image-container">
              <img src={PCFrame} className="pc" />
              <div className="pcgif-container">
                <img src={ReviewsicPC} alt="" />
              </div>
            </div>
            <div className="image-container">
              <img src={PhoneFrame} className="phone" />
              <div className="phonegif-container">
                <img src={ReviewsicPhone} alt="" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </LightSpeed>
    </>
  );
};

const Projects = () => {
  return (
    <WorkContainer>
      <motion.div className="content">
        <h1>My Recent Work</h1>
        <div className="projects">
          <Project />
        </div>
      </motion.div>
    </WorkContainer>
  );
};

export default Projects;
