import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png';




const Notfound = () => {
  return (
    <div>
      <img className=" w-100" src={notfound} alt="images" /> <br />
      <Link to="/">
      <button className="mt-5 mb-5 btn btn-warning fw-bolder d- mx-auto d-block">Go Back Home</button>
      </Link>
    </div>
  );
};

export default Notfound;