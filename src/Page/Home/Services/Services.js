import React, { useEffect, useState } from "react";
import Slide from "react-reveal/Slide";
import Service from "./../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://thawing-wildwood-68433.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  return (
    <div id="services" className="mb-5 pt-5">
      <div className="container">
        <Slide top>
          <h6 className="text-center fw-bolder text-primary">OUR SERVICES</h6>
          <h4 className="text-center fw-bold">
            We re an agency tailored to <br /> all clients needs that always
            delivers
          </h4>
        </Slide>
        <div className="row">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
