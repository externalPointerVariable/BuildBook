import React from 'react';
import Sidebar from '../components/Sidebar.jsx';

function Project() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-mono text-gray-800 mb-4">Projects</h2>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Explore a collection of innovative and creative projects.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start p-6 bg-white shadow-lg rounded-lg mt-4">
        <Sidebar />
        <div className="flex-grow p-6">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Project List</h3>
          <p className="text-md text-gray-600">
            Detailed descriptions and links to the projects will be displayed here.
          </p>
        </div>
      </div>
    </>
  );
}

export default Project;
