import React from 'react'
import './home.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero1">
        <h1>Find Your Next Home Today</h1>
        <div className="hero_bar">
          <div className="hero_1">
            <select name="" id="">
              <option value="I'm looking for..">I'm looking for..</option>
              <option value="For Rent">For Rent</option>
              <option value="For Sale">For Sale</option>
            </select>
          </div>
          <div className="hero_2">
            <div className="here">
              <select name="" id="">
                <option value="Bedroom">Bedroom</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="here">
              <select name="" id="">
                <option value="Apartment">Apartment</option>
                <option value="Land">Land</option>
                <option value="Terrance Duplex">Terrance Duplex</option>
              </select>
            </div>
            <div className="here">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero