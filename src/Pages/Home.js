import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import Footer from '../Components/Footer';
import Courses from '../Components/Courses';
import Tutors from '../Components/Tutors';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses/>
      <Features />
      <Tutors/>
      <Footer />
      
    </div>
  );
};

export default Home;