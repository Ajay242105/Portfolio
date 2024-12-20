import React from 'react'
import './About.css';
import profile_img from '../../assets/profile_img.png'
import bg_img from '../../assets/bg_img.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={bg_img} alt="About_img" />

            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="About_img" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                    <p>
                        Welcome to my portfolio! I am Ajay Kumar Jaiswal,
                        a passionate and dedicated software developer with a strong
                        foundation in computer science and engineering. With expertise
                        in languages such as C, C++, JavaScript, and Java, I have successfully
                        developed a variety of projects, including a full-stack car rental
                        system and an online hotel booking platform, utilizing modern frameworks
                        like React, Node.js, and Laravel.
                    </p>
                    <p>
                        My problem-solving skills are demonstrated
                        through my achievements on competitive coding platforms, where I have solved
                        over 200 problems on Leetcode and earned a 3-star rating on HackerRank.
                    </p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill"><p>HTML, CSS & Javascript </p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>Node JS & Expess Js</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>C, C++, & Java </p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>PHP & Laravel</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>MySql & MongoDB</p><hr style={{ width: "60%" }} /></div>
                    </div>
                    


                </div>
            </div>

            <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>0</h1>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>10+</h1>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                    </div>



        </div>
    )
}

export default About;