import React from 'react';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import PrimarySlider from './PrimarySlider';

function Home() {
  return (
    <>
      <Header />
      <div className="app-content">
        <PrimarySlider />
      </div>
      <Footer />
    </>
  );
}

export default Home;
