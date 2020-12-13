import React from 'react';
import './Home.scss';
import Carousel from '../../components/Carousel';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default Home;
