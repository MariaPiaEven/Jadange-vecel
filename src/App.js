import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Cartomancie from './Pages/Cartomancie';
import Lahochi  from './Pages/Lahochi';
import Footer from './components/Footer';
import Massage from './Pages/Massage';
import Magnetisme from './Pages/Magnetisme';
import Legal from './Pages/Legal';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartomancie" element={<Cartomancie />} />
          <Route path="/lahochi" element={<Lahochi />} />
          <Route path="/massage" element={<Massage />} />
          <Route path="/magnetisme" element={<Magnetisme />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
