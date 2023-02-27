import React from 'react'
import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef()


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jj9kned', 'template_w0sjans', form.current, 'mlY9xn7oAn5_D42JV')
          .then((result) => {
              console.log(result.text);
              
          }, (error) => {
              console.log(error.text);
          });
          
      };
    
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span >YOUR BODY</span>
                <span className='stroke-text' > WITH US</span>
            </div>

        </div>
        <div className="right-j">
            <form onSubmit={sendEmail}  action={form} className="email-container" >
                <input type="email" name='email' placeholder='Enter your email' />
                <button type='submit' name='submit' className='btn btn-j'>Join Now</button>
            </form  >


        </div>
    </div>
  )
}

export default Join