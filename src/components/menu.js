import React from 'react'
import { Link } from "gatsby"
import "../styles/menu.css"

const Menu = () => {
  return (
    <div style={{
      background: '#2f2d8e',
      paddingTop: '10px'
    }}>

    <ul style={{
      listStyle: 'none',
      display: 'flex'
      // justifyContent: 'space-evenly'
    }}>
      <li><Link className='m-link-text' to="/">Home</Link></li>
      <li><Link className='m-link-text' to="/about">About</Link></li>
      <li><Link className='m-link-text' to="/sauces">Select Sauces</Link></li>
      <li><Link className='m-link-text' to="/store">Store</Link></li>
      <li><Link className='l-link-text' to="/loginPage">Sign-Up</Link></li>
      <li><Link className='l-link-text' to="/loginPage">Login</Link></li>
    </ul>




    </div>
  )
}

export default Menu
