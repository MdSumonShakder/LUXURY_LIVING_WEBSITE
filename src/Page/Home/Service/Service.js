import React from 'react';
import { Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const Service = ({service}) => {
    const {name, img, description, price } = service;
    return (
       
          
         <div className="col-lg-4 col-md-6 col-12">
           <div className="mt-5 w-100 p-2">
           <Zoom bottom>
                <Card className="p-4 border-0 shadow-lg ">
                  <Card.Img
                    className="img-fluid w-25 mx-auto mb-3"
                    variant="top"
                    src={img}
                  />
                  <Card.Body className="bannerText">
                    <Card.Title>
                    
                      <h6>{name}</h6>
                      <small className=" text-primary d-block text-center fw-bolder">
                        {price}
                      </small>
                    </Card.Title>
                    <small className="d-block text-center px-5 ">
                      {description}
                    </small>
                  </Card.Body>
                </Card>
                </Zoom>
            </div>
          </div>
       
    );
};

export default Service;