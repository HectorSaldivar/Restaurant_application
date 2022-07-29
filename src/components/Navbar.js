import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
      <a href='/' className='siteTitle'>
        Brunch
      </a>
      <ul>
        <li>
          <a href='/home'>Home</a>
        </li>
        <li>
          <a href='/menu'>Menu</a>
        </li>
        <li>
          <a href='/location'>Location</a>
        </li>
        <li>
          <a href='/delivery'>Delivery</a>
        </li>
        <li>
          <a href='/about'>About Us</a>
        </li>
        
      </ul>

    </nav>
  )
}

export default Navbar