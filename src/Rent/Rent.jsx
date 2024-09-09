import React from 'react'
import './rent.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'
import { RentData } from '../AllData'
import List from '../List/List'

const Rent = () => {
  return (
    <div className='rent'>
      <div className="ren">
        <Link to="/"><p>Home</p></Link>
        <FaAngleRight />
        <span>Rent</span>
      </div>
      <h2>For Rent</h2>
      <div className="ren_many">
        <p>6 Properties</p>
      </div>
      <div className="rent_fil">
        {
          RentData.map((item, i)=>{
            return(
              <List item={item} key={i} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Rent