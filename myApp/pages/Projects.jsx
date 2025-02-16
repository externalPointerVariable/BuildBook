import React from 'react';
import Toggle from '../components/Toggle.jsx';

function Project() {
  return (
    <div className="flex flex-col items-center justify-center h-auto mb-14 bg-orange-300 rounded pt-4 pb-8 px-4 w-full" id="projects">
      <h2 className="text-5xl font-mono text-gray-800 mb-4">Projects</h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Explore a collection of innovative and creative projects.
      </p>
      <Toggle />
    </div>
  );
}

export default Project;
