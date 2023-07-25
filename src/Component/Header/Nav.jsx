import React, {useState} from 'react';
import "./Nav.css"
import useDarkMode from '../useDarkMode/useDarkMode';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Nav = () => {
    const [colorTheme, setTheme] = useDarkMode();


  return (
    <>
        <div className='font-elite dark:bg-opacity-75 bg-opacity-75 sticky shadow-md top-0 z-10 bg-slate-100 dark:text-white flex items-center justify-between p-3 dark:bg-slate-600'>
            <div className="flex font-dancing tracking-wide">
                <p className='text-4xl inline underline underline-offset-8 decoration-green-600 dark:decoration-blue-500'>Jinn </p><p className='dark:text-green-500 text-blue-800 text-2xl pt-2'> .dev</p>
            </div>
            <div>
                <ul className='hidden md:flex items-center'>
                    <li id='underline-effect' onClick={e => window.scrollTo(0,0)} className='px-2 transition-all text-blue-700 font-mont font-bold text-md underline-offset-1 dark:text-[silver] duration-500 py-1 bottom-0 relative cursor-pointer' >Home</li>
                    <li id='underline-effect' className='px-2 font-mont font-bold transition-all text-blue-700 dark:text-[silver] duration-500 py-1 underline-offset-1 bottom-0 relative cursor-pointer text-md' >
                        <a href="#experience">
                            Experience
                        </a>
                    </li>
                    <li id='underline-effect' className='px-2 font-mont font-bold transition-all text-blue-700 dark:text-[silver] duration-500 py-1 underline-offset-1 bottom-0 relative cursor-pointer text-md' >
                        <a href="#project">
                            Projects
                        </a>
                    </li>
                    <li id='underline-effect' className='px-2 font-mont font-bold transition-all text-blue-700 dark:text-[silver] duration-500 py-1 underline-offset-1 bottom-0 relative cursor-pointer text-md' >
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>

                <ul className='flex md:hidden'>
                    <li onClick={e => window.scrollTo(0,0)} id='nav-items-eff' className='px-3 relative transition-all text-gray-700 dark:text-white py-3 bottom cursor-pointer'>
                        <HomeIcon />
                    </li>
                    <li id='nav-items-eff' className='px-3 relative transition-all text-gray-700 dark:text-white py-3 bottom cursor-pointer'>
                        <a href="#experience">
                            <EngineeringIcon />
                        </a> 
                    </li>
                    <li id='nav-items-eff' className='px-3 relative transition-all text-gray-700 dark:text-white py-3 bottom cursor-pointer'>
                        <a href="#project">
                            <HomeRepairServiceIcon />
                        </a> 
                    </li>
                    <li id='nav-items-eff' className='px-3 relative transition-all text-gray-700 dark:text-white py-3 bottom cursor-pointer'>
                        <a href="#contact">
                            <ContactSupportIcon />
                        </a> 
                    </li>
                </ul>
            </div>

            <div id='theme-switch' className='relative border-gray-500 dark:border-white cursor-pointer flex w-[50px] h-[25px] rounded-full border bg-white overflow-hidden'>
                <div className='w-[45%] h-full rounded-full overflow-hidden absolute transition-all duration-200 ease-linear' onClick={i => setTheme(colorTheme)} style={
                    colorTheme === "dark" ? {
                        transform: "translateX(0)"
                    } : {
                        transform: "translateX(100%)"
                    }
                }>
                {
                colorTheme !== "dark" ? (
                        <svg version="1.1" viewBox="0 0 128 128" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Layer_1"><rect fill="#F4F5F5" height="1520" opacity="0" width="727.938" x="-379.984" y="-731"/></g><g id="Layer_2"><g><circle cx="64" cy="64" fill="#007DB9" r="64"/><g><defs><circle cx="64" cy="64" id="SVGID_85_" r="64"/></defs><clipPath id="SVGID_2_"><use overflow="visible" xlinkHref="#SVGID_85_"/></clipPath><polygon clipPath="url(#SVGID_2_)" fill="#0071B1" points="94.898,43.704 128,76.563 128,128 57.735,128 22.193,92.504    "/><polygon clipPath="url(#SVGID_2_)" fill="#006DAD" points="106.318,67 128,88.555 128,128 57.735,128 22.193,92.504    "/></g><circle cx="47.36" cy="46.722" fill="#FFCC07" r="25.167"/><circle cx="47.36" cy="46.722" fill="#F4EC4E" r="17.182"/><circle cx="47.36" cy="46.722" fill="#F5ECDF" r="8.682"/><path d="M97.633,62.205c0.681-2.096,1.061-4.327,1.061-6.65c0-11.874-9.626-21.5-21.5-21.5    c-9.046,0-16.772,5.593-19.947,13.504c-2.813-1.787-6.14-2.837-9.72-2.837c-10.009,0-18.124,8.095-18.163,18.095    c-6.995,2.527-12.169,9.205-12.169,17.071c0,9.967,7.805,18.05,17.805,18.157V98h58.527c10.033,0,18.167-8.106,18.167-18.139    C111.693,71.242,105.685,64.069,97.633,62.205z" fill="#6AC5F0"/><path d="M57.247,47.559c-2.813-1.787-6.14-2.837-9.72-2.837c-10.009,0-18.124,8.095-18.163,18.095    c-6.995,2.527-12.169,9.205-12.169,17.071c0,3.964,1.25,7.618,3.366,10.603c-0.942-2.244-1.469-4.714-1.469-7.314    c0-8.001,5.499-14.795,12.624-17.365c0.04-10.172,8.306-18.407,18.502-18.407c3.646,0,7.036,1.068,9.901,2.886    c3.234-8.047,11.104-13.736,20.319-13.736c4.056,0,7.851,1.105,11.109,3.024c-3.808-3.423-8.828-5.524-14.352-5.524    C68.148,34.055,60.421,39.648,57.247,47.559z" fill="#A8DBEE"/><path d="M73.519,67.819c-1.978-1.257-4.317-1.995-6.834-1.995c-7.037,0-12.742,5.691-12.77,12.722    c-4.918,1.776-8.556,6.472-8.556,12.002c0,2.787,0.879,5.356,2.366,7.454c-0.662-1.577-1.033-3.314-1.033-5.142    c0-5.625,3.866-10.402,8.876-12.209c0.028-7.152,5.84-12.941,13.008-12.941c2.564,0,4.947,0.751,6.961,2.029    c2.274-5.657,7.807-9.657,14.285-9.657c2.851,0,5.52,0.777,7.81,2.126c-2.677-2.407-6.207-3.884-10.09-3.884    C81.183,58.326,75.751,62.258,73.519,67.819z" fill="#A8DBEE"/></g></g></svg>                    
                    ) : (    
                        <svg className='bg-blue-500 w-full h-full p-[0.5px]' viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path fill='yellow' d="M342.8 352.7c5.7-9.6 9.2-20.7 9.2-32.7 0-35.3-28.7-64-64-64-17.2 0-32.8 6.9-44.3 17.9-16.3-29.6-47.5-49.9-83.7-49.9-53 0-96 43-96 96 0 2 .5 3.8.6 5.7C27.1 338.8 0 374.1 0 416c0 53 43 96 96 96h240c44.2 0 80-35.8 80-80 0-41.9-32.3-75.8-73.2-79.3zm222.5-54.3c-93.1 17.7-178.5-53.7-178.5-147.7 0-54.2 29-104 76.1-130.8 7.3-4.1 5.4-15.1-2.8-16.7C448.4 1.1 436.7 0 425 0 319.1 0 233.1 85.9 233.1 192c0 8.5.7 16.8 1.8 25 5.9 4.3 11.6 8.9 16.7 14.2 11.4-4.7 23.7-7.2 36.4-7.2 52.9 0 96 43.1 96 96 0 3.6-.2 7.2-.6 10.7 23.6 10.8 42.4 29.5 53.5 52.6 54.4-3.4 103.7-29.3 137.1-70.4 5.3-6.5-.5-16.1-8.7-14.5z"/></svg>
                    )
                }
                </div>
            </div>
          
        </div>
    </>
  )
}

export default Nav;