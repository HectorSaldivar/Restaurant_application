import React from 'react'
import { AiFillHeart } from "react-icons/ai";

function Navbar() {
  return (
    <>
    <nav className='navbar'>
      <a href='/' className='siteTitle'>
        Brunch<span className='firstHeart'><AiFillHeart/></span><span className='secondHeart'><AiFillHeart/></span><span className='thirdHeart'><AiFillHeart/></span>
      </a>
      <ul className='navMenu'>
        <li>
          <a href='/home'>Home</a>
        </li>
        <li>
          <a href='/MenuScreen'>Menu</a>
        </li>
        <li>
          <a a href='/LocationScreen'>Location</a>
        </li>
        <li>
          <a href='/delivery'>Delivery</a>
        </li>
        <li>
          <a href='/about'>About Us</a>
        </li>
        
      </ul>
      <div className='hamburger'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

    </nav>
    </>
  )
}

export default Navbar