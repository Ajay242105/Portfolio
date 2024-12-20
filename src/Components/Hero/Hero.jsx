import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div>
        <div id='hero' className="hero">
            <img src={profile_img} alt="profile_img" />
            <h1><span>I am Ajay Kumar Jaiswal,</span><br />MERN developer</h1>
            {/* <p>I am a MERN Developer from KNR-1,Kapilvastu</p> */}
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume"><p>My resume</p></div>
            </div>

        </div>
    </div>
  )
}

export default Hero