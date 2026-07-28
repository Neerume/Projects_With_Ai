import React from "react";

const StoryCard = ({ story }) => {

  return(
  <div className="w-full max-w-sm mx-auto rounded-xl bg-[#16112c] p-4 h-[420px] flex flex-col">
          <div className="relative">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-52 object-cover rounded-lg"
        />

        <span className="absolute top-45 left-3 bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {story.genre}
        </span>
      </div>
      <h2 className="text-2xl text-gray-300 mt-4">{story.title}</h2>
      <p className="text-gray-300 mt-4">{story.description}</p>
      <p className="text-yellow-400 font-bold mt-auto">by {story.author}</p>
    </div>
  );
}
export default StoryCard;