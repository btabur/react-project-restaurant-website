import React from 'react'
import Logo from '../../assets/hamburgerlogo.png'
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="left-side">
            <img src={Logo}  />
        </div>
        <div className="right-side">
            <Link to=';'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>

    </div>
  )
}

export default Navbar