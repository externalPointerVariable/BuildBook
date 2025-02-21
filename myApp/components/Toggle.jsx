import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const projects = [
  { name: "Project 1", projectScript: "console.log('Hello World');", projectOut: <h1>This is project</h1> },
  { name: "Project 2", projectScript: "function add(a, b) { return a + b; }", projectOut: <h1>This is project</h1> }
];

export default function Toggle() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    document.getElementById("cpy-button").innerText = "Copied!";
  };

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
          <strong>{selectedProject.name}</strong>
          {selectedProject.projectUi}
        </div>
        <div className="relative">
          <SyntaxHighlighter language="javascript" style={materialDark} className="rounded">
            {selectedProject.projectScript}
          </SyntaxHighlighter>
          <button onClick={() => copyToClipboard(selectedProject.projectScript)} className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out" id="cpy-button">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
