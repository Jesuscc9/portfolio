import React from "react";
import { CustomFooter } from "./styles/Footer.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faLocationArrow,
  faMailBulk,
  faMapMarker,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <CustomFooter>
      <div className="contact">
        <h2>Contact Me</h2>
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
      </div>
      <div className="social">
        <h2>Social Media</h2>
        <div className="icons">
          <a href="https://jesuscc9.medium.com/" target="_blank">
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a href="https://www.instagram.com/jesuscc989/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/Jesuscc9/" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </CustomFooter>
  );
};

export default Footer;
