import './App.css';
import ParticlesComponent from './Componenets/Particles';
import { Navbar, Hero, About, Projects, Services, Contact, Footer } from './Componenets';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='scroll-tracker'></div>
      <div className="App">
        <div className='particles'>
          <ParticlesComponent />
        </div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />


        {/* <Footer /> */}
        <Routes>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>

      </div>
    </>
  );
}

export default App;
