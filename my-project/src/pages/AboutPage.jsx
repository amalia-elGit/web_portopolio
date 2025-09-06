import React from 'react'
import Header from '../component/Header'

const AboutPage = () => {
  return (
    
    <div>
      <Header/>
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
    </div>
  )
}

export default AboutPage
