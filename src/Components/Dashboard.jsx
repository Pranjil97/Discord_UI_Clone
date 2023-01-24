import React from "react";
import { Link } from "react-router-dom";
import new_line from "../assets/new_line.png";
import discord_mini_icon from "../assets/discord_mini_icon.svg";
import no_online_friends from "../assets/no_online_friends.svg";
import plus_icon from "../assets/plus.svg";
import compass from "../assets/compass.svg";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-700 min-h-screen flex shrink">
        <div className="bg-gray-900 w-[100px] space-y-[20px] flex flex-col items-center">
          <div className="h-[55px] w-[55px] rounded-2xl bg-[#5f6bf3] mt-[40px] flex justify-center">
            <img src={discord_mini_icon} alt="discord" />
          </div>
          <div className="h-[55px] w-[55px] rounded-2xl bg-gray-300">
            <img src={new_line} className="rounded-2xl" alt="new_line" />
          </div>
          <div className="h-[55px] w-[55px] rounded-full bg-gray-800 flex justify-center items-center">
            <img src={plus_icon} alt="plus" className="h-[22px]" />
          </div>
          <div className="h-[55px] w-[55px] rounded-full bg-gray-800 flex justify-center items-center">
            <img src={compass} alt="compass" className="h-[26px]" />
          </div>
        </div>
        <div className="bg-gray-800 w-[350px] p-4">
          <input
            type="text"
            placeholder="Find or start a conversation"
            className="w-full font-medium bg-black text-white mt-[10px] p-2 text-[14px] h-[30px]"
          />
          <div className="flex flex-col text-white space-y-[25px] mt-[20px] ml-[10px] font-medium">
            <span className="flex bg-gray-700 h-[30px]">
              <div>
                <svg
                  className="h-[20px] mr-[10px] mt-[5px]"
                  aria-hidden="false"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill="currentColor"
                      fill-rule="nonzero"
                      d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                      transform="translate(2 4)"
                    ></path>
                    <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                  </g>
                </svg>
              </div>
              <div className="mt-[5px]">Friends</div>
            </span>
            <span className="flex">
              <div>
                <svg
                  className="h-[20px] mr-[10px] opacity-50"
                  aria-hidden="false"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="opacity-50">Stage Discovery</div>
            </span>
            <span className="flex">
              <div>
                <svg
                  className="h-[20px] mr-[10px] opacity-50"
                  aria-hidden="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                  ></path>
                </svg>
              </div>
              <div className="opacity-50">Nitro</div>
            </span>
          </div>
          <div className="">
            <div className="flex">
              <div className="uppercase text-white mt-[30px] font-medium">
                Direct Messages
              </div>
              <div className="mt-[30px] ml-auto text-white">
                <svg
                  width="20px"
                  fill="white"
                  height="20px"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
                </svg>
              </div>
            </div>
            <div className="mt-[20px] h-[650px] ">
              <div className="mt-[10px] p-2">
                <svg className="h-[550px] opacity-30" viewBox="0 0 184 428">
                  <rect x="40" y="6" width="144" height="20" rx="10"></rect>
                  <circle cx="16" cy="16" r="16"></circle>
                  <rect
                    x="40"
                    y="50"
                    width="144"
                    height="20"
                    rx="10"
                    opacity="0.9"
                  ></rect>
                  <circle cx="16" cy="60" r="16" opacity="0.9"></circle>
                  <rect
                    x="40"
                    y="94"
                    width="144"
                    height="20"
                    rx="10"
                    opacity="0.8"
                  ></rect>
                  <circle cx="16" cy="104" r="16" opacity="0.8"></circle>
                  <rect
                    x="40"
                    y="138"
                    width="144"
                    height="20"
                    rx="10"
                    opacity="0.7"
                  ></rect>
                  <circle cx="16" cy="148" r="16" opacity="0.7"></circle>
                  <rect
                    x="40"
                    y="182"
                    width="144"
                    height="20"
                    rx="10"
                    opacity="0.6"
                  ></rect>
                  <circle cx="16" cy="192" r="16" opacity="0.6"></circle>
                  <rect
                    x="40"
                    y="226"
                    width="144"
                    height="20"
                    rx="10"
                    opacity="0.5"
                  ></rect>
                  <circle cx="16" cy="236" r="16" opacity="0.5"></circle>
                  <rect
                    x="40"
                    y="270"
                    width="144"
                    height="20"
                    rx="10"
                    opacity="0.4"
                  ></rect>
                  <circle cx="16" cy="280" r="16" opacity="0.4"></circle>
                  <rect
                    x="40"
                    y="314"
                    width="144"
                    height="20"
                    rx="10"
                    opacity="0.3"
                  ></rect>
                  <circle cx="16" cy="324" r="16" opacity="0.3"></circle>
                  <rect
                    x="40"
                    y="358"
                    width="144"
                    height="20"
                    rx="10"
                    opacity="0.2"
                  ></rect>
                  <circle cx="16" cy="368" r="16" opacity="0.2"></circle>
                  <rect
                    x="40"
                    y="402"
                    width="144"
                    height="20"
                    rx="10"
                    opacity="0.1"
                  ></rect>
                  <circle cx="16" cy="412" r="16" opacity="0.1"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col shrink">
          <nav className="text-white space-x-[35px] flex space-y-[18px] font-medium  h-[70px]">
            <Link className="ml-[60px] flex mt-[18px]">
              <svg
                className="h-[26px] mt-[2px] mr-[15px] opacity-50 -ml-[50px]"
                aria-hidden="false"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="currentColor"
                    fill-rule="nonzero"
                    d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                    transform="translate(2 4)"
                  ></path>
                  <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                </g>
              </svg>
              <div>Friends</div>
            </Link>
            <Link>Online</Link>
            <Link className="opacity-[50%]">All</Link>
            <Link className="opacity-[50%]">Pending</Link>
            <Link className="opacity-[50%]">Blocked</Link>
            <button className="bg-green-600 rounded text-[14px]  h-[30px] w-[100px]">
              Add Friend
            </button>
          </nav>
          <div className="bg-black h-[2px] w-full opacity-[20%]"></div>
          <div className=" h-full w-full flex">
            <div className="w-full flex flex-col text-white justify-center place-items-center">
              <div className="h-[300px] w-[500px] text-black">
                <img src={no_online_friends} alt="online" />
              </div>
              <p className="text-gray-400 text-[20px]">
                No one's around to play with Wumpus.
              </p>
            </div>
            <div className="w-[1px] opacity-[15%] bg-white">white line</div>
            <div className="w-[700px] text-white p-6 flex flex-col">
              <div className="font-medium text-[30px]">Active Now</div>
              <div className="font-medium w-full text-[22px] mt-[30px] text-center">
                It's quite for now...
              </div>
              <p className="text-gray-400 w-[450px] text-[18px] text-center mx-auto mt-[20px]">
                When a friend starts an activity--like playing a game or hanging
                out on voice--we'll show it here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
