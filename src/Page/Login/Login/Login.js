import React, { useState } from "react";
import Logo from "../../../images/Logo.png";
import LightSpeed from "react-reveal/LightSpeed";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import { Alert, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, loading, error } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  const handelGoogleSignIn = (e) => {
    signInWithGoogle(location, navigate);
  };

  return (
    <div
      className="pt-2 text-center"
      style={{
        marginTop: "50px",
        width: "100%",
        backgroundImage: `url('https://images.pexels.com/photos/675267/pexels-photo-675267.jpeg?cs=srgb&dl=pexels-ylanite-koppens-675267.jpg&fm=jpg')`,
        backgroundPasition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mt-4">
        <LightSpeed left>
          <img src={Logo} alt="png" className=" img-fluid mt-5 mb-5 logo" />
        </LightSpeed>
        <LightSpeed right>
          <h3>Please Login</h3>
        </LightSpeed>
       
          <LightSpeed>
            {!loading && (
              <form
                className="contact-forms mt-5 pb-5"
                onSubmit={handleLoginSubmit}
              >
                <div className="col-md-6 d-block mx-auto">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 d-block mx-auto">
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <div className="bannerText">
                    <button className="mb-4" type="submit">
                      LOGIN
                    </button>
                    <NavLink to="/register">
                      <h5 className="text-decoration-underline">
                        NEW USER ? PLEASE REGISTER
                      </h5>
                    </NavLink>
                    <div className="fw-bolder text-danger">
                      -------------------------
                    </div>
                    <button onClick={handelGoogleSignIn}>GOOGLE SIGN IN</button>
                  </div>
                </div>
              </form>
            )}
          </LightSpeed>
          {loading && <Spinner animation="border" variant="danger" />}
          {user?.email && (
            <Alert
              className=" bg-white w-25 d-block mx-auto fw-bolder"
              variant="success"
            >
              Login Successfully!
            </Alert>
          )}

          {error && (
            <Alert
              className="bg-warning w-25 d-block mx-auto fw-bolder"
              variant="dark"
            >
              Firebase-Error: (Please Register!!! )
            </Alert>
          )}
        </div>
      </div>
   
  );
};

export default Login;
