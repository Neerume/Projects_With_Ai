import React from "react";
import BackgroundImage from "../assets/background.png";
import Robot from "../assets/robot.png";

const Hero =()=>{
  return(
    <div className ="flex md:gap-20 gap-9">
    <div className="min-h-screen justify-center md:px-20 md:py-20 px-10 py-10">
    <h1 className="md:text-7xl text-3xl text-amber-100 fantasy-font">
      Turn Your
      <br />
      Imagination
      <br />
      Into <span className="text-violet-400 md:text-8xl text-6xl font-bold">Stories</span>
    </h1>

    <p className="text-gray-300 mt-6 max-w-xl md:text-xl text-sm">
      Describe your idea and let AI weave a magical story for you.
    </p>
    </div>

  <div>
    <img src={Robot} alt="Robot" className="md:w-[350px] max-w-md mx-auto w-[200px]" />
  </div>
</div>
  ) 
  
}

export default Hero;