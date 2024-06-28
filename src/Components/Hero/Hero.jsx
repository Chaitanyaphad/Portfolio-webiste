import React from 'react'
import './Hero.css'
import profileimg from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profileimg} alt="" />
        <h1><span>I'm Chaitanya Phad</span>, frontend developer based in India</h1>
        <p>I am a frontend developer from Punr, India with 1 year of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero