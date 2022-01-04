import React from "react";
import { Card } from "react-bootstrap";
import ServicesOne from "../../../images/Services-1.png";
import ServicesTow from "../../../images/Services-2.png";
import ServicesThree from "../../../images/Services-3.png";
import Slide from 'react-reveal/Slide';


const Services = () => {
  return (
    <div id="services" className="mb-5 pt-5">
      <div class="container">
       <Slide top>
       <h6 className="text-center fw-bolder text-primary">OUR SERVICES</h6>
        <h4 className="text-center fw-bold">
          We re an agency tailored to <br /> all clients needs that always
          delivers
        </h4>
       </Slide>
        <div class="row mb-3">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mt-5 w-100 p-2">
              <Slide left>
              <Card className="p-4 border-0">
                <Card.Img
                  className="img-fluid w-25 mx-auto mb-3"
                  variant="top"
                  src={ServicesOne}
                />
                <Card.Body className="bannerText">
                  <Card.Title>
                    {" "}
                    <h6>Office Interior Design</h6>
                    <small className=" text-primary d-block text-center fw-bolder">
                      $299
                    </small>
                  </Card.Title>
                  <small className="d-block text-center px-5 ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    ..
                  </small>
                </Card.Body>
              </Card>
              </Slide>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mt-5 w-100 p-2">
              <Slide bottom>
              <Card className="p-4 shadow-lg border-0">
                <Card.Img
                  className="img-fluid w-25 mx-auto mb-3"
                  variant="top"
                  src={ServicesTow}
                />
                <Card.Body className="bannerText">
                  <Card.Title>
                    {" "}
                    <h6>Showroom Design</h6>
                    <small className=" text-primary d-block text-center fw-bolder">
                      $399
                    </small>
                  </Card.Title>
                  <small className="d-block text-center px-4">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </small>
                </Card.Body>
              </Card>
              </Slide>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mt-5 w-100 p-2">
            <Slide right>
              <Card className="p-4 border-0">
                <Card.Img
                  className="img-fluid w-25 mx-auto mb-3"
                  variant="top"
                  src={ServicesThree}
                />
                <Card.Body className="bannerText">
                  <Card.Title>
                    {" "}
                    <h6>Residential/ Home</h6>
                    <small className=" text-primary d-block text-center fw-bolder">
                      $499
                    </small>
                  </Card.Title>
                  <small className="d-block text-center px-5 ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    ..
                  </small>
                </Card.Body>
              </Card>
              </Slide>
            </div>
          </div>
        </div>
        <div className="bannerText text-center pb-5"><button>Explore more</button></div>
      </div>
    </div>
  );
};

export default Services;
