import React from "react";
import BackgroundImage from "../assets/background.png";

const Hero =()=>{
  return(
  <div className="w-full h-screen bg-cover bg-center py-20 px-15"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
        <div>
    <h1 className="text-7xl text-amber-100 font-bold">
      Turn Your
      <br />
      Imagination
      <br />
      Into <span className="text-violet-400">Stories</span>
    </h1>

    <p className="text-gray-300 mt-6 max-w-xl">
      Describe your idea and let AI weave a magical story for you.
    </p>
  </div>

  </div>
  ) 
  
}

export default Hero;