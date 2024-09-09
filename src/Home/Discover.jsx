import React from 'react'
import image from '../Home/pictures/abuja.png'
import './home.css'

const Discover = () => {
  return (
    <div className='discover'>
      <div className="discover1">
        <div className="disco">
          <h1>Discover more with Ramos</h1>
          <p>Explore a curated selection of exceptional homes for sale with Ramos Real Estate. From Luxurious Duplex and Terraces to spacious family homes, find the perfect property that matches your lifestyle. Our expert team is here to guide you every step of the way. Start your homeownership journey today</p>
        </div>
        <div className="disco1">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="discover2">
        <h1>Our Locations</h1>
        <div className="dico_pics">
          <div className="discover_lag">
          </div>
          <div className="discover_abj">
          </div>
          <div className="discover_dub">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover