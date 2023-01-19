import React, { useState } from 'react'
import discord from '../assets/discord_main_logo.svg'
const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission here
    console.log(username, email, password);
  }

  return (
    <div id='register' className='bg-black w-full h-[100vh] flex justify-center xl:place-items-center'>
      <div className='bg-[#36393f] h-full w-full flex flex-col xl:w-[500px] xl:h-[550px]'>
        <div className=' w-full flex flex-col mt-[20px] xl:mt-[10px]'>
          <img src={discord} className='mt-[25px] h-[38px]' />
          <div className='text-white font-medium mt-[60px] text-[23px] mx-auto xl:mt-[30px]'>Create an account</div>

          <form action={handleSubmit} className=" p-6 w-full">
            <div className="mb-4">
              <label className="block text-slate-500 font-medium font-medium mb-2 uppercase" htmlFor="email">
                Email
              </label>
              <input
                className=" text-white bg-gray-900 p-2 w-full border-hidden"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-slate-500 font-medium font-medium mb-2 uppercase" htmlFor="username">
                Username
              </label>
              <input
                className="text-white bg-gray-900 p-2 w-full border-hidden"
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /></div>

            <div className="mb-4">
              <label className="block text-slate-500 font-medium font-medium mb-2 uppercase" htmlFor="password">
                Password
              </label>
              <input
                className="text-white bg-gray-900 border-hidden p-2 w-full"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-blue-500 font-medium w-full text-white py-2 px-4 rounded hover:bg-blue-600">
              Continue
            </button>
            <div className='text-[12px] text-[#00b0f4] mt-[10px]'>Already have an account !</div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Register