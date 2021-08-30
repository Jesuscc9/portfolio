import React, { useEffect, useState } from "react";
import "../GlobalStyles.css";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Illustration from "../components/Illustration";
import {
  ContactInfo,
  Main,
  Shapes,
  WorkContainer,
} from "../styles/index.style";
import { motion } from "framer-motion";
import Projects from "../components/Projects";
import Circle1 from "../assets/img/shapes/circle1.svg";
import Circle2 from "../assets/img/shapes/circle2.svg";
import Circle3 from "../assets/img/shapes/circle3.svg";
import Circle4 from "../assets/img/shapes/circle4.svg";
import Rocket from "../assets/img/shapes/rocket.png";
import { unwatchViewport, watchViewport } from "tornis";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

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

  return (
    <AnimateSharedLayout>
      <Shapes>
        <img src={Circle1} alt="" />
        <img src={Circle2} alt="" className="circle2" />
        <img src={Circle3} alt="" className="circle3" />
        <img src={Circle4} alt="" className="circle4" />
        <img src={Circle4} alt="" className="circle5" />
      </Shapes>
      <Navbar />
      <Main>
        <title>Jesús Cervantes l Portfolio</title>
        <div className="content">
          <div className="presentation">
            <motion.h1
              className="name"
              initial={{ x: -900, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
            >
              Jesús Cervantes
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
            >
              Contact me!
            </motion.button>
          </div>
          <div className="illustration">
            <Illustration />
          </div>
        </div>
      </Main>
      <AboutMe />
      <Projects />
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
