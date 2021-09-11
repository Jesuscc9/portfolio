import React from "react";
import { CustomFooter } from "./styles/Footer.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <CustomFooter>
      <div className="contact">
        <h2>Contact Me</h2>
        <Fade left>
          <div className="phone">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <p>(81) 1885-2578</p>
          </div>
          <div className="mail">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:jesus.cervantes0801@gmail.com">
              jesus.cervantes0801@gmail.com
            </a>
          </div>
          <div className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>Monterrey, México</p>
          </div>
        </Fade>
      </div>
      <div className="social">
        <h2>Social Media</h2>
        <Fade right delay={300}>
          {/* <div className="icons">
          <a href="https://jesuscc9.medium.com/" rel="noreferrer" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a href="https://www.instagram.com/jesuscc989/" rel="noreferrer" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a href="https://github.com/Jesuscc9/" rel="noreferrer" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a href="https://www.linkedin.com/in/jesuscc9/" rel="noreferrer" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>  */}

          <div className="icons">
            <a
              href="https://jesuscc9.medium.com/"
              rel="noreferrer"
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faMediumM} />
            </a>
            <a
              href="https://www.instagram.com/jesuscc989/"
              rel="noreferrer"
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/Jesuscc9/"
              rel="noreferrer"
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/jesuscc9/"
              rel="noreferrer"
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </Fade>
      </div>
    </CustomFooter>
  );
};

export default Footer;
