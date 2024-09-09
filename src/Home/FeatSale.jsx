import React from 'react'
import List from '../List/List'
import { RentData } from '../AllData'

const FeatSale = () => {
  return (
    <div className='future'>
      <div className="futured">
        <h1>Featured Homes for Rent</h1>
        <div className="future1">
          {
            RentData.slice(0, 3).map((item, i)=>{
              return(
                <List item={item} key={i}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FeatSale