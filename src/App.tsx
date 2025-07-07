import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import SecurityProvider from './components/SecurityProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import Vessels from './components/Vessels';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Models from './components/Models';
import About from './components/About';
import BuildYourBoat from './components/BuildYourBoat';
import ServiceWarranty from './components/ServiceWarranty';
import BoatDetails from './components/BoatDetails';

function HomePage() {
  return (
    <>
      <Hero />
      <Vessels />
    </>
  );
}

function App() {
  return (
    <SecurityProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/models" element={<Models />} />
              <Route path="/models/:id" element={<BoatDetails />} />
              <Route path="/build" element={<BuildYourBoat />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<ServiceWarranty />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </SecurityProvider>
  );
}

export default App;