import React from "react";
import "./Banner.css";
import RoomPhoto from "../../../images/Banner.png";
import { Fade,Zoom } from "react-reveal";

const Banner = () => {
  return (
    <div id="banner" className="bg-light mb-5">
      <div className="container pt-5 justify-content-center align-items-center pb-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="bannerText mt-5 pt-5 p-3">
              <Fade left>
                <h1 className=" fw-bolder mb-4 text-start ">
                  We Build <br /> Your Dream
                </h1>
              </Fade>
              <small>
                Online Easte Agency, the mordern way to sell your own home
                <br /> You can use Griffin Residential to market your property
              </small>
              <br />
              <Zoom bottom>
                <button>Booking</button>
              </Zoom>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="p-5">
              <Zoom>
                <img className="w-75 img-fluid" src={RoomPhoto} alt="png" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
