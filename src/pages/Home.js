import React from 'react';
import Hero from '../components/Hero';
import WhatIDo from '../components/WhatIDo';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhatIDo />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
