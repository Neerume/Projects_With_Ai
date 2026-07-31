import React from "react";
import BackgroundImage from "../assets/background.png";
import robo from "../assets/robot.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-transparent"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="min-h-screen bg-black/70 flex items-center justify-center px-6 py-10">
        <div className="max-w-6xl w-full bg-[#16112c]/80 backdrop-blur-xl rounded-3xl overflow-hidden grid lg:grid-cols-2">
          {/*Left side*/}
          <div className="hidden lg:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-violet-900/30 to-black/20">
            <div className="text-7xl mb-6">🪶</div>
            <h1 className="text-5xl text-amber-100 font-cinzel text-center">
              Crafty Craft AI
            </h1>
            <img
              src={robo}
              alt="AI Writing"
              className="mt-10 rounded-2xl w-full max-w-md object-cover"
            />
          </div>

          {/*Right Side*/}
          <div className="flex justify-center text-center pt-8  md:pt-30">
            <form className="w-full max-w-md">
              <h1 className="flex text-4xl font-bold text-amber-100 mb-2 justify-center">
                SignUp Form
              </h1>
              <div className="border border-gray-300 mt-20 rounded-3xl p-10">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 mt-10"
                />
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 mt-10"
                />
                <input
                  type="password"
                  required
                  placeholder="Confirm your password"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 mt-10"
                />
                <button
                  type="submit"
                  className="bg-blue-300 p-2 text-2xl rounded-lg hover:bg-violet-500 mt-10 "
                >
                  Sign up
                </button>
              </div>
              <Link
                to="/login"
                className="flex block mt-6 justify-end text-amber-100 mr-10 hover:text-red-500"
              >
                Back to Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
