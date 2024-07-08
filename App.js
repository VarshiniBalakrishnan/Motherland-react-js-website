import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Infrastructure from './components/Infrastructure';
import Products from './components/Products';
import Quality from './components/Quality';
import WindEnergy from './components/WindEnergy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Infrastructure />
      <Products />
      <Quality />
      <WindEnergy />
      <Footer />
    </div>
  );
}

export default App;
