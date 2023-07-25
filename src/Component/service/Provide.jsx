import React from 'react'
import ComputersCanvas from '../canvas/Computers';
import {motion} from "framer-motion"

const TextVariants = {
  hide: {
    x: 300,
    // opacity: 0
  },
  show: {
    x: 0,
    // opacity: 1,
  }
}

const Provide = () => {
  return (
    <section id='service' className='w-full overflow-x-hidden py-40'>
        <h1 className="text-3xl text-center dark:text-slate-300 underline underline-offset-8 decoration-pink-500 mt-[4em]">What I Provided ?</h1>
        
        <div className='flex sm:justify-center md:justify-around flex-wrap lg:w-4/5 w-full gap-10' style={{ gap: "2em ", marginInline: "auto"}}>
            <div className='md:w-3/5 w-full' style={{height: "400px"}}>
                <ComputersCanvas />
            </div>
            <ul className="list-disc text-gray-600 dark:text-gray-300 text-xl md:mt-40 mx-auto font-mont " style={{lineHeight: "2em"}}>
                <motion.li 
                  variants={TextVariants}
                  initial="hide"
                  whileInView="show"
                  transition={{ duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                >MERN Stack Web Development</motion.li>
                <motion.li 
                  variants={TextVariants}
                  initial="hide"
                  whileInView="show"
                  transition={{ duration: 1, type: "spring" }}
                  viewport={{ once: true }}
                >Responsive Web Design</motion.li>
                <motion.li 
                  variants={TextVariants}
                  initial="hide"
                  whileInView="show"
                  transition={{ duration: 1.2, type: "spring" }}
                  viewport={{ once: true }}
                >Clean Code</motion.li>
                <motion.li 
                  variants={TextVariants}
                  initial="hide"
                  whileInView="show"
                  transition={{ duration: 1.4, type: "spring" }}
                  viewport={{ once: true }}
                >Cheap Maintainance</motion.li>
                <motion.li 
                  variants={TextVariants}
                  initial="hide"
                  whileInView="show"
                  transition={{ duration: 1.6, type: "spring" }}
                  viewport={{ once: true }}
                >Security</motion.li>
                <motion.li 
                  variants={TextVariants}
                  initial="hide"
                  whileInView="show"
                  transition={{ duration: 1.8, type: "spring" }}
                  viewport={{ once: true }}
                >Fast Performance</motion.li>
            </ul>
        </div>

    </section>
  )
}

export default Provide;