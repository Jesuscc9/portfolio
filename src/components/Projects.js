import React, { useState } from "react";
import PCFrame from "../assets/img/PCFrame.png";
import PhoneFrame from "../assets/img/PhoneFrameWithoutNotch.png";
import ReviewsicPC from "../assets/img/Reviewsic/PC.gif";
import ReviewsicPhone from "../assets/img/Reviewsic/Phone.gif";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import { WorkContainer } from "./styles/Projects.style";
import { Link } from "gatsby";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div className="project reviewsic" layout onClick={toggleOpen}>
      <motion.div className="images" layout>
        <div className="image-container">
          <img src={PCFrame} className="pc" />
          <div className="pcgif-container">
            <img src={ReviewsicPC} alt="" />
          </div>
        </div>
        <div className="image-container">
          <img src={PhoneFrame} className="phone" />
          <div className="phonegif-container">
            <img src={ReviewsicPhone} alt="" />
          </div>
        </div>
      </motion.div>
      <motion.div className="description" layout>
        <h1>Reviewsic</h1>
        <br />
        <p>
          Reviewsic is a place where you can share your favorite music with
          everyone, and also interact with other’s reviews.
        </p>
      </motion.div>

      <AnimatePresence>{isOpen && <ProjectContent />}</AnimatePresence>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <WorkContainer>
      <AnimateSharedLayout>
        <motion.div layout className="content">
          <h1>My Recent Work</h1>
          <Link to="/reviewsic">
            <Project />
          </Link>
          <Project />
          <Project />
        </motion.div>
      </AnimateSharedLayout>
    </WorkContainer>
  );
};

const ProjectContent = () => {
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        }}
        exit={{ opacity: 0 }}
      >
        {/* <p>Buenas tardes aprendi muchas cosas</p>
        <p>Buenas tardes aprendi muchas cosas</p>
        <p>Buenas tardes aprendi muchas cosas</p>
        <p>Buenas tardes aprendi muchas cosas</p>
        <p>Buenas tardes aprendi muchas cosas</p>
        <p>Buenas tardes aprendi muchas cosas</p> */}
      </motion.div>
    </>
  );
};

export default Projects;
