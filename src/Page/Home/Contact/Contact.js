import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Zoom from 'react-reveal/Zoom';


const Contact = () => {
function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_wrru4gk",
                "template_0n853qs",
                e.target,
                "user_Efr64ejrjGHpufYer9AqW"
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));

    }


    return (
        <div
            id="contact"
            className="mb-5 pt-5"
            style={{
                marginTop: "50px",
                width: "100%",
                backgroundImage: `url('https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?cs=srgb&dl=pexels-pixmike-413195.jpg&fm=jpg')`,
                backgroundPasition: "center",
                backgroundSize: "cover",
            }}
        >
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                    <Zoom>
                        <form action="#" className="contact-form" onSubmit={sendEmail}>
                            <div class="contact-title">
                                <h4 className="text-center fw-bolder text-danger mb-5">CONTACT</h4>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" name="name" placeholder="Full Name" />
                                </div>
                                <div class="col-md-6">
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div class="col-md-6">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                    />
                                </div>
                                <div class="col-md-6">
                                    <input type="text" name="phone" placeholder="Phone Number" />
                                </div>
                                <div class="col-md-12">
                                    <textarea name="message" placeholder="Message Here" />
                                </div>
                                <div class="col-md-12">
                                    <div class="contact-btn mb-5">
                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
