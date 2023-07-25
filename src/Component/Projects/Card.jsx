import React from 'react';
import style from "./Projects.module.css";
import { motion } from 'framer-motion';


const Card = ({image, title, description, languages ,git, demo}) => {
  return (
    <div
      className={style.card} >
        {
          image && (
            <div className={style.card_video}>
            <motion.img 
              initial={{ y: 200, opacity: 0}}
              whileInView={{ y: 0, opacity: 1}}
              whileHover={{ scale: 1.2 }} 
              transition={{ duration: 1, type: "spring"}}
              // viewport={{ once: true }}  
              src={image} alt="logo" className='cursor-pointer w-full h-full' />
          </div>
          )
        }
     
        {
          !image && (
              <motion.video 
                initial={{ y: 200, opacity: 0}}
                whileInView={{ y: 0, opacity: 1}}
                whileHover={{ scale: 1.2 }} 
                transition={{ duration: 1, type: "spring"}}
                // viewport={{ once: true }}  
                className={style.card_video} muted autoPlay src="/Videos/chatApp.mov"></motion.video>
          ) 
        }
        
        <div className={style.card_body}>
          <h1 className={style.card_title}>{title}</h1>
          <p className={`${style.card_desc} dark:text-white `} >{description}</p>
          <footer className={style.card_footer}>
            <ul className='flex gap-2 flex-1 flex-wrap'>
              {
                languages?.map(lang => (
                  <motion.li 
                    initial={{ opacity: 0, rotate: "360deg" }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1.4, type:"spring" }}
                    // viewport={{ once: true }}  
                    key={lang} className='bg-slate-400 text-center dark:bg-slate-500 dark:shadow dark:shadow-slate-600 font-mono text-sm dark:bg-opacity-30 bg-opacity-40 dark:text-white shadow rounded px-2 py-1 text-black ' >{lang}</motion.li>
                ))
              }
            </ul>
            <div className='flex gap-3 h-8'>
              {
                demo && (
                  <button className='rotate-30 bg-[#ffffff] bg-opacity-70 p-[1px] rounded shadow-md hover:rotate-12 transition-all duration-100'>
                    <a href={demo} target='_blank' title='demo'>
                      <svg height="30px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlnsketch="http://www.bohemiancoding.com/sketch/ns" xmlnsXlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#157EFB" id="icon-22-eye"><path d="M17,9 C8,9 4,16 4,16 C4,16 8,23.000001 17,23 C26,22.999999 30,16 30,16 C30,16 26,9 17,9 L17,9 Z M17,20 C19.2091391,20 21,18.2091391 21,16 C21,13.7908609 19.2091391,12 17,12 C14.7908609,12 13,13.7908609 13,16 C13,18.2091391 14.7908609,20 17,20 L17,20 Z M17,19 C18.6568543,19 20,17.6568543 20,16 C20,14.3431457 18.6568543,13 17,13 C15.3431457,13 14,14.3431457 14,16 C14,17.6568543 15.3431457,19 17,19 L17,19 Z M17,17 C17.5522848,17 18,16.5522848 18,16 C18,15.4477152 17.5522848,15 17,15 C16.4477152,15 16,15.4477152 16,16 C16,16.5522848 16.4477152,17 17,17 L17,17 Z" id="eye"/></g></g></svg>
                    </a>
                  </button>
                )
              }
              <button className='rotate-30 bg-slate-400 bg-opacity-70 py-[1px] rounded shadow-md hover:rotate-12 transition-all duration-100'>
                <a href={git} target='_blank'>
                  <svg height="30px" version="1.1" viewBox="0 0 60 60" width="60px" xmlns="http://www.w3.org/2000/svg" xmlnsketch="http://www.bohemiancoding.com/sketch/ns" xmlnsXlink="http://www.w3.org/1999/xlink"><title/><defs/><g fill="none" fillRule="evenodd" id="black" stroke="none" strokeWidth="1"><g id="github"><path d="M30,60 C46.5685433,60 60,46.5685433 60,30 C60,13.4314567 46.5685433,0 30,0 C13.4314567,0 0,13.4314567 0,30 C0,46.5685433 13.4314567,60 30,60 Z" fill="#000000"/><path d="M25.4252739,47.5168887 C25.4252739,47.0671729 25.4094072,45.8772272 25.4003405,44.2968305 C20.2651779,45.440294 19.1817051,41.7588994 19.1817051,41.7588994 C18.3419003,39.5719093 17.1314934,38.9897191 17.1314934,38.9897191 C15.4552838,37.8148801 17.2584274,37.8392833 17.2584274,37.8392833 C19.111438,37.9729198 20.0861102,39.7903759 20.0861102,39.7903759 C21.7328529,42.6827342 24.4064015,41.8483777 25.4592741,41.3638002 C25.6270084,40.1401549 26.1041445,39.3057984 26.6311475,38.8328415 C22.5318575,38.3552363 18.2217663,36.7306815 18.2217663,29.4771257 C18.2217663,27.4109894 18.941437,25.7213595 20.1223771,24.3977773 C19.9331093,23.9190101 19.2984391,21.9946447 20.3037115,19.3881523 C20.3037115,19.3881523 21.8541203,18.8791716 25.3799404,21.3287864 C26.8521487,20.9092841 28.4320244,20.6977898 30.0028333,20.6908175 C31.5702423,20.6977898 33.1489846,20.9092841 34.624593,21.3287864 C38.1481464,18.8791716 39.6962885,19.3881523 39.6962885,19.3881523 C40.7038276,21.9934827 40.0702907,23.917848 39.8798896,24.3977773 C41.0630963,25.7213595 41.7771004,27.4109894 41.7771004,29.4771257 C41.7771004,36.7492744 37.4602091,38.349426 33.3473191,38.8177347 C34.0114562,39.4022491 34.6007929,40.5573331 34.6007929,42.3236588 C34.6007929,44.8546176 34.5769927,46.8963506 34.5769927,47.5168887 C34.5769927,48.0235453 34.9101946,48.6115458 35.8474666,48.4267788 C43.176775,45.9190612 48.4615385,38.8281932 48.4615385,30.4683597 C48.4615385,20.0133386 40.1949581,11.5384615 29.9994333,11.5384615 C19.8050419,11.5384615 11.5384615,20.0133386 11.5384615,30.4683597 C11.5395949,38.8305174 16.8288917,45.9260335 24.1650001,48.4291029 C25.0875387,48.6022493 25.4252739,48.017735 25.4252739,47.5168887 Z" fill="#FFFFFF"/></g></g></svg>
                </a>
              </button>
            </div>

          </footer>
        </div>
    </div>
  )
}

export default Card;