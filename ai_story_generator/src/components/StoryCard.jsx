import React from "react";

const StoryCard = ({ story }) => {

  return(
    <div className="rounded-lg p-3 shadow-sm w-50 h-[300px] flex flex-col">
      <div className="relative">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-52 object-cover rounded-lg"
        />

        <span className="absolute top-3 left-3 bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {story.genre}
        </span>
      </div>
      <h2 className="font-semibold text-lg mt-2">{story.title}</h2>
      <p className="text-gray-300 mt-2">{story.description}</p>
      <p className="text-yellow-400 font-bold">by {story.author}</p>
    </div>
  );
}
export default StoryCard;