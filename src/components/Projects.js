import React from "react";
import PCFrame from "../assets/images/PCFrame.png";
import PhoneFrame from "../assets/images/PhoneFrameWithoutNotch.png";
import ReviewsicPC from "../assets/images/Reviewsic/PC.gif";
import ReviewsicPhone from "../assets/images/Reviewsic/Phone.gif";
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
        <div className="projects-text">
          <p>
            These are just my latest and more relevant projects but I have
            worked in different stuff like:
          </p>
          <br />
          <ul>
            <li>
              A web client to display the value and the progress of a
              temperature sensor during the day, and send notifications if the
              temperature change suddenly
            </li>
            <li>
              A web app to detect floods with an humidity sensor using an
              arduino that communicates with a web server. I made the arduino
              part too 😳.
            </li>
            <li>Multiple responsive websites.</li>
            <li>
              A lot of CRUDS with PHP and some others with Node.js and Express
            </li>
            <li>
              And also some <Link to="/about">science projects</Link>...
            </li>
          </ul>
        </div>
      </motion.div>
    </WorkContainer>
  );
};

const ProjectImages = ({ images }) => {
  return (
    <motion.div className="images">
      <div className="image-container">
        <img src={PCFrame} className="pc" />
        <div className="pcgif-container">
          {/* <img src={images?.length > 0 ? images[0] : ReviewsicPC} alt="" /> */}
          <img src={require(`../assets/images${images[0]}`).default} alt="" />
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
