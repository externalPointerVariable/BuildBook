function Home() {
    return (
      <div className="flex flex-col items-center justify-center mt-11 h-screen" id="home">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-orange-400">BuildBook</span>
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          A scrapbook of React projects
        </p>
        <a href="/projects" className="inline-block px-6 py-2 bg-orange-400 text-white font-bold rounded hover:bg-orange-500 transition duration-200">
            View Projects
        </a>
        </div>
    );
  }
  
  export default Home;
  