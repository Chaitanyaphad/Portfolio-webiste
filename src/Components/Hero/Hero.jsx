import React from 'react'
import './Hero.css'
import profileimg from '../../assets/profilepic.png'
import resume from '../../assets/C_phad.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profileimg} alt="" />
        <h1><span>I'm Chaitanya Phad</span>, enthusiastic programer based in India</h1>
        <p>I am a Computer engineering persuing students from Pune, India ready to explore opportunities in fields like Data Science, AI, Machine Learning, DataBase, full stack, etc</p>
        <div className="hero-action">
            <div className="hero-connect" ><a href="#contact">Connect with me</a></div>
            <div className="hero-resume" ><a href={resume} download={resume}>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero