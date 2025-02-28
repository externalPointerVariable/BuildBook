import React from 'react';
import { Link } from 'react-scroll';
import BuildBookPNG from '../src/assets/BuildBook.png';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4" id="home">
      <img src={BuildBookPNG} alt="BuildBook Logo" className="w-24 h-24 md:w-36 md:h-36 mb-4" />
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
        Welcome to <span className="text-orange-400">BuildBook</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">
        A scrapbook of React projects
      </p>
      <Link to="projects" smooth={true} duration={500}>
        <button className="px-4 py-2 md:px-6 md:py-2 bg-orange-400 text-white font-bold rounded hover:bg-orange-500 transition duration-200">
          View Projects
        </button>
      </Link>
    </div>
  );
}

export default Home;
