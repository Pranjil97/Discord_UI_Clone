import React from 'react'
import download from '../assets/download.svg'
import invite from '../assets/invite_only_landing.svg'
import voice from '../assets/hanging_out_easy_landing.svg'
import fandom from '../assets/fandom_landing.svg'
import chillin from '../assets/just_chiling_landing.svg'
import stars from '../assets/tiny_stars_landing.svg'
import downloadwhite from '../assets/downloadicon_white.png'
import cloudbg from '../assets/center_bg_landing_header.svg'
import '../App.css'
import Footer from "../Components/Footer";

const LandingPage = (props) => {


    return (

    <div className='bg-[#5865f2] w-full h-[600px] flex flex-col'>
        <div className='h-[400px] w-[1280px] flex xl:flex-col lg:flex-col md:flex-col sm:flex-col  xl:mb-[150px] lg:mb-[150px] md:mb-[220px] sm-[200px] text-center xl:p-20 lg:p-20 md:p-16 sm:p-16 xl:justify-center mx-auto'>
                <div style={{fontFamily:"sans-serif"}} className='flex-none xl:h-[90px] xl:w-[900px] xl:text-[70px] lg:text-[70px]  text-white uppercase font-bold xl:mx-auto lg:mx-auto lg:w-[700px] md:w-[400px] md:text-left md:text-[50px] 2xl:ml-[230px]'>Imagine a place...</div>
                <p className=' text-white text-center xl:mt-[25px] xl:mx-auto lg:mt-[25px] md:mt-[25px] xl:align-middle lg:align-middle  xl:indent-0.5 lg:indent-0.5 2xl:w-[760px] xl:w-[760px] xl:text-[18px] lg:text-[18px] lg:w-[760px] lg:mx-auto md:text-left md:w-[540px] flex shrink-1 md:text-[20px] 2xl:ml-[230px]'>...where you can belong to a school club, a gaming group, or a worldwide art community.
                Where just you and a handful of friends can spend time together.
                A place that makes it easy to talk every day and hang out more often.</p>
                <div className='xl:h-16 lg:h-16 md:h-[150px] w-[680px] xl:mx-autolg:mx-auto md:mx-0 mt-6 xl:flex lg:flex lg:justify-center xl:justify-center 2xl:ml-[200px] 2xl:mt-[50px]'>
                    <button className='xl:h-[50px] lg:h-[50px] md:h-[58px] w-[270px] text-[17px] bg-white m-2 rounded-full text-black flex justify-center hover:text-blue-600'><img src={download} className=" h-[18px] m-2 my-auto"/><p className='my-auto font-medium'>Download for Windows</p></button>
                    <button className='xl:h-[50px] lg:h-[50px] md:h-[56px] w-[290px] text-[17px] bg-slate-800 xl:m-4 xl:ml-[10px] lg:ml-[10px] md:-ml-[360px] rounded-full text-white hover:bg-slate-700 xl:shadow-2xl xl:shadow-slate-700 font-medium 2xl:mt-[8px]'>Open Discord in your browser</button>
                </div>    
        </div>

        <div className='w-full h-[670px] bg-white'>
            <div className='h-[650px] w-[1280px] mx-auto flex justify-center pt-[90px] md:flex'>
                <div className=' h-[460px] w-[1200px] mt-[10px] flex'>
                    <img src={invite} alt="" className='h-[450px]'/>
                    <div className=' w-full p-5 text-center lg: xl:ml-[50px]'>
                        <h3 className='text-[44px] xl:w-[430px] xl:p-8 h-[250px] mx-auto font-bold text-left lg:w-[410px] lg:p-8'>Create an invite-only place where you belong</h3>
                        <p className='text-[19px] pl-8 w-[420px] mx-auto text-left text-gray-900 font-normal md:mt-[50px] xl:mt-0'>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full h-[650px] bg-gray-100'>
            <div className='h-[650px] w-[1280px] mx-auto flex justify-center pt-[90px]'>
                <div className=' h-[460px] w-[1200px] mt-[10px] flex'>
                <div className=' w-full p-5 text-center  mt-[16px]'>
                        <h3 className='text-[40px] w-[350px] h-[150px] font-bold text-left  mt-[65px]'>Where hanging out is easy</h3>
                        <p className='text-[19px] w-[390px] text-left text-gray-900 font-normal'>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
                    </div>
                    <img src={voice} alt="" className='h-[455px]'/>
                </div>
            </div>
        </div>


        <div className='w-full h-[650px] bg-white'>
            <div className='h-[650px] w-[1280px] mx-auto flex justify-center pt-[90px]'>
                <div className=' h-[460px] w-[1200px] mt-[10px] flex'>
                    <img src={fandom} alt="" className='h-[450px]'/>
                    <div className=' w-full p-5 text-center ml-[55px]'>
                        <h3 className='text-[44px] w-[430px] h-[190px] mt-[22px] mx-auto font-bold text-left p-8'>From few to a fandom</h3>
                        <p className='text-[19px] pl-8 w-[420px] mx-auto text-left text-gray-900 font-normal'>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                    </div>
                </div>
            </div>
        </div>


        <div className='w-full h-[1240px] bg-gray-100'>
                <div className='h-[650px] w-[1280px] flex flex-col mx-auto justify-center mt-[150px] items-center '>
                    <div className='h-[150px] text-center flex flex-col items-center'>
                        <span className='text-[52px] font-extrabold'>RELIABLE TECH FOR STAYING CLOSE</span>
                        <p className=' mt-3 w-[1000px] text-[19px] text-gray-900'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                    </div>
                    <img src={chillin} alt="" className='h-[690px]' />
                </div>

                <div className='h-[250px] w-[1280px] flex flex-col mx-auto justify-center items-center mt-[130px] '>
                    <img src={stars} className='h-[48px]  mx-auto'/>
                    <h1 className='-mt-[29px] w-[500px] mx-auto text-[31px] font-bold text-center'>Ready to start your journey?</h1>
                    <button className=' mt-[35px] h-[55px] w-[290px] text-[18px] bg-[#5865f2] rounded-full text-white flex items-cente justify-center p-2 font-medium '><img src={downloadwhite} className=" h-[37px] m-2 my-auto"/><p className='my-auto'>Download for Windows</p></button>
                </div>
            </div>
        <div>
    </div>
        <Footer/>   
    </div>
    )
}

export default LandingPage