import React from 'react'
import './Contact.css'
import bg_img from '../../assets/bg_img.png'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa'; 





const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e5b314e3-f069-4fc8-9bba-bd54de117f36");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          alert("Form Submitted Successfully!"); 
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
          alert("Error: " + data.message);
        }
      };
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                    <h1>Get in touch</h1>
                    <img src={bg_img} alt="Background for services section" />
                  </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects,
                        so feel free to send me a message about anything
                        that you want me to work on. You can contact
                        anytime.</p>
                    <div className="contact-section">
                        <div className="contact-details">
                            <div className="contact-detail">
                            <FaEnvelope className="icon" />
                            <p>ajay766613@gmail.com</p>
                            </div>
                            <div className="contact-detail">

                            <FaPhone className="icon" />

                                <p>+918400242105</p>
                            </div>
                            <div className="contact-detail">
                            <FaMapMarkerAlt className="icon" />
                            <p>KNR-1,Kapilvastu</p>
                            </div>


                        </div>


                    </div>

                </div>
                <form onSubmit={onSubmit} className="contact-right">

                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' required />
                    <label htmlFor="" >Your Email</label>
                    <input type="email" placeholder='Enter your Email' />
                    <label htmlFor="" placeholder='Write your msg here'>Your messages</label>
                    <textarea name="message" rows="8" placeholder='Write your msg here' id=""></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>

                </form>
            </div>
        </div>
    )
}

export default Contact;