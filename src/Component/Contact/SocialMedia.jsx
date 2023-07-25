import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMedia = () => {
  return (
    <div className='fixed bottom-0 right-0 p-3' >
        <ul className=''>
            <li className='my-5'>
                <a href="https://www.linkedin.com/in/wan-na-aung-34125b24b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVxwcOCeWQ7SEDvILW9jBUA%3D%3D" target='_blank'>
                    <LinkedInIcon className='dark:text-white text-black dark:hover:text-pink-500 hover:text-green-500 cursor-pointer rounded' fontSize='large' />
                </a>
            </li>
            <li className='my-5'>
                <a href="https://www.facebook.com/profile.php?id=100072451180463" target='_blank'>
                    <FacebookIcon className='dark:text-white text-black dark:hover:text-pink-500 hover:text-green-500 cursor-pointer rounded' fontSize='large' />
                </a>
            </li>
            <li className='my-5'>
                <a href="https://discord.com/channels/@me" target='_blank'>
                    <img src="/discord.png"  className='dark:text-white text-black w-9 h-9 dark:hover:text-pink-500 hover:text-green-500 cursor-pointer rounded' alt="" />
                </a>                
          </li>
            <li className='my-5'>
                <a href="https://t.me/Jinn021" target='_blank'>
                    <TelegramIcon className='dark:text-white text-black dark:hover:text-pink-500 hover:text-green-500 cursor-pointer rounded' fontSize='large' />
                </a>
            </li>
            <div className='h-[50px] rounded w-[3px] bg-black dark:bg-white mx-auto'></div>
        </ul>
    </div>
  )
}

export default SocialMedia;