import React from 'react';
import Navbar from '../src/pageWrapper/navbar';
import Navbar2 from './pageWrapper/navbar2';
import About from './pageWrapper/about';
import Services from './pageWrapper/services';
import Skills from './pageWrapper/skills';
import Projects from './pageWrapper/projects';
import Contact from './pageWrapper/contact';
import Navbar3 from './pageWrapper/nabvar3'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navbar2/>
      <Navbar3/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
