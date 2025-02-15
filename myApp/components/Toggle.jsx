import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const projects = [
  { name: "Project 1", code: "console.log('Hello World');", output: "Hello World" },
  { name: "Project 2", code: "function add(a, b) { return a + b; }", output: "Result: 5" },
];

function Toggle() {
  const [open, setOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white p-4 transition-all duration-300 ${open ? 'w-64' : 'w-16'}`}>
        <button onClick={() => setOpen(!open)} className="mb-4 p-2 bg-blue-500 rounded">
          {open ? "Close" : "Open"}
        </button>
        {open && (
          <ul>
            {projects.map((project) => (
              <li key={project.name} className="cursor-pointer p-2 hover:bg-gray-700" onClick={() => setSelectedProject(project)}>
                {project.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-2">{selectedProject.name}</h2>
        <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
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

export default Toggle;