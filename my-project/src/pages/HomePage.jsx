import React from 'react'
import Header from '../component/Header'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='section'>
        <h1>Welcome</h1>
        <p>My name is Raden Ayu Amalia Elwanda, I’m a front-end developer based in<br></br> tangerang,I am passionate about building accessible and responsive websites that<br></br> are beautiful and easy to use on any device.</p>
        <p>I'm passionate about building beautiful and functional web experiences.</p>
        <div className='icon'></div>
      </div>

      <section>
        <div  className='homepage-nav'>

          <div className='homepage-bingkai'>
           <div className='homepage-bingkai-horizontal'></div>
           <div className='homepage-bingkai-middle'></div>
           <div className='homepage-bingkai-vertical'></div>
         
           </div>
        <ul >
          <li><div className='homepage-line'></div><a href='#'>About</a></li>
          <li><div className='homepage-line'></div><a href='#'>Project</a></li>
          <li><div className='homepage-line'></div><a href='#'>Cobtact</a></li>
        </ul>
        
        </div>
      </section>


    </div>
  )
}

export default HomePage
