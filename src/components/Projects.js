import React, { useState } from "react";
import PCFrame from "../assets/img/PCFrame.png";
import PhoneFrame from "../assets/img/PhoneFrameWithoutNotch.png";
import ReviewsicPC from "../assets/img/Reviewsic/PC.gif";
import ReviewsicPhone from "../assets/img/Reviewsic/Phone.gif";
import { motion } from "framer-motion";
import { WorkContainer } from "./styles/Projects.style";
import { Link } from "gatsby";

const Project = () => {
  return (
    <Link to="/reviewsic">
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
    </Link>
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
