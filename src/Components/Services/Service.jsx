import React from 'react';
import './Service.css';
import bg_img from '../../assets/bg_img.png';
import arrow from '../../assets/arrow.svg';

const Services_data = [
  {
    s_no: "1",
    s_name: "Frontend Design using React, HTML, CSS",
    s_desc: "Frontend design using React, HTML, and CSS involves creating interactive, responsive web applications. HTML provides structure, CSS styles and layouts the elements, while React enables dynamic, reusable components for efficient user interaction and state management. This combination results in modern, scalable, and user-friendly interfaces."
  },
  {
    s_no: "2",
    s_name: "Backend Design with Node.js, Express.js, and MongoDB",
    s_desc: "Backend design with Node.js, Express.js, and MongoDB involves building fast, scalable server-side applications. Node.js handles server execution, Express.js manages routing, and MongoDB stores data, enabling efficient API and database operations."
  },
  {
    s_no: "3",
    s_name: "Backend Design using PHP and Laravel",
    s_desc: "Backend design using PHP and Laravel involves building robust server-side applications. PHP handles dynamic content generation, while Laravel provides an elegant framework with features like routing, ORM, and middleware for efficient development and maintenance of web apps."
  }
];

const Service = () => {
  return (
    <div id='service' className='services'>
      <div className="service-title">
        <h1>My Services</h1>
        <img src={bg_img} alt="Background for services section" />
      </div>
      <div className="service-container">
        {Services_data.map((service, index) => (
          <div key={index} className="service-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            {/* <p>{service.s_desc}</p> */}
            <div className="service-readmore">
              <p>Read More</p>
              {/* <img src={arrow} alt="Arrow icon" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
