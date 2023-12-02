import React from 'react'
import '../Contact/Contact.css'
import contact from '../../Assets/contact.png'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_woc9xxe', 'template_2fx48ds', e.target, '4xrjf3VCM4W6ksPKe')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };


  return (
    <div className='contactbg'>
      <div className='contact-right'>
        <div className="heading">
          contact
        </div>
        <div className='form'>
          <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" placeholder='your name' />
            <label>Email</label>
            <input type="email" name="email" placeholder='email' />
            <label>Message</label>
            <textarea name="message" placeholder='message' />
            <input className='form-button' name='submit' type='submit' />
          </form>
        </div>
      </div>
      <div>
        <img className="contact" alt="contact" src={contact} />

      </div>
    </div>
  )
}

export default Contact