import React, { useState } from "react";
import PCFrame from "../assets/img/PCFrame.png";
import PhoneFrame from "../assets/img/PhoneFrameWithoutNotch.png";
import ReviewsicPC from "../assets/img/Reviewsic/PC.gif";
import ReviewsicPhone from "../assets/img/Reviewsic/Phone.gif";
import { motion } from "framer-motion";
import { WorkContainer } from "./styles/Projects.style";
import { Link } from "gatsby";
import LightSpeed from "react-reveal/LightSpeed";
import { ProjectsData } from "../data/ProjectsData";

const Project = () => {
  return (
    <>
      {ProjectsData.map((project, i) => {
        const even = i % 2;

        return (
          <LightSpeed {...{ left: even, right: !even }}>
            <motion.div className={`project ${project.shortName}`}>
              {even ? (
                <>
                  <ProjectImages />
                  <ProjectDescription
                    name={project.name}
                    description={project.description}
                    shortName={project.shortName}
                  />
                </>
              ) : (
                <>
                  <ProjectDescription
                    name={project.name}
                    description={project.description}
                    shortName={project.shortName}
                  />
                  <ProjectImages />
                </>
              )}
            </motion.div>
          </LightSpeed>
        );
      })}
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

const ProjectImages = () => {
  return (
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
  );
};

const ProjectDescription = ({ name, description, shortName }) => {
  return (
    <motion.div className="description">
      <h1>{name}</h1>
      <br />
      <p>
        {description} <Link to={`/${shortName}`}>View more</Link>
      </p>
    </motion.div>
  );
};

export default Projects;
