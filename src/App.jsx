// src/App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import GadgetList from './components/GadgetList';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <HeroBanner />
        <Features />
        <GadgetList />
        <ContactForm />
      </div>
    </ThemeProvider>
  );
}

export default App;