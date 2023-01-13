import React from 'react'
import qr from '../assets/qr_code.png'

const Login = () => {
  return (
    <div id='login' className='bg-black w-full h-[100vh] flex justify-center place-items-center'>
        <div className='bg-gray-700 h-[400px] w-[780px] flex space-x-2 rounded'>
            <div className='text-white bg-gray-700 w-full flex flex-col place-items-center rounded'>
                <h1 className='mt-[25px] text-[25px] font-medium ml-[10px]'>Welcome back!</h1>
                <span className='text-gray-400 mt-2 text-[14px] '>We're so excited to see you again!</span>
                <form className='flex flex-col w-[400px] ml-[30px] mt-[15px]'>
                    <span className='uppercase flex font-bold text-[12px] text-gray-300 mb-[5px]'>email or phone number<div className='text-red-600'>*</div></span>
                    <input type='email' className='bg-zinc-900 h-[40px] rounded mt-[6px]'/>
                    <span className='text-[13px] flex font-medium mt-[15px] uppercase text-gray-400 mb-[5px]'>password<div className='text-red-600'>*</div></span>
                    <input type='password' className='bg-zinc-900 h-[40px] rounded'/>
                    <a className='text-[#00b0f4] text-[14px] mt-[2px]'>Forgot your password?</a>
                    <button className='w-[400px] h-[40px] bg-[#515ff7] mt-[20px] font-medium text-[15px]'>Log In</button>
                    <span className='text-[14px] text-gray-400 mt-[5px]'>Need an account?<a className='text-[#00b0f4] font-medium ml-[5px]'>Register</a></span>
                </form>
            </div>


            <div className='text-white bg-gray-700 w-[580px] flex flex-col justify-center place-items-center'>
                <div className='bg-white h-[180px] w-[180px] flex justify-center place-items-center rounded-md '><img src={qr}/></div>
                <span className='text-[22px] font-medium mt-[25px]'>Log in with QR Code</span>
                <span className='w-[250px]  text-center text-gray-300 mt-[6px] text-[15px]'>Scan this with the <span className='font-bold'> Discord mobile app</span> to log in instantly</span>
            </div>
        </div>
    </div>
  )
}

export default Login