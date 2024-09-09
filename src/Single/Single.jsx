import React from 'react'
import './single.css'
import { Link, useParams } from 'react-router-dom'
import { RentData } from '../AllData'
import { FaAngleRight } from 'react-icons/fa6'
import { IoBedOutline } from 'react-icons/io5'
import Page from '../Paged/Page'

const Single = () => {

  const {id} = useParams()

  //const [image,setImage]=useState(find[0])

  const find = RentData.find((item)=>{
    return item.id === parseInt(id)
  })

  //const image = find.img

  return (
    <div className='single'>
      <div className="sing_cat">
        <Link to="/"><p>Home</p></Link>
        <FaAngleRight />
        <span>{find.name}</span>
      </div>
      <div className="sing_price">
        <h1>{find.name}</h1>
        <h1>#{find.price}</h1>
      </div>
      <Link to='/rent'><span className='para'>For rent</span></Link>
      <div className="single_img">
      {
        find.img.map((image)=>{
          return (
            <img key={image} src={image} alt="" />
          )
        })
      }
      </div>
      <div className="property">
        <div className="proper">
          <p>{find.cat}</p>
          <span>Property Type</span>
        </div>
        <div className="proper">
          <div className="prop">
            <IoBedOutline className='bed' />
            <p>{find.room}</p>
          </div>
          <span>Bedrooms</span>
        </div>
      </div>
      <Page find={find} />
    </div>
  )
}

export default Single