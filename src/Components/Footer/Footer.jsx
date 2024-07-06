import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-top">

                <div className="footer-top-left">
                    <p id='logo'>Chaitanya</p>
                    <p>I am a frontend developer from, India graduating from Vit Pune, looking forward to explore new opportunities</p>
                </div>

                <div className="footer-top-right">
                  <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                  </div>
                  <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
                <div className="footer-bottom">
                  <p className="footer-bottom-left">
                    © 2024 Chaitanya Phad. All rights reserved.
                  </p>
                  <div className="footer-bottom-right">
                    <p>Term of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                  </div>
                </div>
        </div>
  )
}

export default Footer