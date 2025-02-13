import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header rounded-b-lg bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex flex-col md:flex-row items-center justify-between shadow-lg sticky top-0">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="text-2xl font-semibold text-orange-400 tracking-wide font-mono">
          <a href="/">
            BuildBook
          </a>
        </div>
        <button
          className="text-white md:hidden focus:outline-none transition-transform transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-45' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <nav className={`transition-all duration-300 ease-in-out overflow-hidden flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 ${isOpen ? 'max-h-screen' : 'max-h-0 md:max-h-screen'}`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 font-mono text-lg">
          <li className="text-white hover:text-orange-400 transition duration-200">
            <a href="/">
              Home
            </a>
          </li>
          <li className="text-white hover:text-orange-400 transition duration-200">
            <a href="/projects">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
