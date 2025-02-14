function Home() {
    return (
      <div className="flex flex-col items-center justify-center mt-11 h-screen" id="home">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-orange-400">BuildBook</span>
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          A scrapbook of React projects
        </p>
        <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get Started</h2>
          <p className="text-md text-gray-600 mb-4">Browse through a collection of React projects.</p>
          <a href="/projects" className="inline-block px-6 py-2 bg-orange-400 text-white font-bold rounded hover:bg-orange-500 transition duration-200">
            View Projects
          </a>
        </div>
      </div>
    );
  }
  
  export default Home;
  