import React from 'react'
import './navbar.css'




const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='cartlogo' >
            <h1>Cart</h1>
        </div>
        <div className='Cart-icon'>
            <img alt='cart' src='https://t3.ftcdn.net/jpg/03/13/36/92/240_F_313369233_w50qr2zvY2wGOsV9suFcoifB1JRfZK5M.jpg' />
            <span>5</span>
        </div>
    </div>
  )
}

export default Navbar