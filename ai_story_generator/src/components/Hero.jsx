import React, { useState } from "react";
import BackgroundImage from "../assets/background.png";
import Robot from "../assets/robot.png";
import { BookOpen } from "lucide-react";
import { Users } from "lucide-react";
import "../index.css";
import { Sparkles } from "lucide-react";
import { PencilSparkles } from "lucide-react";
import { PenTool } from "lucide-react";
import stories from "../data/stories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StoryCard from "./StoryCard";

const Hero = () => {
  const [prompt, setPrompt] = useState("");

  const featuredStories = stories.filter((story) => story.featured);

  return (
    <div>
      {/* Text Box*/}
      <div className="flex md:gap-20 gap-9">
        <div className="md:min-h-screen justify-center md:px-20 md:py-20 px-10 py-10">
          <h1 className="md:text-7xl text-4xl text-amber-100 fantasy-font">
            Turn Your
            <br />
            Imagination
            <br />
            Into{" "}
            <span className="text-violet-400 md:text-8xl text-6xl font-bold">
              Stories
            </span>
          </h1>

          <p className="text-gray-300 mt-6 max-w-xl md:text-xl text-sm">
            Describe your idea and let AI weave a magical story for you.
          </p>
          <div className="relative w-full max-w-2xl mx-auto md:mb-10 md:mt-7 mb-5 mt-5">
            <textarea
              placeholder="🖋️✨ e.g. A brave knight falls in love with a princess"
              className="w-full h-32 px-6 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder:text-gray-300 outline-none resize-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              maxLength={500}
            />
            <span className="absolute bottom-4 right-5 text-sm text-gray-400">
              {prompt.length}/ 500{" "}
            </span>
          </div>
          <div className="-mt-5 justify-start flex gap-4 md:gap-6">
            <button className=" bg-violet-500 hover:bg-violet-400 transition px-5 py-2 rounded-lg text-white">
              ✨ Generate Story
            </button>
            <button className="bg-transparent border border-yellow-500/20 hover:border-yellow-400 transition px-5 py-2 rounded-lg text-white">
              📖 Surprise Me
            </button>
          </div>
        </div>

        <div className="md:block hidden">
          <img
            src={Robot}
            alt="Robot"
            className="md:w-[350px] max-w-md mx-auto w-[200px]"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        <div className="w-full lg:w-1/2">
          {/*Left Side*/}
          <div className="flex md:gap-8 gap-5 md:px-10 px-2 border rounded-lg py-4 bg-transparent backdrop-blur-md border-white/20 md:w-full md:max-w-2xl max-w-1xls mx-auto md:ml-10 ml-3 md:-mt-5 mt-1">
            {/* Stats */}

            <div className="flex md:gap-3 gap-2">
              <div className="md:w-14 md:h-12 w-10 h-8 rounded-full bg-violet-900 flex justify-center hexagon items-center">
                <BookOpen className="text-yellow-300 w-5 h-5" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-yellow-300 text-2xl">10K+</span>
                <p className="text-gray-300 text-sm">Stories Generated</p>
              </div>
            </div>

            <div className="flex md:gap-3 gap-2">
              <div className="md:w-14 md:h-12 w-10 h-8 rounded-full bg-violet-900 flex justify-center hexagon items-center">
                <Users className="text-yellow-300 w-5 h-5" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-yellow-300 text-2xl">5K+</span>
                <p className="text-gray-300 text-sm">Happy Writers</p>
              </div>
            </div>

            <div className="flex md:gap-3 gap-2">
              <div className="md:w-14 md:h-12 w-10 h-8  rounded-full bg-violet-900 flex justify-center hexagon items-center">
                <Sparkles className="text-yellow-300 w-5 h-5" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-yellow-300 text-2xl">50K+</span>
                <p className="text-gray-300 text-sm">Unique Genres</p>
              </div>
            </div>

            <div className="flex md:gap-3 gap-2">
              <div className="md:w-14 md:h-12 w-10 h-8  rounded-full bg-violet-900 flex justify-center hexagon items-center">
                <PencilSparkles className="text-yellow-300 w-5 h-5" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-yellow-300 text-2xl">100%</span>
                <p className="text-gray-300 text-sm">AI powered magic</p>
              </div>
            </div>
          </div>

          {/*How it works*/}
          <div className="md:mt-10 md:mb-10 md:ml-10 ml-3 mb-5 mt-5 max-w-2xl">
            <div className="flex items-center gap-2 justify-center ">
              <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/30 via-yellow-500/30 to-yellow-400"></div>
              <p className="text-white text-2xl fantasy-font">How it works</p>
              <div className="flex-1 gap-2 h-px bg-gradient-to-l from-yellow-500/30 via-yellow-500/30 to-yellow-400"></div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-5 gap-3 mt-5 md:items-start items-center">
              <div className="flex gap-3">
                <div className="flex w-15 h-13 bg-violet-800 hexagon justify-center items-center">
                  <PenTool className="text-yellow-300 w-8 h-8" />
                </div>
                <div className="flex flex-col md:gap-2 gap-1">
                  <p className="text-yellow-300 text-2xl">
                    1<br />
                    Describe
                  </p>
                  <p className="text-gray-300 text-sm">
                    Share your ideas in a few words
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex w-15 h-13 bg-violet-800 hexagon justify-center items-center">
                  <Sparkles className="text-yellow-300 w-8 h-8" />
                </div>
                <div className="flex flex-col md:gap-2 gap-1">
                  <p className="text-yellow-300 text-2xl">
                    2<br />
                    AI Weaves
                  </p>
                  <p className="text-gray-300 text-sm">
                    Our AI crafts a unique story just for you.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex w-15 h-13 bg-violet-800 hexagon justify-center items-center">
                  <BookOpen className="text-yellow-300 w-8 h-8" />
                </div>
                <div className="flex flex-col md:gap-2 gap-1">
                  <p className="text-yellow-300 text-2xl">
                    3<br />
                    Read and Enjoy
                  </p>
                  <p className="text-gray-300 text-sm">
                    Dive into your story and share it.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5 md:mt-10 border border-yellow-500/20 bg-blue/10 backdrop-blur-md rounded-lg md:py-7 py-4 md:px-10 px-5 items-center gap-5 md:gap-10">
              <p className="flex-1 h-px bg-gradient-to-r from-yellow-500/30 via-yellow-500/30 to-yellow-400"></p>
              <p className="text-yellow-200 text-[20px] text-center noto-serif">
                Every great story begins with a single idea.
                <br />
                Let's create magic together
              </p>
              <p className="flex-1 h-px bg-gradient-to-l from-yellow-500/30 via-yellow-500/30 to-yellow-400"></p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 md:px-10 px-15 items-start">
          <div className="flex items-center justify-between mb-4 max-w-2xl mx-auto">
            <h3 className="text-yellow-300 text-xl fantasy-font flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Featured Stories
            </h3>
            <a
              href="#"
              className="text-sm text-violet-300 hover:text-violet-200 transition"
            >
              View all →
            </a>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={20}
            className="storySwiper w-full"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 2 },
            }}
          >
            {featuredStories.map((story) => (
              <SwiperSlide key={story.id}>
                <StoryCard story={story} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
