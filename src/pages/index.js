import React, { useEffect, useState } from "react";
import "../GlobalStyles.css";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Illustration from "../components/Illustration";
import Footer from "../components/Footer";
import {
  ContactInfo,
  Main,
  Shapes,
  WorkContainer,
} from "../styles/index.style";
import { motion } from "framer-motion";
import Projects from "../components/Projects";
import Circle1 from "../assets/images/shapes/circle1.svg";
import Circle2 from "../assets/images/shapes/circle2.svg";
import Circle3 from "../assets/images/shapes/circle3.svg";
import Circle4 from "../assets/images/shapes/circle4.svg";
import Rocket from "../assets/images/shapes/rocket.png";
import { unwatchViewport, watchViewport } from "tornis";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useRef } from "react";

const IndexPage = () => {
  const [viewport, setViewport] = useState(undefined);

  const updateValues = ({ size }) => {
    if (size.changed && !viewport) {
      if (size.x < 800) {
        setViewport("notpc");
      } else {
        setViewport("pc");
      }
    }
  };

  watchViewport(updateValues);
  unwatchViewport(updateValues);

  const mailButtonRef = useRef(null);

  const contactRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <AnimateSharedLayout>
      <a href="mailto:jesus.cervantes0801@gmail.com" ref={mailButtonRef}></a>
      <Shapes>
        <img src={Circle1} alt="" className="circle1" />
        <img src={Circle2} alt="" className="circle2" />
        <img src={Circle3} alt="" className="circle3" />
        <img src={Circle4} alt="" className="circle4" />
        <img src={Circle4} alt="" className="circle5" />
      </Shapes>
      <Navbar
        onContactClick={() => {
          contactRef.current.scrollIntoView({
            alignToTop: true,
            behavior: "smooth",
            block: "nearest",
          });
        }}
        onAboutClick={() => {
          aboutMeRef.current.scrollIntoView({
            alignToTop: true,
            behavior: "smooth",
            block: "nearest",
          });
        }}
        onProjectsClick={() => {
          projectsRef.current.scrollIntoView({
            alignToTop: true,
            behavior: "smooth",
            block: "nearest",
          });
        }}
      />
      <Main>
        <title>Jes??s Cervantes l Portfolio</title>
        <div className="content">
          <div className="presentation">
            <motion.h1
              className="name"
              initial={{ x: -900, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
            >
              Jes??s Cervantes
            </motion.h1>
            <motion.h1
              initial={{ x: -900, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
            >
              Front-End <br />
              Developer
            </motion.h1>
            <motion.div className="rocket-container">
              <img src={Rocket} alt="" className="rocket" />
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 1.7 }}
              onClick={() => {
                mailButtonRef.current.click();
              }}
            >
              Contact me!
            </motion.button>
          </div>
          <div className="illustration">
            <Illustration />
          </div>
        </div>
      </Main>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
      {/* <ContactInfo>
        <div className="email-info">
          <div className="rotate-text">
            <a href="mailto:jesus.cervantes0801@gmail.com">
              <p>jesus.cervantes0801@gmail.com</p>
            </a>
          </div>
          <div className="line"></div>
        </div>
      </ContactInfo> */}
    </AnimateSharedLayout>
  );
};

export default IndexPage;
