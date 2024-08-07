import './App.css';
import {HashRouter, Route, Routes, Link} from 'react-router-dom';
import HomePage from './component/Home.js';
import About from './component/About.js';
import Contact from './component/Contact.js';
import Certifications from './component/Certifications.js';
import Projects from './component/Projects.js';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
