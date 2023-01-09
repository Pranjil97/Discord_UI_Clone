import React from 'react'
import download from '../assets/download.svg'

const LandingPage = (props) => {


    return (
        <div className='bg-[#5865f2]  w-full h-[500px] text-center fixed'>
            <div style={{fontFamily:"sans-serif"}} className='h-[60px] text-[70px] text-white uppercase font-bold -ml-[30px] mt-[60px]'>Imagine a place...</div>
            <p className='mt-[60px] align-middle indent-0.5 w-[820px] text-[20px] mx-auto text-white text-center block'>...where you can belong to a school club, a gaming group, or a worldwide art community.
             Where just you and a handful of friends can spend time together.
             A place that makes it easy to talk every day and hang out more often.</p>
            <div className='h-16 w-[700px] mx-auto mt-6 flex'>
                <button className='h-[60px] w-[300px] text-[20px] bg-white m-2 rounded-full text-black flex items-cente justify-center hover:text-blue-600'><img src={download} className=" h-[22px] m-2 my-auto"/><p className='my-auto'>Download for Windows</p></button>
                <button className='h-[60px] w-[340px] text-[20px]  bg-slate-800 m-2 ml-[10px] rounded-full text-white hover:bg-slate-700 shadow-2xl shadow-slate-700'>Open Discord in your browser</button>
            </div>
        </div>
    )
}

export default LandingPage