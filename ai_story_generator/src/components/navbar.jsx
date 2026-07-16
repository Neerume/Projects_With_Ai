import React from 'react';

const navbar = () => {
  return (
    <div className="w-full h-20 justify-between items-center flex bg-gray-800 text-blue-500 px-4">
      <div className="flex items-center space-x-2">
        <img src="" alt="logo" />
        <div>
        <h1 className="text-2xl font-bold" >CraftyCraft AI</h1>
        <p className="text-sm text-white">Where your imaginations can bloom</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
       <ul className="flex space-x-10 text-white">
        <li><a href="#" className="hover:text-blue-300">Home</a></li>
        <li><a href="#" className="hover:text-blue-300">My Stories</a></li>
        <li><a href="#" className="hover:text-blue-300">Create</a></li>
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