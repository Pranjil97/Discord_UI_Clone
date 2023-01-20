import React from 'react'
import { Link } from 'react-router-dom'
import new_line from '../assets/new_line.png'
import empty_dm_list from '../assets/empty_dm_list.svg'
import discord_mini_icon from '../assets/discord_mini_icon.svg'
import no_online_friends from '../assets/no_online_friends.svg'
import plus_icon from '../assets/plus.svg'
import compass from '../assets/compass.svg'
// friends.svg
// nitro_icon.svg
// stage_discovery.svg




const Dashboard = () => {
  return (<>
    <div className="bg-gray-700 min-h-screen flex shrink">
      <div className='bg-gray-900 w-[100px] space-y-[20px] flex flex-col items-center'>
        <div className='h-[55px] w-[55px] rounded-2xl bg-[#5f6bf3] mt-[40px] flex justify-center'><img src={discord_mini_icon} alt='discord'/></div>
        <div className='h-[55px] w-[55px] rounded-2xl bg-gray-300'><img src={new_line} className='rounded-2xl' alt='new_line'/></div>
        <div className='h-[55px] w-[55px] rounded-full bg-gray-800 flex justify-center items-center'><img src={plus_icon} alt='plus' className='h-[22px]'/></div>
        <div className='h-[55px] w-[55px] rounded-full bg-gray-800 flex justify-center items-center'><img src={compass} alt='compass' className='h-[26px]'/></div>
        <div className='h-[55px] w-[55px] rounded-full bg-gray-800'></div>
      </div>
      <div className='bg-gray-800 w-[350px] p-4'>
        <input type="text" placeholder='Find or start a conversation' className='w-full font-medium bg-black text-white mt-[10px] p-2 text-[14px] h-[30px]' />
        <div className='p-4 flex flex-col text-white space-y-2 mt-[10px] font-medium'>
          <span>Friends</span>
          <span>Stage Discovery</span>
          <span>Nitro</span>
        </div>
        <div className=''>
          <div className='flex'>
            <div className='uppercase text-white mt-[30px] font-medium'>Direct Messages</div>
            <div className='mt-[30px] ml-auto text-white'>plus icon</div>
          </div>
          <div className='mt-[20px] bg-white h-[650px] text-white'>
            <img src={empty_dm_list}/>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col shrink'>
          <nav className="text-white space-x-[35px] space-y-[18px] font-medium  h-[70px]">
            <Link className='ml-[60px]'>Friends</Link>
            <Link>Online</Link>
            <Link className='opacity-[50%]'>All</Link>
            <Link className='opacity-[50%]'>Pending</Link>
            <Link className='opacity-[50%]'>Blocked</Link>
            <button className='bg-green-600 rounded text-[14px]  h-[30px] w-[100px]'>Add Friend</button>
          </nav>
        <div className='bg-black h-[2px] w-full opacity-[20%]'></div>
        <div className=' h-full w-full flex'>
          <div className='w-full flex flex-col text-white justify-center place-items-center'>
            <div className='h-[300px] w-[500px] text-black'><img src={no_online_friends} alt='online'/></div>
            <p className='text-gray-400 text-[20px]'>No one's around to play with Wumpus.</p>
          </div>
          <div className='w-[1px] opacity-[15%] bg-white'>white line</div>
          <div className='w-[700px] text-white p-6 flex flex-col'>
            <div className='font-medium text-[30px]'>Active Now</div>
            <div className='font-medium w-full text-[22px] mt-[30px] text-center'>It's quite for now...</div>
            <p className='text-gray-400 w-[450px] text-[18px] text-center mx-auto mt-[20px]'>When a friend starts an activity--like playing a game or hanging out on voice--we'll show it here!</p>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Dashboard