import React from 'react'
import Left from './Left'
import Right from './Right'
import './page.css'

const Page = ({find}) => {
  return (
    <div className='page'>
      <Left find={find} />
      <Right />
    </div>
  )
}

export default Page