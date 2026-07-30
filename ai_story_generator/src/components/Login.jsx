import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/background.png"; // Change this to your image
import robo from "../assets/loginrobo.png";

const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="min-h-screen bg-black/70 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-6xl bg-[#16112c]/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
          {/* Left Side */}
          <div className="hidden lg:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-violet-900/30 to-black/20">
            <div className="text-7xl mb-6">🪶</div>

            <h1 className="text-5xl font-bold text-amber-100 font-cinzel text-center">
              CraftyCraft AI
            </h1>

            <p className="text-gray-300 text-center mt-6 leading-8 text-lg">
              Continue your magical writing journey.
              <br />
              Turn your imagination into unforgettable stories.
            </p>

            <img
              src={robo}
              alt="AI Writing"
              className="mt-10 rounded-2xl w-full max-w-md object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-8 md:p-14">
            <form className="w-full max-w-md">
              <h2 className="text-4xl font-bold text-amber-100 mb-2">
                Welcome Back
              </h2>

              <p className="text-gray-400 mb-8">
                Sign in to continue creating stories.
              </p>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl bg-[#221b3d] border border-yellow-500/20 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
                />
              </div>

              {/* Password */}
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl bg-[#221b3d] border border-yellow-500/20 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
                />
              </div>

              {/* Remember */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember" className="text-gray-300 text-sm">
                    Remember me
                  </label>
                </div>

                <button
                  type="button"
                  className="text-sm text-violet-400 hover:text-violet-300"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-500 transition rounded-xl py-3 text-white font-semibold"
              >
                ✨ Sign In
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-gray-700"></div>
                <span className="text-gray-400">OR</span>
                <div className="flex-1 h-px bg-gray-700"></div>
              </div>

              {/* Google */}
              <button
                type="button"
                className="w-full border border-gray-700 hover:border-gray-500 rounded-xl py-3 text-white flex items-center justify-center gap-3 mb-4 transition"
              >
                🌐 Continue with Google
              </button>

              {/* Facebook */}
              <button
                type="button"
                className="w-full border border-gray-700 hover:border-gray-500 rounded-xl py-3 text-white flex items-center justify-center gap-3 transition"
              >
                📘 Continue with Facebook
              </button>

              {/* Register */}
              <p className="text-center text-gray-400 mt-8">
                Don't have an account?
                <Link
                  to="/register"
                  className="text-violet-400 hover:text-violet-300"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
