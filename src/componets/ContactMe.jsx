import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import './login.css'
export default function ContactMe(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_075tekp', 'template_10dhtwb', form.current, {
        publicKey: 'rBC7OAvviDKyLdNA8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
         
          alert("your email has been submited and will be responed to as soon as possible!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  return(
    <>
    <div className='loginForm'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='nameandemail'>
      <label style={{paddingRight:"10px"}}>Name</label>
      <input className='text1' type="text" name="to_name" placeholder='john doe' />
      <label style={{paddingRight:"10px", paddingLeft:"10px"}}>Email</label>
      <input className='text1' type="email" name="from_name" placeholder='example@gmail.com' />
      </div>
      <div className='Message-header'>
      <label>Message</label>
      </div>
      <div className='message'>
      
      <textarea name="message" />
      </div>
      <div className='submit'>
      <input className='button' type="submit" value="Send" />
      </div>
    
    </form>
      
    </div>
    </>
  )
  
}












