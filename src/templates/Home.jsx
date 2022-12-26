import React from 'react';
import Header from '@components/header';
import ProductList from '@containers/ProductList';
import Slider from '@components/Slider';
import Footer from '@components/Footer';

const Home = () => {
  return (
    <>
    <Header />
    <Slider />
    <ProductList />
    <Footer />
    </>
    
    
    
  )
}

export default Home