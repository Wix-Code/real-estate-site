import React from 'react'
import { RentData } from '../AllData'
import List from '../List/List'

const Featured = () => {
  return (
    <div className='future'>
      <div className="futured">
        <h1>Featured Homes for Sale</h1>
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

export default Featured