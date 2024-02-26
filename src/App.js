import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
