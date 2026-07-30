import React from "react";
import BackgroundImage from "../assets/background.png";

const Register = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-transparent"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    ></div>
  );
};

export default Register;
