import React from 'react'
import icon from '../assets/discord_main_logo.svg'
import Sidebar from './Sidebar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [show, setShow] = useState(false)

    return (
        <div className='bg-[#5865f2] h-20 flex my-auto justify-center shrink'>
            <img src={icon} alt="discord" className='h-[35px] my-auto' />
            <span className="invisible lg:visible text-base font-medium text-white my-auto xl:mx-[200px] lg:mx-[60px] ">
                <a href="" className='mx-5 hover:underline'>Download</a>
                <a href="" className='mx-5 hover:underline'>Nitro</a>
                <a href="" className='mx-5 hover:underline'>Discover</a>
                <a href="" className='mx-5 hover:underline'>Safety</a>
                <a href="" className='mx-5 hover:underline'>Support</a>
                <a href="" className='mx-5 hover:underline'>Blog</a>
                <a href="" className='mx-5 hover:underline'>Careers</a>
            </span>
            
            {show ? <Sidebar show={show} setShow={setShow}/> : <>
            <Link to='/login'><button className='h-10 w-16 md:text-[13px] font-normal rounded-full bg-white text-black hover:text-blue-700 hover:shadow-blue-900 my-[22px]'>Login</button></Link>
            <button data-collapse-toggle="navbar-hamburger" type="button" className="visible xl:invisible lg:invisible inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                <svg onClick={()=>setShow(!show)} className="w-9 h-9" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button></>}
  </div>
    )
}

export default Navbar;