import React from "react";
import Navbar from "../components/Navbar";
import { ProjectDescription, ProjectHeader } from "../styles/reviewsic.style";

import img from "../assets/images/IphoneXMockup.png";

const ReviewsicPage = () => {
  return (
    <>
      <title>Jesús Cervantes l Reviewsic</title>
      <Navbar titleColor="#545454" menuColor="#545454" />
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
          <p className="date">Dec 2020 - Now</p>
          <div className="tools-list">
            <h3>Role</h3>
            <ul>
              <li>Creator</li>
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
            <p>
              The main goal of Reviewsic is to connect people through music, and
              generate world wide communities based on a specific topic to
              discuss and share opinions, and why not, to make friends.
            </p>
          </div>
          <div className="features">
            <h3>Features</h3>
            <ul>
              <li>Real Time</li>
              <li>Responsive</li>
              <li>Animated</li>
              <li>Real Time</li>
              <li>Responsive</li>
              <li>Animated</li>
              <li>Real Time</li>
              <li>Responsive</li>
              <li>Animated</li>
              <li>Real Time</li>
              <li>Responsive</li>
              <li>Animated</li>
              <li>Real Time</li>
              <li>Responsive</li>
              <li>Animated</li>
              <li>Real Time</li>
              <li>Responsive</li>
              <li>Animated</li>
              <li>Real Time</li>
              <li>Responsive</li>
              <li>Animated</li>
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
    </>
  );
};

export default ReviewsicPage;
