import React from 'react';
import './Home.scss';
import Carousel from '../../components/Carousel';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
