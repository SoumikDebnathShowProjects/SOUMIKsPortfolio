import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
<>
<nav class="navbar">

    <div class="navbar-nav">
        <a href="#" className='logo'>Logo</a>
    <ul className="navitem">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
    </ul>
    </div>
    <script src="https://kit.fontawesome.com/d1b7feb490.js" crossorigin="anonymous"></script>
</nav>

</>
  )
}

export default Navbar
