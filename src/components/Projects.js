import React from "react";
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
            <motion.div
              className={`project ${project.shortName} ${even && "even"}`}
            >
              {even ? (
                <>
                  <ProjectImages images={project.images} />
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
                  <ProjectImages images={project.images} />
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

const ProjectImages = ({ images }) => {
  console.log(images);
  return (
    <motion.div className="images">
      <div className="image-container">
        <img src={PCFrame} className="pc" />
        <div className="pcgif-container">
          {/* <img src={images?.length > 0 ? images[0] : ReviewsicPC} alt="" /> */}
          <img
            src={require("../assets/images/physiology/dashboard.jpg")}
            alt=""
          />
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
      <h2>{name}</h2>
      <br />
      <p>
        {description} <Link to={`/${shortName}`}>View more</Link>
      </p>
    </motion.div>
  );
};

export default Projects;
