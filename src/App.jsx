import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; // Assume these components are defined
import About from './About';
m
import Projects from './Projects';

function App() {
  return (
    <div>
      <nav>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;