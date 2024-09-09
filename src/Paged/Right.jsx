import React, { useState } from 'react'
import './page.css'
import { FaWhatsapp } from 'react-icons/fa6'

const Right = () => {

  const [choose, setChoose] = useState('')

  const select = (e) => {
    setChoose({...choose,[e.target.name]: e.target.value})
  }

  console.log(choose)

  return (
    <div className='right_page'>
      <input type="text" name='name' onChange={select} placeholder='Name'/>
      <input type="text" name='phone' onChange={select} placeholder='Phone'/>
      <input type="email" name='email' onChange={select} placeholder='Email' />
      <div className="right_select">
        <select name='choose'  onChange={select}>
          <option value="I'm a buyer">I'm a buyer</option>
          <option value="I'm an agent">I'm an agent</option>
          <option value="I'm a tennant">I'm a tennant</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <textarea name="message" onChange={select} id="" />
      <div className="right_check">
        <input type="checkbox" />
        <p>By submitting this form I agree to
        Terms of Use</p>
      </div>
      <div className="right_btn">
        <button className='send'>Send message</button>
        <button>call</button>
      </div>
      <button className='what'><FaWhatsapp /> WhatsApp</button>
    </div>
  )
}

export default Right