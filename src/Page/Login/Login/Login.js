import React from "react";
import Logo from "../../../images/Logo.png";




const Login = () => {
  return (
    <div className="pt-2 text-center bg-info">
      <div class="container">
        <img src={Logo} alt="png" className=" img-fluid mt-5 mb-5 logo" />
        <h1>Login With</h1>
        <div class="row">
          <form action="#" className="contact-form mt-5 mb-5">
            <div class="col-md-6 d-block mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div class="col-md-6 d-block mx-auto">
              <input
                type="password"
                name="password"
                placeholder="Your Password"
              />
            </div>
            <div class="col-md-12">
              <div class="bannerText mb-5">
                <button type="submit">LOGIN</button>
                <h5><a className=" text-danger text-decoration-underline" href="#">NEW USER? PLEASE REGISTER</a></h5>
                <div className=" fw-bolder">-------------------------</div>
                <button>GOOGLE SIGN IN</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
