import React from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';
import Project from '../pages/Projects.jsx';
import PasswordGenerator from '../Projects/PassWordGenerator.jsx';

function App() {
  return (
    <>
      {/* <Header />
      <main className='text-center p-4 flex flex-col items-center'>
        <Home />
        <Project />
      </main>
      <Footer /> */}
      <PasswordGenerator />
    </>
  )
}

export default App;
