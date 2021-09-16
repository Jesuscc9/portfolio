import React from "react";
import Navbar from "../components/Navbar";
import {
  ProjectDescription,
  ProjectHeader,
  GlobalStyles,
} from "../styles/project.style";

import img from "../assets/images/IphoneXMockup.png";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const ProjectView = ({ project }) => {
  return (
    <>
      <title>Jesús Cervantes l {project.name}</title>
      <GlobalStyles />
      <Navbar titleColor="#545454" menuColor="#545454" />
      <ProjectHeader />
      <ProjectDescription>
        <div className="description">
          <motion.h2 initial={{ x: +100 }} animate={{ x: 0 }}>
            {project.name}
          </motion.h2>
          <p>{project.description}</p>
        </div>
        <div className="tools">
          <div className="buttons-container">
            <a href={project.link} target="_blank" rel="">
              <button className="app-button-reviewsic">
                Visit App
                <FontAwesomeIcon icon={faExternalLinkAlt} />
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

            <ToolsList tools={project.tools} />
          </div>
          <div className="challenge">
            <h3>Challenge</h3>
            <p>{project.challenge}</p>
          </div>
          <div className="features">
            <h3>Features</h3>
            <Features features={project.features} />
          </div>
        </div>
        <div className="project-image">
          <div className="image-container">
            <motion.img src={img} initial={{ x: -200 }} animate={{ x: 0 }} />
          </div>
        </div>
      </ProjectDescription>
      <Footer />
    </>
  );
};

const ToolsList = ({ tools }) => {
  return (
    <ul>
      {tools.map((tool) => {
        return (
          <li>
            {tool.map((el, i) => {
              return `${el} ${i != tool.length - 1 ? "|" : ""} `;
            })}
          </li>
        );
      })}
    </ul>
  );
};

const Features = ({ features }) => {
  return (
    <ul>
      {features.map((feature) => {
        return <li>{feature}</li>;
      })}
    </ul>
  );
};

export default ProjectView;
