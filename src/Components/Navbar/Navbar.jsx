import React, { useRef, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.right = "0";
    }

    const closeMenu = () =>{
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><a href="#home"><p>Home</p></a></li>
                <li><a href="#about"><p>About me</p></a></li>
                <li><a href="#services"><p>Services</p></a></li>
                <li><a href="#work"><p>Portfolio</p></a></li>
                <li><a href="#contact"><p>Contact</p></a></li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navbar