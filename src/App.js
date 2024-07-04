import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './css/styles.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </div>
    </div>

  );
}

export default App;
