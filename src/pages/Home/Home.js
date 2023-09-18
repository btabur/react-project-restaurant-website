import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
  return (
    <div className='home'>
        <div className="header-container">
            <h1> Burger 03</h1>
            <p>Delicious Hamburgers <br /> with 33 Spicy Mixed</p>
           <Link to='/menu'> <button>Order Now</button> </Link>
        </div>
    </div>
  )
}

export default Home