import React from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';


function App() {

  return (
    <>
    <Header/>
      <main className='bg-gradient-to-r from-blue-100 to-blue-200 text-center p-4 h-screen'>
        <Home/>
      </main>
    <Footer/>
    </>
  )
}

export default App
