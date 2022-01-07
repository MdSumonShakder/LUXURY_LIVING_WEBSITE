import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Zoom";
import { Rotate } from "react-reveal";

const Footer = () => {
  return (
    <div id="footer" className="mt-5 footer pt-5">
      <div className="container">
        <div className="row pb-4">
          <div className="col-md-6 col-lg-3 col-12">
            <Flip left>
              <b className="mx-4 text-white">About us</b>
              <div className="footerList bannerText">
                <small>
                  I am Junior React-Js Developer,,, <br /> Adipiscing elit.Purus
                  commodo,, <br /> duis laoreet maecenas. Feugiat...
                </small>
              </div>
            </Flip>
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <Flip top>
              <b className="mx-5 text-white">Services</b>
              <div className="footerList">
                <ul>
                  <li>Web-Design</li>
                  <li>Web-Development</li>
                  <li>React-Js</li>
                </ul>
              </div>
            </Flip>
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <Rotate bottom left>
              <b className="mx-4 text-white">Company</b>
              <div className="footerList">
                <ul>
                  <li>About-us</li>
                  <li>Projects</li>
                  <li>Our-Team</li>
                </ul>
              </div>
            </Rotate>
          </div>

          <div className="col-md-6 col-lg-3 col-12">
            <strong className=" text-white mx-5 mb-3 d-block">Follow Us</strong>
            <div className="row">
              <Fade bottom>
                <div className="icon">
                  <a target="_blank" href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a target="_blank" href="https://twitter.com/home">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a target="_blank" href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/feed/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCLD9CflKsqVox6JZLbKpt0Q"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a target="_blank" href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
