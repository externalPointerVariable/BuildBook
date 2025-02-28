import { useState } from "react";
import * as project from "../Projects/Index.jsx";

const extractProjectScript = (component) => {
  return component.toString().split('return')[0].split('').slice(15).join('');
};

const projects = [
  { name: "Project 1", projectScript: extractProjectScript(project.CustomCounter), projectOut: <project.CustomCounter /> },
  { name: "Project 2", projectScript: extractProjectScript(project.ColorChanger), projectOut: <project.ColorChanger /> },
  { name: "Project 3", projectScript: extractProjectScript(project.PassWordGenerator), projectOut: <project.PassWordGenerator /> },
  { name: "Project 4", projectScript: extractProjectScript(project.CurrencyConverter), projectOut: <project.CurrencyConverter /> },
];

export default function Toggle() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="flex flex-col w-full bg-inherit p-4 md:p-6 justify-around">
      <div className="flex flex-wrap justify-center mb-4">
        {projects.map((project) => (
          <button
            key={project.name}
            className={`px-4 py-2 md:px-6 md:py-2 font-bold rounded md:rounded-2xl transition duration-300 ease-in-out m-1 md:m-2 ${selectedProject.name === project.name ? "bg-white shadow-black" : "text-orange-400 bg-gray-800"}`}
            onClick={() => setSelectedProject(project)}>
            {project.name}
          </button>
        ))}
      </div>

      <div className="bg-white p-4 md:p-6 shadow-md mt-4 rounded w-full transition duration-300 ease-in-out">
        <div className="bg-gray-200 p-4 rounded shadow-md mb-4">
          {selectedProject.projectOut}
        </div>
      </div>
    </div>
  );
}
