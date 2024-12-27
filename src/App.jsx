import React from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import Brands from './components/brands';
import Features from './components/features';
import Integration from './components/integration';
import Faqs from './components/faqs';
import Cta from './components/cta';
import Footer from './components/footer';
import Tesimonials from './components/testimonials';

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Brands />
      <Features />
      <Integration />
      <Tesimonials />
      <Faqs />
      <Cta />
      <Footer />
    </>
  )
}

export default App;