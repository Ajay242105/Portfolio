import React from 'react'
import './Contact.css'
import bg_img from '../../assets/bg_img.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={bg_img} alt="" />
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
                            <img src="" alt="email-icon" /><p>ajay766613@gmail.com</p>
                            <img src="" alt="contact-icon" /><p>+918400242105</p>
                            <img src="" alt="location" /><p>KNR-1,Kapilvastu</p>



                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;