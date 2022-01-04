import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MembersOne from "../../../images/Members-1.png";
import MembersTow from "../../../images/Members-2.png";
import MembersThree from "../../../images/Members-3.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import LightSpeed from "react-reveal/LightSpeed";
import Roll from "react-reveal/Roll";

const Testimonials = () => {
  return (
    <div id="testimonials" className="mb-5 pt-5 bg-light">
      <div class="container">
      <Roll top>
        <h3 className="text-center fw-bold mt-3">Testimonials</h3>
        </Roll>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mt-5 w-100 p-2 mb-5">
              <LightSpeed left>
                <Card className="p-4 border-0 shadow-lg">
                  <div className=" w-50 h-50 d-flex">
                    <img
                      className="w-50 h-50 img-fluid"
                      src={MembersOne}
                      alt="png"
                    />
                    <div className="mx-3 mb-4 mt-4">
                      <small className="fw-bold">Nash Patrik</small> <br />
                      <small className="fw-bold">CEO.Manpol</small>
                    </div>
                  </div>
                  <div className="bannerText mx-3">
                    <small className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Purus commodo ipsum duis laoreet maecenas. Feugiat ...
                    </small>{" "}
                    <br />
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning "
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                  </div>
                </Card>
              </LightSpeed>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mt-5 w-100 p-2 mb-5">
              <Roll bottom>
                <Card className="p-4 border-0 shadow-lg">
                  <div className=" w-50 h-50 d-flex">
                    <img
                      className="w-50 h-50 img-fluid"
                      src={MembersTow}
                      alt="png"
                    />
                    <div className="mx-3 mb-4 mt-4">
                      <small className="fw-bold">Miriam Bra</small> <br />
                      <small className="fw-bold">CEO.Manpol</small>
                    </div>
                  </div>
                  <div className="bannerText mx-3">
                    <small className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Purus commodo ipsum duis laoreet maecenas.
                    </small>{" "}
                    <br />
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning "
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                  </div>
                </Card>
              </Roll>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mt-5 w-100 p-2 mb-5">
              <LightSpeed right>
                <Card className="p-4 border-0 shadow-lg">
                  <div className=" w-50 h-50 d-flex">
                    <img
                      className="w-50 h-50 img-fluid"
                      src={MembersThree}
                      alt="png"
                    />
                    <div className="mx-3 mb-4 mt-4">
                      <small className="fw-bold">Bria Malone</small> <br />
                      <small className="fw-bold">CEO.Manpol</small>
                    </div>
                  </div>
                  <div className="bannerText mx-3">
                    <small className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Purus commodo ipsum duis laoreet maecenas(Feugiat).
                    </small>{" "}
                    <br />
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning "
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        className=" text-warning"
                        icon={faStar}
                      />
                    </a>
                  </div>
                </Card>
              </LightSpeed>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
