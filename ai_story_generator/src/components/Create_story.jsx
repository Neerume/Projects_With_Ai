import React, { useState } from "react";
import BackgroundImage from "../assets/background.png";
import { Castle } from "lucide-react";
import { Mountain } from "lucide-react";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { Orbit } from "lucide-react";
import { Skull } from "lucide-react";
import { CircleAlert } from "lucide-react";
import Robo from "../assets/robo.png";
import surpriseIdeas from "../data/supriseStoryIdea";

const CreateStory = () => {
  const [suggestedIdeas, setSuggestedIdeas] = useState(
    surpriseIdeas.slice(0, 4),
  );
  const [prompt, setPrompt] = useState("");
  const handleSurpriseMe = () => {
    const shuffled = [...surpriseIdeas].sort(() => Math.random() - 0.5);

    setSuggestedIdeas(shuffled.slice(0, 4));
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="min-h-screen bg-black/70 flex justify-center px-6 py-10">
        <div className="w-full grid lg:grid-cols-[70%_30%] items-start">
          {/*Left Side*/}
          <div className="flex flex-col ">
            <div className="flex gap-5 mb-3 justify-center items-center">
              <p className="flex-1 h-px bg-gradient-to-r from-yellow-500/30 via-yellow-500/30 to-yellow-400"></p>
              <h1 className="text-5xl fantasy-font text-amber-100">
                Create Your Story
              </h1>
              <p className="flex-1 h-px bg-gradient-to-l from-yellow-500/30 via-yellow-500/30 to-yellow-400"></p>
            </div>
            <p className="text-gray-300 text-center">
              Fill in the details below and let Ai weave a magical tale for
              you!✨
            </p>

            <div className="flex flex-col w-full h-auto border rounded-xl border-white/20 bg-[#16112c]/80 backdrop-blur-md p-5 mt-5 gap-5">
              <div className="flex text-amber-100 justify-between items-center">
                <h3 className="fantasy-font text-lg">Your Idea✨</h3>
                <p className="flex">0/500</p>
              </div>
              <textarea
                className="bg-transparent text-gray-300 placeholder:text-gray-500 focus:outline-none border border-violet-300 shadow-lg rounded-lg p-3 w-full h-40"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your story idea here... "
              />
              <h3 className="fantasy-font text-lg text-amber-100">
                Choose a Genre🎭
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                <div className="flex flex-col items-center border border-violet-400 shadow-lg hover:bg-violet-400/20 transition rounded-lg p-3 gap-2 cursor-pointer">
                  <Castle color="#eb7676" />
                  <h4 className="text-amber-100">Fantasy</h4>
                </div>
                <div className="flex flex-col items-center border border-violet-400 shadow-lg hover:bg-violet-400/20 transition rounded-lg p-3 gap-2 cursor-pointer">
                  <Mountain color="#eb7676" />
                  <h4 className="text-amber-100">Adventure</h4>
                </div>
                <div className="flex flex-col items-center border border-violet-400 shadow-lg hover:bg-violet-400/20 transition rounded-lg p-3 gap-2 cursor-pointer">
                  <Search color="#eb7676" />
                  <h4 className="text-amber-100">Mystery</h4>
                </div>
                <div className="flex flex-col items-center border border-violet-400 shadow-lg hover:bg-violet-400/20 transition rounded-lg p-3 gap-2 cursor-pointer">
                  <Heart color="#eb7676" />
                  <h4 className="text-amber-100">Romance</h4>
                </div>
                <div className="flex flex-col items-center border border-violet-400 shadow-lg hover:bg-violet-400/20 transition rounded-lg p-3 gap-2 cursor-pointer">
                  <Orbit color="#eb7676" />
                  <h4 className="text-amber-100">Sci-Fi</h4>
                </div>
                <div className="flex flex-col items-center border border-violet-400 shadow-lg hover:bg-violet-400/20 transition rounded-lg p-3 gap-2 cursor-pointer">
                  <Skull color="#eb7676" />
                  <h4 className="text-amber-100">Horror</h4>
                </div>
              </div>
              {/* Tone and Length */}
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col w-full md:w-1/2">
                  <div className="flex gap-2 items-center justify-between md:justify-start">
                    <h3 className="fantasy-font text-lg text-amber-100">
                      Tone
                    </h3>
                    <CircleAlert color="#577696" />
                  </div>
                  <select className="bg-transparent text-gray-300 focus:outline-none border border-violet-300 shadow-lg rounded-lg p-4 w-full mt-3">
                    <option value="dark">☠️Dark</option>
                    <option value="wholesome">😊Wholesome</option>
                    <option value="epic">🗡️Epic</option>
                    <option value="humorous">🤣Humorous</option>
                    <option value="light">💔Emotional</option>
                    <option value="light">🤨Suspenseful</option>
                  </select>
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                  <div className="flex gap-2 items-center justify-between md:justify-start">
                    <h3 className="fantasy-font text-lg text-amber-100">
                      Length
                    </h3>
                    <CircleAlert color="#577696" />
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center border border-violet-400 shadow-lg hover:bg-violet-400/20 transition rounded-lg p-3 gap-2 cursor-pointer mt-3">
                      <h4 className="text-amber-100">Short</h4>
                      <p className="text-gray-400 text-sm">200-400 words</p>
                    </div>
                    <div className="flex flex-col items-center border border-violet-400 shadow-lg hover:bg-violet-400/20 transition rounded-lg p-3 gap-2 cursor-pointer mt-3">
                      <h4 className="text-amber-100">Medium</h4>
                      <p className="text-gray-400 text-sm">500-800 words</p>
                    </div>
                    <div className="flex flex-col items-center border border-violet-400 shadow-lg hover:bg-violet-400/20 transition rounded-lg p-3 gap-2 cursor-pointer mt-3">
                      <h4 className="text-amber-100">Large</h4>
                      <p className="text-gray-400 text-sm">800+ words</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Writing Style and Reading Level */}
              <div className="flex flex-col md:flex-row gap-5 mt-2">
                <div className="flex flex-col w-full md:w-1/2">
                  <div className="flex gap-2 items-center justify-between md:justify-start">
                    <h3 className="fantasy-font text-lg text-amber-100">
                      Writing Style
                    </h3>
                    <CircleAlert color="#577696" />
                  </div>
                  <select className="bg-transparent text-gray-300 focus:outline-none border border-violet-300 shadow-lg rounded-lg p-4 w-full mt-3">
                    <option value="narrative">📖 Narrative</option>
                    <option value="fairy-tale">🧚 Fairy Tale</option>
                    <option value="screenplay">🎬 Screenplay</option>
                    <option value="novel">📜 Novel</option>
                    <option value="poetic">✨ Poetic</option>
                    <option value="fast-paced">⚡ Fast-Paced</option>
                  </select>
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <div className="flex gap-2 items-center justify-between md:justify-start">
                    <h3 className="fantasy-font text-lg text-amber-100">
                      Reading Level
                    </h3>
                    <CircleAlert color="#577696" />
                  </div>
                  <select className="bg-transparent text-gray-300 focus:outline-none border border-violet-300 shadow-lg rounded-lg p-4 w-full mt-3">
                    <option value="kids">🧒 Kids (Ages 6–10)</option>
                    <option value="young">👦 Young Reader (Ages 11–14)</option>
                    <option value="teen">📚 Teen (Ages 15–18)</option>
                    <option value="adult">🎓 Adult</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="bg-violet-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition mt-5 justify-center items-center flex mx-auto text-2xl fantasy-font gap-2">
              ✨Generate Story
            </button>
          </div>
          {/*Right Side*/}
          <div className="border border-white/20 bg-[#16112c]/80 backdrop-blur-md p-5 gap-5 rounded-xl md:mt-26 mt-10 mx-10 min-h-fit">
            <div className="flex ">
              <div className="flex flex-col gap-3 text-gray-300">
                <h1 className="justify-start flex">✨AI Assitant</h1>
                <p>
                  Need help getting started? Here are some tips to create some
                  amazing stories!
                </p>
              </div>

              <img src={Robo} alt="Ai Img" className="w-[170px]" />
            </div>
            <ul className="flex flex-col -mt-5 gap-3 text-gray-300">
              <li>🎯Be specific with your idea.</li>
              <li>📝Choose a genre that fits your story.</li>
              <li>🎨Develop interesting characters.</li>
              <li>📖Create a compelling plot.</li>
              <li>✏️Write in a clear and engaging style.</li>
            </ul>

            {/* Surprise Ideas */}

            <h2 className="mt-8 text-lg">✨ Try these ideas</h2>

            <div className="flex flex-col gap-3 mt-4">
              {suggestedIdeas.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPrompt(item.idea)}
                  className="flex items-center gap-4 border border-white/10 bg-[#16112c] p-3 rounded-lg text-left hover:border-purple-400 transition"
                >
                  <span className="text-2xl">{item.emoji}</span>

                  <span className="text-gray-300">{item.idea}</span>
                </button>
              ))}
            </div>

            {/* Surprise Button */}

            <button
              onClick={handleSurpriseMe}
              className="w-full mt-6 bg-purple-700 hover:bg-purple-600 p-3 rounded-lg"
            >
              ✨ Surprise Me ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
