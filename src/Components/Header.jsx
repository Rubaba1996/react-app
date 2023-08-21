import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div className='head'>
     <h1>{props.result}</h1>
    </div>
  )
}

export default Header