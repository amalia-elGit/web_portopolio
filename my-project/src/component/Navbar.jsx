import React from 'react'

const Navbar = () => {
  return (
 <div class="container">
    <header class="profile-header">
    <div class="shape-transform-container">
  <div class="bar-horizontal"></div>
  <div class="bar-vertical"></div>
</div>

      <div class="profile-info">
        <h1>RADEN AYU AMALIA ELWANDA</h1>
        <h2>Front end develop</h2>
        <p>I'm passionate about building beautiful and functional web experiences.</p>
      </div>

      <nav class="sidebar-nav">
        <ul>
          <li><div class="line"></div><a href="#">About</a></li>
          <li><div class="line"></div><a href="#">Project</a></li>
          <li><div class="line"></div><a href="#">Contact</a></li>
          <li><div class="line"></div><a href="#">Back</a></li>
        </ul>
      </nav>
    </header>
  </div>
  )
}

export default Navbar
