import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './component/Home.js';
import About from './component/About.js';
import Contact from './component/Contact.js';
import Certifications from './component/Certifications.js';
import Projects from './component/Projects.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Personal_Portfolio_Page" element={<HomePage />} />
        <Route path="/Personal_Portfolio_Page/about" element={<About />} />
        <Route path="/Personal_Portfolio_Page/certifications" element={<Certifications />} />
        <Route path="/Personal_Portfolio_Page/projects" element={<Projects />} />
        <Route path="/Personal_Portfolio_Page/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
