import React from 'react';
import { Link } from 'react-scroll';
import BuildBookPNG from '../src/assets/BuildBook.png';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen" id="home">
        <img src={BuildBookPNG} alt="BuildBook Logo" className="inline-block w-36 h-36 mr-2" />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Welcome to <span className="text-orange-400">BuildBook</span>
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        A scrapbook of React projects
      </p>
      <Link to="projects" smooth={true} duration={500}>
        <button className="inline-block px-6 py-2 bg-orange-400 text-white font-bold rounded hover:bg-orange-500 transition duration-200">
          View Projects
        </button>
      </Link>
    </div>
  );
}

export default Home;
