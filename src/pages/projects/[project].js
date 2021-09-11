import React from "react";

import ProjectView from "../../views/Project";
import { ProjectsData } from "../../data/ProjectsData";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Project = ({ params }) => {
  const project = ProjectsData.filter((project) => {
    return project.shortName == params.project;
  });

  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  return (
    <>
      {project.length ? (
        <ProjectView project={project[0]} />
      ) : (
        <div>
          <Navbar />
          <div style={{ ...styles }}>
            <h1>I havent done a project with that name.</h1>
            <br />
            <a href="/" style={{ marginTop: "60px" }}>
              <button>Back to home</button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
