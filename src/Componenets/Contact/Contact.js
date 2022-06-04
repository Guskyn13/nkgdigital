import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import linkdin from '../../Assets/linkdin.png'
import github from '../../Assets/github.png'

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    // const isValidEmail = email => {
    //     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return regex.test(String(email).toLowerCase());
    // };

    const submit = () => {
        if (firstName && lastName && email && message) {
            const serviceId = 'service_7o0lxno'
            const templateId = 'template_agbbts5'
            const id = 'HhxVKZ1JwP4EZDeDD'
            const templateParams = {
                firstName, lastName, email, message
            }

            emailjs.send(serviceId, templateId, templateParams, id)
                .then(response => console.log('Success!', response))
                .then(error => console.log('Error', error))

            setFirstName('')
            setLastName('')
            setEmail('')
            setMessage('')
            setEmailSent(true)
        } else {
            alert('Please fill in all fields.')
        }
    }

    return (
        <>
            <div className='contact-container' id="contact-form">
                <div className='contact_leftSide'>
                    <h1>CONTACT</h1>
                    <input type="text" placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <input type="text" placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
                    <input type="email" placeholder='Your Email Address' value={email} onChange={e => setEmail(e.target.value)} />
                    <textarea placeholder='Your Message' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <button onClick={submit}>Send Message</button>
                    <span className={emailSent ? 'visible' : 'notVisible'}>Thank you for your message, we will be in touch shortly.</span>

                    <div className='contact_links'>
                        <a href="https://www.linkedin.com/in/nathankgusky/">
                            <img src={linkdin} className='contact_linkdin' />
                        </a>
                        <a href='https://github.com/Guskyn13'>
                            <img src={github} className='contact_github' />
                        </a>
                    </div>

                </div>


                <div className='contact_rightSide'>
                    
                </div>
            </div>
        </>
    )
}

export default Contact