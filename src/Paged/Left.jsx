import React from 'react'
import './page.css'
import { FaAngleRight, FaCalendar } from 'react-icons/fa6'
import { Secur } from '../AllData'

const Left = ({find}) => {
  return (
    <div className='left_page'>
      <div className="lef_det">
        <p>Details</p>
        <div className="lef_calen">
          <FaCalendar />
          <span>Updated on July 15, 2024 at 8:30 am</span>
        </div>
      </div>
      <hr />
      <div className="lef_contain">
        <div className="lef_con">
          <p>Price:</p>
          <span>#{find.price}</span>
        </div>
        <div className="lef_con">
          <p>Property Type:</p>
          <span>{find.cat}</span>
        </div>
        <div className="lef_con">
          <p>Bedroom:</p>
          <span>{find.room}</span>
        </div>
        <div className="lef_con">
          <p>Property Status:</p>
          <span>For Rent</span>
        </div>
      </div>
      <div className="left_feat">
        <p className='p_left'>Features</p>
        <hr />
        <div className="secure">
          {
            Secur.map((item)=>{
              return(
                <div className="sec_div" key={item.id}>
                  <FaAngleRight />
                  <p>{item.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="left_contact">
        <p>Contact Information</p>
        <span>View Listings</span>
      </div>
      <hr />

      <p>Enquire About this property</p>
      <hr />
      <div className="left_form">
        <div className="left_form1">
          <div className="left_input">
            <p>Name</p>
            <input type="text" placeholder='Enter your name' />
          </div>
          <div className="left_input">
            <p>Phone</p>
            <input type="text" placeholder='Enter your Phone' />
          </div>
        </div>
        <div className="left_form1">
          <div className="left_input">
            <p>Email</p>
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="left_input">
            <p>I'm a</p>
            <input type="text" placeholder='Enter your name' />
          </div>
        </div>
        <div className="left_text">
          <p>Message</p>
          <textarea name="" id="" />
        </div>
        <div className="left_range">
          <input type="checkbox" name="" id="" />
          <p>By submitting this form I agree to
          Terms of Use</p>
        </div>
        <div className="left_btn">
          <button>Request Information</button>
        </div>
      </div>
    </div>
  )
}

export default Left