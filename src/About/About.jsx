import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Home/pictures/image.jpg'


const About = () => {
  return (
    <div className='abot'>
      <div className="abot1">
        <h1>ABOUT US</h1>
        <p>Navigating the Lagos Real Estate Market can sometimes become a daunting task. You don't need just a real estate agent, you need a Real Estate Company. At Real Estate, we pride ourselves in providing our clients with highly profitable real estate investment opportunities and conducive homes for residential living. Whether it's your first house or tenth, we are here to guide you through your property acquisition journey and beyond. You desire trust, experience and ease? Welcome to Africa's first International Real Estate Company.</p>
        <Link to='/'><button>Discover</button></Link>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default About