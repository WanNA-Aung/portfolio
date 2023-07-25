import React from 'react'
import {motion} from "framer-motion";
import EarthCanvas from '../canvas/Earth';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6x8efbv', 'template_fcg8dne', form.current, 'Cc8GmyiPsxc_JwcIn')
      .then((result) => {
        form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  
  
  return (
    <>
          <div className="text-center my-10">
            <h1 className="text-4xl underline underline-offset-4 decoration-pink-500 dark:text-white">Contact Me</h1>
          </div>
          <div id='contact' className='py-10 flex flex-wrap' style={{ width: "80%", marginInline: 'auto'}}>
            <form className='flex flex-col mx-auto gap-5 lg:mt-20' style={{ width: "60%" }} ref={form} onSubmit={sendEmail} >
                <input className='text-black py-2 bg-transparent border-b-2 transition-all duration-300 ease-linear border-b-green-500 focus:border-b-blue-700 outline-none dark:text-white' placeholder='Username' type="text" name="user_name" />
                <input className='text-black py-2 bg-transparent border-b-2 transition-all duration-300 ease-out border-b-green-500 focus:border-b-blue-700 outline-none dark:text-white' placeholder='Email' type="email" name="user_email" />
                <textarea name="message" className='text-black py-2 bg-transparent border-b-2 transition-all duration-300 ease-out border-b-green-500 focus:border-b-blue-700 outline-none dark:text-white' id="" placeholder='Message' cols="30" rows="3"></textarea>
                <button type='submit' className='bg-blue-600 rounded py-1 text-white'>
                    Send an e-mail
                </button>
            </form>

            <motion.div
            className='xl:h-auto hidden md:flex justify-center lg:w-[500px] md:w-[400px] md:h-[550px] h-[350px] '
            style={{ marginInline: "auto"}}
          >
            <EarthCanvas />
          </motion.div>
        </div>
    </>

  )
}

export default Contact;