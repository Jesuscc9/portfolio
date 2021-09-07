import React from "react";
import Navbar from "../components/Navbar";
import { ProjectDescription, ProjectHeader } from "../styles/reviewsic.style";

const ReviewsicPage = () => {
  return (
    <>
      <title>Jesús Cervantes l Reviewsic</title>
      <Navbar />
      <ProjectHeader />
      <br />
      <br />
      <ProjectDescription>
        <h2>Reviewsic</h2>
        <p>Buena app</p>
      </ProjectDescription>
      <div className="project-image">
        <img src="" alt="" />
      </div>
    </>
  );
};

export default ReviewsicPage;
