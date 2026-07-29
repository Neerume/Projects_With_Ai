import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import BackgroundImage from "./assets/background.png";

const App = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
