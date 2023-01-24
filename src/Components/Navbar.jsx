import React from "react";
import icon from "../assets/discord_main_logo.svg";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-[#5865f2] sm:h-20 sm:flex 2xl:h-20 2xl:flex 2xl:place-items-center 2xl:justify-center ">
      <img
        src={icon}
        alt="discord"
        className=" sm:h-[35px] sm:mt-[20px] 2xl:h-[35px] 2xl:my-auto 2xl:ml-[300px] sm:ml-[20px]"
      />
      <div className="hidden lg:contents 2xl:contents lg:text-base font-medium text-white">
        <a href="" className="mx-5 2xl:ml-[200px] hover:underline">
          Download
        </a>
        <a href="" className="mx-5 hover:underline">
          Nitro
        </a>
        <a href="" className="mx-5 hover:underline">
          Discover
        </a>
        <a href="" className="mx-5 hover:underline">
          Safety
        </a>
        <a href="" className="mx-5 hover:underline">
          Support
        </a>
        <a href="" className="mx-5 hover:underline">
          Blog
        </a>
        <a href="" className="mx-5 2xl:mr-[200px] hover:underline">
          Careers
        </a>
      </div>

      {show ? (
        <Sidebar show={show} setShow={setShow} />
      ) : (
        <>
          <Link to="/login">
            <button className="sm:ml-[360px] sm:text-[13px] h-10 w-16 md:text-[13px] 2xl:ml-[0px] font-normal rounded-full bg-white text-black hover:text-blue-700 hover:shadow-blue-900 my-[22px]">
              Login
            </button>
          </Link>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="visible sm:visible sm:mr-[280px] sm:ml-[10px] xl:invisible lg:invisible inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <svg
              onClick={() => setShow(!show)}
              className="w-9 h-9"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default Navbar;
