import React from 'react';
import './Projects.css';
import bg_img from '../../assets/bg_img.png';
import profile_img from '../../assets/profile_img.png';

const project_data = [
  {
    p_no: "1",
    p_img: profile_img,
    p_name: "Backend Design with Node.js, Express.js, and MongoDB",
    p_desc: "Backend design with Node.js, Express.js, and MongoDB involves building fast, scalable server-side applications. Node.js handles server execution, Express.js manages routing, and MongoDB stores data, enabling efficient API and database operations."
  },
  {
    p_no: "2",
    p_img: profile_img,
    p_name: "Backend Design with Node.js, Express.js, and MongoDB",
    p_desc: "Backend design with Node.js, Express.js, and MongoDB involves building fast, scalable server-side applications. Node.js handles server execution, Express.js manages routing, and MongoDB stores data, enabling efficient API and database operations."
  },
  {
    p_no: "3",
    p_img: profile_img,
    p_name: "Backend Design using PHP and Laravel",
    p_desc: "Backend design using PHP and Laravel involves building robust server-side applications. PHP handles dynamic content generation, while Laravel provides an elegant framework with features like routing, ORM, and middleware for efficient development and maintenance of web apps."
  }
];

const Projects = () => {
  return (
    
    <div id='project' className='Projects'>
      <div className="project-title">
        <h1>My latest Projects</h1>
        <img src={bg_img} alt="" />
      </div>
      <div className="project-container">
        {project_data.map((Project, index) => (
          <div className="project-format" key={index}>
            <img src={Project.p_img} alt={`Project ${Project.p_no}`} />
            <h3>{Project.p_no}</h3>
            <h2>{Project.p_name}</h2>
            <p>{Project.p_desc}</p>
            <div className="project-readmore">
              <p>Read More</p>
              {/* <img src={arrow} alt="Arrow icon" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;