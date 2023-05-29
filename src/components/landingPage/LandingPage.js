import React from 'react';
import Hero from './Hero';
import About from './About';
import BecomeTutor from './BecomeTutor';
import Footer from './Footer';
import AppHeader from './Header';

function LandingPage() {
  return (
    <div>
      <AppHeader />
      <Hero />
      <About />
      <BecomeTutor />
      <Footer />
    </div>
  );
}

export default LandingPage;
