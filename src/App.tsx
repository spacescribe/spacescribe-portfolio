// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router'; // Correct import from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';  // Import Footer
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetails from './components/ProjectDetails'; // Import ProjectDetails

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />  
    </Router>
  );
}

export default App;
