import React from 'react';
import Sidebar from '../components/Sidebar.jsx';

function Project() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-auto mb-7" id="projects">
        <h2 className="text-5xl font-mono text-gray-800 mb-4">Projects</h2>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Explore a collection of innovative and creative projects.
        </p>
        <Sidebar/>
      </div>
    </>
  );
}

export default Project;
