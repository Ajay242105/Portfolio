import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/bg_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="LOGO" />

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
 </div>

      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => { setMenu('home'); setIsOpen(false); }}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <img src={underline} alt='underline' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => { setMenu('about'); setIsOpen(false); }}>About Me</p>
          </AnchorLink>
          {menu === 'about' ? <img src={underline} alt='underline' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#service'>
            <p onClick={() => { setMenu('service'); setIsOpen(false); }}>Services</p>
          </AnchorLink>
          {menu === 'service' ? <img src={underline} alt='underline' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#portfolio'>
            <p onClick={() => { setMenu('portfolio'); setIsOpen(false); }}>Portfolio</p>
          </AnchorLink>
          {menu === 'portfolio' ? <img src={underline} alt='underline' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => { setMenu('contact'); setIsOpen(false); }}>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <img src={underline} alt='underline' /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;