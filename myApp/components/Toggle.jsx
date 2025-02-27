import { useState } from "react";
import * as project from "../Projects/Index.jsx";

const projects = [
  { name: "Project 1", projectScript: project.CustomCounter.toString().split('return')[0].split('').slice(15).join(''), projectOut: <project.CustomCounter /> },
  { name: "Project 2", projectScript: project.ColorChanger.toString().split('return')[0].split('').slice(15).join(''), projectOut: <project.ColorChanger /> },
  { name: "Project 3", projectScript: project.PassWordGenerator.toString().split('return')[0].split('').slice(15).join(''), projectOut: <project.PassWordGenerator /> },
  { name: "Project 4", projectScript: project.CurrencyConverter.toString().split('return')[0].split('').slice(15).join(''), projectOut: <project.CurrencyConverter /> },
];

export default function Toggle() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);


  return (
    <div className="flex flex-col w-full bg-inherit p-6 justify-around">
      <div className="flex -mb-4.5">
        {projects.map((project) => (
          <button
            key={project.name}
            className={`px-6 py-2 font-bold rounded-t-2xl transition duration-300 ease-in-out ${selectedProject.name === project.name ? "bg-white shadow-black" : "text-orange-400 bg-gray-800"}`}
            onClick={() => setSelectedProject(project)}>
            {project.name}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 shadow-md mt-4 rounded w-full transition duration-300 ease-in-out">
        <div className="bg-gray-200 p-4 rounded shadow-md mb-4">
          {selectedProject.projectOut}
        </div>
      </div>
    </div>
  );
}
