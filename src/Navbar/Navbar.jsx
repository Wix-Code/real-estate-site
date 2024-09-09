import React, { useState } from 'react'
import { FaBars, FaFacebookF } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import './navbar.css'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const location = useLocation()
  const {pathname} = location

  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className="nav1">
        <div className="nav_1">
          <a href="tel:+2348126829146">+234 812 682 9146</a>
          <a href="mailto:ogbonna428alex@gmail.com">ogbonna428alex@gmail.com</a>
        </div>
      </div>
      <div className="nav2">
        <div className="nav_2">
          <Link to='/'><h1>Real Estate</h1></Link>
          <div className={ open ? "nav_nav" : "nav_list"}>
            <ul>
              <Link to="/"><li onClick={()=>setOpen(false)} className={pathname === "/" ? "active" : ""}>Home</li></Link>
              <Link to="/buy"><li onClick={()=>setOpen(false)} className={pathname === "/buy" ? "active" : ""}>Buy</li></Link>
              <Link to="/rent"><li onClick={()=>setOpen(false)} className={pathname === "/rent" ? "active" : ""}>Rent</li></Link>
              <li onClick={()=>setOpen(false)}>Blog</li>
              <Link to='/about'><li onClick={()=>setOpen(false)}>About</li></Link>
            </ul>
          </div>
          <div className="nav_icons">
            <button><FaFacebookF /></button>
            <button><FaFacebookF /></button>
            <button><FaFacebookF /></button>
          </div>
          <div className="button">
            <button onClick={()=>setOpen(!open)}>{open ? <FaTimes className='times' /> : <FaBars />}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar