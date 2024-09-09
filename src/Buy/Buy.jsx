import React, { useState } from 'react'
import './buy.css'
import { Link } from 'react-router-dom'
import { FaAngleRight} from 'react-icons/fa6'
import { RentData } from '../AllData'
import List from '../List/List'

const Buy = () => {

  const [cat, setCat]=useState(RentData)

  const click = (cat) => {
    const item = RentData.filter((item) =>{
      return item.cat === cat
    })
    setCat(item)
  }
  return (
    <div className='buy'>
      <div className="for_sale">
        <Link to="/"><p>Home</p></Link>
        <FaAngleRight />
        <span>For Sale</span>
      </div>
      <div className="props">
        <h2>For Sale</h2>
        <p>8 Properties</p>
      </div>
      <div className="divide">
        <div className="divide1">
          {
            cat.map((item, i)=>{
              return(
                <List key={i} item={item} />
              )
            })
          }
        </div>
        <div className="divide2">
          <p className='status'>Property Type</p>
          <div className="div_angle">
            <div className="angle">
              <FaAngleRight />
              <p onClick={()=>click("Apartment")}>Apartment</p>
            </div>
            <p>(3)</p>
          </div>
          <div className="div_angle">
            <div className="angle">
              <FaAngleRight />
              <p onClick={()=>click("Terrace Duplex")}>Terrace Duplex</p>
            </div>
            <p>(3)</p>
          </div>
          <div className="div_angle">
            <div className="angle">
              <FaAngleRight />
              <p onClick={()=>click("Semi-Detached")}>Semi-Detached</p>
            </div>
            <p>(3)</p>
          </div>
          <div className="featured">
            <p>Featured</p>
            <div className="feat">
              {
                RentData.slice(0, 3).map((item)=>{
                  return(
                    <Link to={`/single/${item.id}`}>
                      <div className="feat1"style={{backgroundImage:  `linear-gradient(to bottom, rgba(0,0, 0, 0.10), rgba(0,0,0,0.10)),url(${item.img[0]})`}}>
                        <span>{item.price}</span>
                        <span className='pan'>{item.cat}</span>
                      </div>
                    </Link>
                  )
                })
              }
            </div>
          </div>
          <p className='status'>Property Status</p>
          <div className="div_angle">
            <div className="angle">
              <FaAngleRight />
              <Link to="/buy"><p>For Sale</p></Link>
            </div>
            <p>(6)</p>
          </div>
          <div className="div_angle">
            <div className="angle">
              <FaAngleRight />
              <Link to="/rent"><p>For Rent</p></Link>
            </div>
            <p>(6)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buy