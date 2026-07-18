import React from 'react';

const navbar = () => {
  return (
    <div className="w-full h-20 justify-between items-center flex bg-transparent text-amber-100 border-b border-yellow-500/20 px-4">
      <div className="flex items-center space-x-2">
        <span className="text-4xl">🪶</span>
        <div>
        <h1 className="text-2xl font-bold" >CraftyCraft AI</h1>
        <p className="text-sm text-white">Where your imaginations can bloom</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 text-xl ">
       <ul className="flex gap-8 text-gray-300 font-medium ">
        <li><a href="#" className="hover:text-yellow-400 transition duration-300 px-4">Home</a></li>
        <li><a href="#" className="hover:text-yellow-400 transition duration-300 px-4">My Stories</a></li>
        <li><a href="#" className="hover:text-yellow-400 transition duration-300 px-4">Create</a></li>
       </ul>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          🌙
          </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
      </div>
    </div>
  )
}

export default navbar;