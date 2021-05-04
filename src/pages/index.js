import React from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Listings from '../components/Listings';
import { InfoData, InfoDataTwo } from '../data/InfoData';
import { SliderData } from '../data/SliderData';
import InfoSection from '../components/InfoSection';

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Listings />
      <Features />
      <InfoSection {...InfoDataTwo} />
    </>
  );
};

export default Home;
