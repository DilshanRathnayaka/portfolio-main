import React from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {BiMessageSquareDots} from 'react-icons/bi';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact=()=> {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1faslle', 'template_039p7eb', form.current, '0nqQAFz16Rwzct7P8')
   e.target.reset()
    
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMailOutline className='content__image'/>
              <h4>Email</h4>
              <h5>nimesh9945dilshan@gmail.com</h5>
              <a href="mailto:nimesh9945dilshan@gmail.com" target="_blank">Send a Message</a>
            </article>
            <article className="contact__option">
              <BiMessageSquareDots className='content__image'/>
              <h4>Messege /Call</h4>
              <h5>076-0027605</h5>
             
            </article>
            <article className="contact__option">
              <BsWhatsapp className='content__image'/>
              <h4>Whatsapp</h4>
              <h5>076-0027605</h5>
              <a href="https://api.whatsapp.com/send?phone=0760027605" target="_blank">Send a Message</a>
            </article>
       
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea  name='message' rows="7" placeholder='Your Message' required/>
            <button type='submit' className='btn btn-primary' >Send a Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact