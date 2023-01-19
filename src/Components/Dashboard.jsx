import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (<>
    <div className="bg-gray-200 min-h-screen flex">
      <div className='bg-orange-300 w-[80px]'>icon bar</div>
      <div className='bg-red-300 w-[350px]'>search bar</div>
      <div className='bg-purple-400 w-full'>
        <div className=" h-[15px]">
          <nav className="bg-black p-2 text-white space-x-[35px] font-medium">
            <Link className='ml-[60px]'>Friends</Link>
            <Link>Online</Link>
            <Link>All</Link>
            <Link>Pending</Link>
            <Link>Blocked</Link>
            <button className='bg-green-600 rounded text-[12px] p-2 h-[30px]'>Add Friend</button>
          </nav>
        </div>
      </div>
    </div>
  </>)
}

export default Dashboard