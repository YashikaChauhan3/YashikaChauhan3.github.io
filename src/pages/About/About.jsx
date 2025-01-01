import React from 'react'
import './About.css'
import aboutImg from '../../images/about-img.jpg'

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <div className='about-content grid' >
          <div className='about-img'>
            <img src={aboutImg} alt=" "/>
          </div>
          <div className='about-text'>
            <h2  className='about-title fs-26 ls-1'>About BookBrowser</h2>
            <p className='fs-17'>The BookBrowser App is designed to provide an intuitive and user-friendly experience for book enthusiasts. Here's how you can use the app effectively</p>
            <p className='fs-17'>The BookBrowser App is perfect for readers, researchers, and anyone looking to explore the literary world with ease. Start your literary journey today!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
