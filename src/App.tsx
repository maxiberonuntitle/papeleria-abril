import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { ScrollToTop } from './components/ScrollToTop.tsx'; // ✅ IMPORTACIÓN

export function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop /> {/* ✅ COMPONENTE PARA FORZAR SCROLL ARRIBA */}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}
