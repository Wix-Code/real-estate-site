import React from 'react'
import './list.css'
import { IoBedOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const List = ({item, i}) => {
  return (
    <div className='list' key={i}>
      <Link to={`/single/${item.id}`}><div className="list_img" style={{backgroundImage : `linear-gradient(to bottom, rgba(0,0, 0, 0.1), rgba(0,0,0,0.7)) ,url(${item.img[0]})`}}>
      </div></Link>
      <h2>{item.name.slice(0,23)}...</h2>
      <h3>#{item.price}</h3>
      <p>{item.cat}</p>
      <div className="list_icon">
        <IoBedOutline className='bed' />
        <span>{item.room}</span>
      </div>
    </div>
  )
}

export default List