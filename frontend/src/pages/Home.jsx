import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import ProductItem from '../components/ProductItem'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Footer />
    </div>
  )
}

export default Home