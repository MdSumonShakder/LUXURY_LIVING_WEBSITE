import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import ServicesOne from "../../../images/Projects-1.png";
import ServicesTow from "../../../images/Projects-2.png";
import Rotate from "react-reveal/Rotate";

const Projects = () => {
  return (
    <div id="projects" className="mb-5 pt-5">
      <div className="container">
        <h6 className="text-center fw-bolder text-primary">OUR PROJECTS</h6>
        <h3 className="text-center fw-bold">
          Discover the latest Interior Design <br />
          available today
        </h3>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="mt-5 p-3">
              <CardGroup>
                <Rotate top left>
                  <Card>
                    <Card.Img
                      className=" img-fluid mb-3"
                      variant="top"
                      src={ServicesOne}
                    />
                    <h6>Villa On Washington Avenue</h6>
                    <small className="text-muted text-center mb-3 fw-bold">
                      <FontAwesomeIcon
                        className="text-dark"
                        icon={faMapMarkerAlt}
                      />{" "}
                      Dhaka, Bangladesh
                    </small>
                  </Card>
                </Rotate>
              </CardGroup>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="mt-5 p-3">
              <CardGroup>
                <Rotate bottom left>
                  <Card>
                    <Card.Img
                      className=" img-fluid mb-3"
                      variant="top"
                      src={ServicesTow}
                    />
                    <h6>Luxury villa in Rego Park</h6>
                    <small className="text-muted text-center mb-3 fw-bold">
                      <FontAwesomeIcon
                        className="text-dark"
                        icon={faMapMarkerAlt}
                      />{" "}
                      Dhaka, Bangladesh
                    </small>
                  </Card>
                </Rotate>
              </CardGroup>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="mt-5 p-3">
              <CardGroup>
                <Rotate top right>
                  <Card>
                    <Card.Img
                      className=" img-fluid mb-3"
                      variant="top"
                      src={ServicesOne}
                    />
                    <h6>Gorgeous house</h6>
                    <small className="text-muted text-center mb-3 fw-bold">
                      <FontAwesomeIcon
                        className="text-dark"
                        icon={faMapMarkerAlt}
                      />{" "}
                      Dhaka, Bangladesh
                    </small>
                  </Card>
                </Rotate>
              </CardGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
