import React from "react";

import SubHeading from "./SubHeading";
import profile from "../assets/images/bg/profile.jpg"

const Contact = () => (
  <div className="app__bg app__wrapper section__padding" id="kontak">
    <div className="app__wrapper_info">
      <SubHeading title="" />
      <h1 className="headtext__cormorant" style={{ color:"white" , marginBottom: "2rem" }}>
        Contact
      </h1>
      <div className="app__wrapper-content">
        <p
          className="p__cormorant"
          style={{ color: "white", margin: "2rem 0" }}
        >
          <h2>Nama   : Aziza Nurul Amanah</h2>
          <h2>Nim    : 2110025</h2>
          <h2>e-mail : azraalamanah88@gmail.com</h2>
        </p>
      </div>
     </div>

    <div className="app__wrapper_img">
      <img src={profile} alt="profile_img" height='500px' />
    </div>
  </div>
);

export default Contact;
