import React from "react";
import BackgroundImage from "../assets/background.png";

const Hero =()=>{
  return(
    <div className="min-h-screen justify-center px-20 py-20 ">
    <h1 className="text-7xl text-amber-100 fantasy-font">
      Turn Your
      <br />
      Imagination
      <br />
      Into <span className="text-violet-400 text-8xl font-bold">Stories</span>
    </h1>

    <p className="text-gray-300 mt-6 max-w-xl text-xl">
      Describe your idea and let AI weave a magical story for you.
    </p>
  </div>
  ) 
  
}

export default Hero;