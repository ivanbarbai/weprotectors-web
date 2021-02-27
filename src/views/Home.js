import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;