import React from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';
import Project from '../pages/Projects.jsx';
import * as Projects from '../Projects/Index.jsx';
function App() {
  return (
    <>
      {/* <Header />
      <main className='text-center p-4 flex flex-col items-center'>
        <Home />
        <Project />
      </main>
      <Footer /> */}
      <Projects.CurrencyConverter/>
    </>
  )
}

export default App;
