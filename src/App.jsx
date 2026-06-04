import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Reviews from './components/Reviws';
import Footer from './components/Footer';
import Gallery from './components/Gallery'
function App(){
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery/>
      <Feature />
      <Reviews />
      <Footer />
    </>
  );
}

export default App