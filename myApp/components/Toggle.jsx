import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const projects = [
  { name: "Project 1", code: "console.log('Hello World');", output: "Hello World" },
  { name: "Project 2", code: "function add(a, b) { return a + b; }", output: "Result: 5" },
];

export default function Toggle() {
  const [activeTab, setActiveTab] = useState("Standard Plan");
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-6">
      <div className="flex border-b-2 border-gray-300">
        <button 
          className={`px-6 py-2 font-bold ${activeTab === "Standard Plan" ? "bg-white border-b-4 border-green-500" : "text-gray-500"}`} 
          onClick={() => setActiveTab("Standard Plan")}>
          Standard Plan
        </button>
        <button 
          className={`px-6 py-2 font-bold ${activeTab === "Customized Plan" ? "bg-white border-b-4 border-green-500" : "text-gray-500"}`} 
          onClick={() => setActiveTab("Customized Plan")}>
          Customized Plan
        </button>
      </div>
      <div className="flex-1 bg-white p-6 shadow-md mt-4 rounded">
        {activeTab === "Standard Plan" ? (
          <>
            <h2 className="text-xl font-bold mb-2">{selectedProject.name}</h2>
            <div className="bg-gray-200 p-4 rounded shadow-md mb-4">
              <strong>Output:</strong>
              <p className="text-gray-700">{selectedProject.output}</p>
            </div>
            <SyntaxHighlighter language="javascript" style={materialDark} className="rounded">
              {selectedProject.code}
            </SyntaxHighlighter>
          </>
        ) : (
          <div className="text-gray-700 text-lg">Customized Plan content goes here...</div>
        )}
      </div>
    </div>
  );
}
