import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Specials from './components/Specials/Specials';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

export default App;
