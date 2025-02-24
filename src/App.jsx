// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hobbies from './sections/Hobbies/Hobbies';
import Travelling from './sections/Hobbies/Travelling';
import Dancing from './sections/Hobbies/Dancing';
import Cooking from './sections/Hobbies/Cooking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Projects />
            <Skills />
            <Hobbies />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/travelling" element={<Travelling />} />
        <Route path="/dancing" element={<Dancing />} />
        <Route path="/cooking" element={<Cooking />} />
      </Routes>
    </Router>
  );
}

export default App;