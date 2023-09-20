import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <div>
            <a href="/" style={{marginRight:"10px"}}>Home</a>
            <a href="/about" style={{marginRight:"10px"}}>About</a>
            <a href="/episodes">Episodes</a>
        </div>

        <div>
          <a href="/favorites">My Favourites</a>
          <button className='theme-button'>Dark Mode</button>
        </div>

    </div>
  )
}

export default Header