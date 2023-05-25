import React from 'react';
import Logo from './Logo';
import Hero from './Hero';
import Benefit from './Benefit';
import Features from './Features';
import Footer from './Footer';
import AppHeader from './Header';

function LandingPage() {
  return (
    <div>
      <AppHeader />
      {/* <Logo /> */}
      <Hero />
      <Benefit />
      <Features />
      <Footer />
    </div>
  );
}

export default LandingPage;
