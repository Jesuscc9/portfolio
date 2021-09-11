import React from "react";
import Navbar from "../components/Navbar";
import {
  ProjectDescription,
  ProjectHeader,
  GlobalStyles,
} from "../styles/reviewsic.style";

import img from "../assets/images/IphoneXMockup.png";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectView = ({ project }) => {
  return (
    <>
      <title>Jesús Cervantes l {project.name}</title>
      <GlobalStyles />
      <Navbar titleColor="#545454" menuColor="#545454" />
      <ProjectHeader />
      <ProjectDescription>
        <div className="description">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
        <div className="tools">
          <div className="buttons-container">
            <a href={project.link} target="_blank" rel="">
              <button className="app-button-reviewsic">
                Visit App <FontAwesomeIcon icon={faExternalLinkAlt} />
              </button>
            </a>
            <a href={project.github} target="_blank" rel="">
              <button className="github-button">
                Github <FontAwesomeIcon icon={faGithub} />
              </button>
            </a>
          </div>
          <p className="date">
            {project.date.from} - {project.date.to}
          </p>
          <div className="tools-list">
            <h3>Role</h3>
            <ul>
              <li>{project.role}</li>
            </ul>
          </div>
          <div className="tools-list">
            <h3>Tools</h3>
            <ul>
              <li>React JS | Hooks | Redux</li>
              <li>Node JS | Socket.io | Express</li>
              <li>Reviewsic Rest API & Spotify API</li>
              <li>Heroku Hosting </li>
            </ul>
          </div>
          <div className="goal">
            <h3>Goal</h3>
            <p>{project.goal}</p>
          </div>
          <div className="features">
            <h3>Features</h3>
            <ul>
              <li>Real Time</li>
              <li>Responsive</li>
              <li>Animated</li>
            </ul>
          </div>
        </div>
        <div className="project-image">
          <div className="image-container">
            <img src={img} alt="" />
          </div>
        </div>
      </ProjectDescription>
      <Footer />
    </>
  );
};

export default ProjectView;
