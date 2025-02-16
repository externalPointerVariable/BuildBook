import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const projects = [
  { name: "Project 1", code: "console.log('Hello World');", output: "Hello World" },
  { name: "Project 2", code: "function add(a, b) { return a + b; }", output: "Result: 5" },
];

export default function Toggle() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="flex flex-col w-full bg-inherit p-6">
      <div className="flex">
        {projects.map((project) => (
          <button 
            key={project.name}
            className={`px-6 py-2 font-bold rounded-t-2xl ${selectedProject.name === project.name ? "bg-white border-b-4" : "text-orange-400 bg-gray-600"}`} 
            onClick={() => setSelectedProject(project)}>
            {project.name}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 shadow-md mt-4 rounded w-full">
        <div className="bg-gray-200 p-4 rounded shadow-md mb-4">
          <strong>Output:</strong>
          <p className="text-gray-700">{selectedProject.output}</p>
        </div>
        <SyntaxHighlighter language="javascript" style={materialDark} className="rounded">
          {selectedProject.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
