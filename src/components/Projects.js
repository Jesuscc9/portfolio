import React from "react";
import PCFrame from "../assets/images/PCFrame.png";
import PhoneFrame from "../assets/images/PhoneFrameWithoutNotch.png";
import ReviewsicPC from "../assets/images/Reviewsic/PC.gif";
import ReviewsicPhone from "../assets/images/Reviewsic/Phone.gif";
import { motion } from "framer-motion";
import { WorkContainer } from "./styles/Projects.style";
import { Link } from "gatsby";
import LightSpeed from "react-reveal/LightSpeed";
import Zoom from "react-reveal/Zoom";
import { ProjectsData, OthersProjects } from "../data/ProjectsData";

const Project = () => {
  return (
    <>
      {ProjectsData.map((project, i) => {
        const even = i % 2;

        return (
          <LightSpeed {...{ left: even, right: !even }}>
            <Link to={`/projects/${project.shortName}`}>
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
            </Link>
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
        <Zoom left delay="200">
          <div className="projects-text">
            <details>
              <summary>
                These are just my latest and more relevant projects but I've
                done different things like:
              </summary>
              <ul>
                {OthersProjects.map((project) => {
                  return <li>{project}</li>;
                })}

                <li>
                  And also some <Link to="/about">science projects</Link>...
                </li>
              </ul>
            </details>
            <br />
          </div>
        </Zoom>
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
      <p>
        {description} <Link to={`/${shortName}`}>View more</Link>
      </p>
    </motion.div>
  );
};

export default Projects;
