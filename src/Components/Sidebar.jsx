import React from "react";
import logo from "../assets/discord_main_logo2.svg";
import download from "../assets/download.svg";
import morethan from "../assets/morethan.png";

const Sidebar = (props) => {
  const { show, setShow } = props;

  return (
    <aside
      class="sm:ml-[191px] sm:flex sm:flex-wrap w-[700px]"
      aria-label="Sidebar"
    >
      <div class="sm:absolute sm:w-[320px]  relative px-3 w-[380px] min-h-screen py-4 overflow-y-auto rounded-lg bg-gray-50 dark:bg-gray-800">
        <div className="flex p-3">
          <img src={logo} className="mr-[120px] h-[32px]" />
          <svg
            onClick={() => setShow(!show)}
            className="h-[16px] cursor-pointer"
            aria-hidden="true"
            viewBox="0 0 20 20"
          >
            <path d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
          </svg>
        </div>
        <div className="h-[1.4px] mt-[20px] w-[240px] bg-gray-200"></div>
        <ul class="mt-[20px]">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:underline "
            >
              <span className="ml-3 text-[#00b0f4]">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:underline "
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Download</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:underline "
            >
              <span class="flex-1 ml-3 whitespace-nowrap">Nitro</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:underline "
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Discover</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex w-[30px] items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:underline "
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Safety</span>
              <img src={morethan} className="ml-[8px]" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex w-[30px] items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:underline "
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Mod Academy</span>
              <img src={morethan} className="ml-[8px]" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:underline "
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Supports</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:underline "
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Blog</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:underline "
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Careers</span>
            </a>
          </li>
        </ul>
        <button className="relative mt-[420px] xl:h-[50px] lg:h-[50px] md:h-[38px] w-[270px] xl:text-[17px] lg:text-[17px] md:text-[15px] bg-[#5865f2] m-2 rounded-full text-white flex justify-center hover:bg-[#858ef3] hover:shadow-lg hover:shadow-gray-300">
          <img
            src={download}
            className=" xl:h-[18px] lg:h-[18px] md:invisible m-2 my-auto"
          />
          <p className="my-auto xl:font-medium lg:font-medium md:font-normal">
            Download for Windows
          </p>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
