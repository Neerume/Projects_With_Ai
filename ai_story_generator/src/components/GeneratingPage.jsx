import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GeneratingPage = () => {
  const navigate = useNavigate();

  // PROGRESS STATE
  const [progress, setProgress] = useState(0);

  // GENERATION STEPS
  const steps = [
    {
      title: "Understanding",
      subtitle: "Your Idea",
    },
    {
      title: "Building the",
      subtitle: "World",
    },
    {
      title: "Creating",
      subtitle: "Characters",
    },
    {
      title: "Weaving the",
      subtitle: "Story",
    },
    {
      title: "Adding Magic",
      subtitle: "Finishing Touch",
    },
  ];

  // STATUS MESSAGES
  const statusMessages = [
    "Understanding your idea...",
    "Building your magical world...",
    "Creating your characters...",
    "Weaving your story...",
    "Adding magical finishing touches...",
  ];

  // FIND CURRENT STEP
  const currentStep = Math.min(Math.floor(progress / 20), steps.length - 1);

  // INCREASE PROGRESS
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress >= 100) {
          clearInterval(timer);
          return 100;
        }

        return previousProgress + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // GO TO GENERATED STORY
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        navigate("/generated-story");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [progress, navigate]);

  return (
    <div className="min-h-screen bg-[#07051a] text-white px-4 py-8">
      {/* HEADER */}

      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4">
          <div className="hidden sm:block w-20 h-px bg-purple-500/50"></div>

          <h1 className="text-3xl md:text-4xl font-serif text-yellow-200">
            ✦ Crafting Your Story ✦
          </h1>

          <div className="hidden sm:block w-20 h-px bg-purple-500/50"></div>
        </div>

        <p className="text-gray-400 mt-2">
          Our AI is weaving magic into your ideas... ✨
        </p>
      </div>

      {/* MAIN GRID */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[70%_30%] gap-5">
        {/* LEFT SIDE */}

        <div className="border border-purple-500/30 rounded-xl bg-[#0d0a24]/90 p-5">
          {/* STORY GENERATION TITLE */}

          <div className="mb-5">
            <h2 className="text-xl font-serif text-yellow-200">
              ✨ Generating Your Story
            </h2>

            <p className="text-sm text-gray-400 mt-2 max-w-xl">
              Please wait while our AI weaves your imagination into a magical
              story...
            </p>
          </div>

          {/* ================================= */}
          {/* IMAGE */}
          {/* ================================= */}

          <div className="w-full h-[300px] md:h-[380px] rounded-xl overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-black">
            <img
              src="/generating-story.png"
              alt="AI generating a fantasy story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ================================= */}
          {/* STATUS */}
          {/* ================================= */}

          <div className="text-center mt-5">
            <p className="text-purple-200 text-lg font-serif">
              {statusMessages[currentStep]} ✨
            </p>
          </div>

          {/* ================================= */}
          {/* PROGRESS BAR */}
          {/* ================================= */}

          <div className="flex items-center gap-3 mt-4">
            <div className="flex-1 h-4 rounded-full bg-[#17132d] border border-purple-500/30 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-full transition-all duration-200"
                style={{
                  width: `${progress}%`,
                }}
              ></div>
            </div>

            <span className="text-sm text-gray-300 w-10">{progress}%</span>
          </div>

          {/* ================================= */}
          {/* GENERATION STEPS */}
          {/* ================================= */}

          <div className="grid grid-cols-5 gap-2 mt-7">
            {steps.map((step, index) => {
              const stepCompleted = index < currentStep;

              const stepActive = index === currentStep;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* CIRCLE */}

                  <div
                    className={`
                      w-10 h-10
                      rounded-full
                      flex items-center justify-center
                      border
                      transition-all duration-500

                      ${
                        stepCompleted
                          ? "bg-purple-600 border-purple-400"
                          : stepActive
                            ? "bg-purple-600/30 border-purple-400 shadow-lg shadow-purple-500/40 scale-110"
                            : "bg-[#111027] border-purple-500/20"
                      }
                    `}
                  >
                    {stepCompleted ? (
                      <span className="text-white">✓</span>
                    ) : stepActive ? (
                      <span className="text-yellow-200">✦</span>
                    ) : (
                      <span className="text-gray-500">{index + 1}</span>
                    )}
                  </div>

                  {/* CONNECTING LINE */}

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute"></div>
                  )}

                  {/* TEXT */}

                  <p
                    className={`
                      text-xs mt-3
                      ${
                        stepActive
                          ? "text-purple-300"
                          : stepCompleted
                            ? "text-gray-300"
                            : "text-gray-500"
                      }
                    `}
                  >
                    {step.title}
                    <br />
                    {step.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ================================= */}
          {/* TIP CARD */}
          {/* ================================= */}

          <div className="mt-8 border border-purple-500/30 rounded-lg p-4 bg-[#110d2b]">
            <p className="text-sm text-gray-300">
              💡 <span className="text-yellow-200">Tip:</span> The more details
              you provided, the more unique and exciting your story will be!
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Sit back, relax, and let the magic happen. ✨
            </p>
          </div>

          {/* ================================= */}
          {/* BOTTOM MESSAGE */}
          {/* ================================= */}

          <div className="mt-5 border border-purple-500/20 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-400">
              ✨ Good things take time... Just like the best stories.
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Your story will be ready in just a moment!
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-5">
          {/* ================================= */}
          {/* STORY DETAILS */}
          {/* ================================= */}

          <div className="border border-purple-500/30 rounded-xl bg-[#0d0a24]/90 p-5">
            <h2 className="text-lg font-serif text-yellow-200 border-b border-purple-500/20 pb-4">
              ✨ Your Story Details
            </h2>

            <div className="space-y-5 mt-5">
              {/* GENRE */}

              <div className="flex justify-between items-center">
                <span className="text-gray-400">🏰 Genre</span>

                <span className="text-sm text-gray-200">Fantasy</span>
              </div>

              {/* TONE */}

              <div className="flex justify-between items-center">
                <span className="text-gray-400">🌙 Tone</span>

                <span className="text-sm text-gray-200">Dark</span>
              </div>

              {/* LENGTH */}

              <div className="flex justify-between items-center">
                <span className="text-gray-400">⌛ Length</span>

                <span className="text-sm text-gray-200">Medium</span>
              </div>

              {/* STYLE */}

              <div className="flex justify-between items-center">
                <span className="text-gray-400">🪶 Style</span>

                <span className="text-sm text-gray-200">Narrative</span>
              </div>

              {/* READING LEVEL */}

              <div className="flex justify-between items-center">
                <span className="text-gray-400">📚 Reading Level</span>

                <span className="text-sm text-gray-200">Teen</span>
              </div>

              {/* CHARACTER */}

              <div className="flex justify-between items-center gap-4">
                <span className="text-gray-400">🧙 Character</span>

                <span className="text-sm text-gray-200 text-right">
                  A brave knight
                </span>
              </div>

              {/* WORLD */}

              <div className="flex justify-between items-center gap-4">
                <span className="text-gray-400">🌎 World</span>

                <span className="text-sm text-gray-200 text-right">
                  A floating island
                </span>
              </div>
            </div>
          </div>

          {/* ================================= */}
          {/* QUOTE CARD */}
          {/* ================================= */}

          <div className="border border-purple-500/30 rounded-xl bg-gradient-to-br from-[#171044] to-[#0d0a24] p-7 text-center">
            <div className="text-5xl text-purple-400">“</div>

            <p className="text-gray-300 italic font-serif leading-relaxed">
              Every great story begins
              <br />
              with a single spark
              <br />
              of imagination.
            </p>

            <div className="text-purple-400 mt-4">─── ✦ ───</div>
          </div>

          {/* ================================= */}
          {/* INSPIRATION CARD */}
          {/* ================================= */}

          <div className="border border-purple-500/30 rounded-xl bg-[#0d0a24]/90 p-5">
            <h2 className="text-lg font-serif text-yellow-200">
              ✨ Need Inspiration?
            </h2>

            <p className="text-sm text-gray-400 mt-3">
              Explore more ideas to get inspired.
            </p>

            <button
              className="
                w-full
                mt-5
                py-3
                rounded-lg
                bg-gradient-to-r
                from-purple-700
                to-fuchsia-600
                hover:from-purple-600
                hover:to-fuchsia-500
                transition
                shadow-lg
                shadow-purple-900/40
              "
            >
              Surprise Me ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratingPage;
