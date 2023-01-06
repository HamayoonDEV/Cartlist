import React from 'react'
import './navbar.css'
import {FaFacebook} from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='cartlogo' >
            <h1>Cart</h1>
        </div>
        <div className='Cart-icon'>
            <FaFacebook/>
        </div>
    </div>
  )
}

export default Navbar