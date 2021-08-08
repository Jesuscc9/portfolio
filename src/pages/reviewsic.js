import React from "react";
import Navbar from "../components/Navbar";
import { ProjectHeader } from "../pages/styles/reviewsic.style";

const ReviewsicPage = () => {
  return (
    <>
      <title>Jesús Cervantes l Reviewsic</title>
      <Navbar></Navbar>
      <ProjectHeader></ProjectHeader>
      <br />
      <br />
      <div className="project-description">
        <h1>Reviewsic</h1>
        <p>Buena app</p>
      </div>
      <div className="project-image">
        <img src="" alt="" />
      </div>
    </>
  );
};

export default ReviewsicPage;
