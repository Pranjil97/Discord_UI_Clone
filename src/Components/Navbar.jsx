import React from 'react'
import icon from '../assets/discord_main_logo.svg'

const Navbar = () => {
    return (
        <div className='bg-[#5865f2] h-20 flex my-auto justify-center'>
            <img src={icon} alt="discord" className='h-[35px] my-auto ' />
            <span className="text-base font-medium text-white my-auto mx-[200px]">
                <a href="" className='mx-5 hover:underline'>Download</a>
                <a href="" className='mx-5 hover:underline'>Nitro</a>
                <a href="" className='mx-5 hover:underline'>Discover</a>
                <a href="" className='mx-5 hover:underline'>Safety</a>
                <a href="" className='mx-5 hover:underline'>Support</a>
                <a href="" className='mx-5 hover:underline'>Blog</a>
                <a href="" className='mx-5 hover:underline'>Careers</a>
            </span>
            <button className='h-10 w-16 rounded-full bg-white text-black hover:text-blue-900 hover:shadow-blue-900 my-auto'>Login</button>
        </div>
    )
}

export default Navbar;