import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './component/Home.js';
import Contact from './component/Contact.js';
import Certifications from './component/Certifications.js';
import Projects from './component/Projects.js';


function App() {
  return (
    <Router>
      <Route path="/" element={<HomePage />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Router>
  );
}

export default App;
