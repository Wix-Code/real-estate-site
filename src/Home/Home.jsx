import React from 'react'
import './home.css'
import Featured from './Featured'
import FeatSale from './FeatSale'
import Discover from './Discover'
import Abot from './Abot'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Discover />
      <Featured />
      <FeatSale />
      <Abot />
    </div>
  )
}

export default Home