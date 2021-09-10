import React from "react";
import Navbar from "../components/Navbar";
import { ProjectDescription, ProjectHeader } from "../styles/reviewsic.style";

import img from "../assets/images/IphoneXMockup.png";

const ReviewsicPage = () => {
  return (
    <>
      <title>Jesús Cervantes l Reviewsic</title>
      <Navbar titleColor="#7c7c7c" menuColor="#545454" />
      <ProjectHeader />
      <br />
      <br />
      <ProjectDescription>
        <div className="description">
          <h2>Reviewsic</h2>
          <p>
            Reviewsic is a place where you can share your favorite music with
            everyone, and also interact with other’s reviews.
          </p>
        </div>
        <div className="tools">
          <p>This were the used tools xd</p>
        </div>
        <div className="project-image">
          <img src={img} alt="" />
        </div>
      </ProjectDescription>
    </>
  );
};

export default ReviewsicPage;
