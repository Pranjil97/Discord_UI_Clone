import React from "react";
import download from "../assets/download.svg";
import invite from "../assets/invite_only_landing.svg";
import voice from "../assets/hanging_out_easy_landing.svg";
import fandom from "../assets/fandom_landing.svg";
import chillin from "../assets/just_chiling_landing.svg";
import stars from "../assets/tiny_stars_landing.svg";
import downloadwhite from "../assets/downloadicon_white.png";
import cloudbg from "../assets/center_bg_landing_header.svg";
import "../App.css";
import Footer from "../Components/Footer";

const LandingPage = (props) => {
  return (
    <div className="bg-[#5865f2] sm:h-full sm:w-full w-full h-[600px] flex flex-col">
      <div className="sm:w-full h-[400px] w-[1280px] flex xl:flex-col lg:flex-col md:flex-col sm:flex-col  xl:mb-[150px] lg:mb-[150px] md:mb-[220px] sm-[200px] text-center xl:p-20 lg:p-20 md:p-16 sm:p-16 xl:justify-center mx-auto 2xl:flex 2xl:place-items-center 2xl:justify-center">
        <div
          style={{ fontFamily: "sans-serif" }}
          className="sm:w-[400px] sm:text-[40px] sm:-ml-[40px] flex-none xl:h-[90px] xl:w-[900px] xl:text-[70px] lg:text-[70px]  text-white uppercase font-bold xl:mx-auto lg:mx-auto lg:w-[700px] md:w-[400px] md:text-left md:text-[50px] 2xl:w-[700px]"
        >
          Imagine a place...
        </div>
        <p className="sm:-ml-[30px] sm:w-[550px] sm:mt-[15px] sm:text-left text-white 2xl:text-center xl:mt-[25px] xl:mx-auto lg:mt-[25px] md:mt-[25px] xl:align-middle lg:align-middle  xl:indent-0.5 lg:indent-0.5 2xl:w-[760px] xl:w-[760px] xl:text-[18px] lg:text-[18px] lg:w-[760px] lg:mx-auto md:text-left md:w-[540px] flex shrink-1 md:text-[20px]">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="sm:w-[320px] sm:-ml-[30px] sm:flex sm:flex-col xl:h-16 lg:h-16 md:h-[150px] w-[680px] xl:mx-auto lg:mx-auto md:mx-0 mt-6 xl:flex lg:flex lg:justify-center xl:justify-center 2xl:mt-[50px] 2xl:flex 2xl:flex-row 2xl:h-[200px] 2xl:w-[700px]">
          <button className=" sm:h-[55px] xl:h-[50px] lg:h-[50px] md:h-[58px] w-[270px] text-[17px] bg-white m-2 rounded-full text-black flex justify-center hover:text-blue-600">
            <img src={download} className=" h-[18px] m-2 my-auto" />
            <p className="my-auto font-medium">Download for Windows</p>
          </button>
          <button className="sm:h-[55px] sm:ml-[5px] sm:mt-[15px] xl:h-[50px] lg:h-[50px] md:h-[56px] w-[290px] text-[17px] bg-slate-800 xl:m-4 xl:ml-[10px] lg:ml-[10px] md:-ml-[360px] rounded-full text-white hover:bg-slate-700 xl:shadow-2xl xl:shadow-slate-700 font-medium 2xl:mt-[8px] 2xl:shadow-none">
            Open Discord in your browser
          </button>
        </div>
      </div>

      <div className="w-full sm:h-[650px] 2xl:h-[670px] bg-white">
        <div className="sm:flex sm:justify-center sm:place-items-center  sm:h-[700px] 2xl:h-[650px] 2xl:w-[1280px] mx-auto flex justify-center md:flex 2xl:pt-[90px] 2xl:flex 2xl:flex-row 2xl:place-items-center 2xl:justify-center">
          <div className=" sm:-mt-[60px] sm:w-[600px] sm:flex sm:flex-col h-[460px] w-[1200px] xl:mt-[10px] 2xl:flex 2xl:flex-row 2xl:w-full">
            <img
              src={invite}
              alt="invite"
              className="sm:h-[420px] 2xl:h-[450px]"
            />
            <div className="sm:w-[600px] sm:mx-auto sm:flex sm:flex-col sm:h-[900px] w-full 2xl:p-5 2xl:text-center xl:ml-[50px]">
              <h3 className="sm:h-[40px] sm:text-[25px] 2xl:text-[44px] xl:w-[430px] xl:p-8 2xl:h-[250px] 2xl:mx-auto font-bold 2xl:text-left lg:w-[410px] lg:p-8">
                Create an invite-only place where you belong
              </h3>
              <p className="sm:w-[600px] sm:mt-[20px] 2xl:text-[19px] 2xl:pl-8 2xl:w-[420px] 2xl:mx-auto 2xl:text-left text-gray-900 font-normal md:mt-[50px] xl:mt-0">
                Discord servers are organized into topic-based channels where
                you can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:h-[640px] 2xl:h-[650px] bg-gray-100">
        <div className="sm:flex sm:justify-center sm:place-items-center  sm:h-[700px] 2xl:h-[650px] 2xl:w-[1280px] 2xl:mx-auto 2xl:flex 2xl:justify-center">
          <div className="sm:flex sm:flex-col sm:w-[600px] 2xl:h-[460px] 2xl:w-[1200px] 2xl:mt-[10px] 2xl:flex 2xl:flex-row">
            <div className=" w-full p-5 sm:mt-[200px] text-center 2xl:mt-[36px]">
              <h3 className="sm:text-[24px] sm:mt-[20px] 2xl:text-[40px] 2xl:w-[350px] 2xl:h-[150px] font-bold text-left">
                Where hanging out is easy
              </h3>
              <p className="sm:mt-[20px] sm:text-[15.5px] sm:w-[600px] 2xl:text-[19px] 2xl:w-[390px] text-left text-gray-900 font-normal">
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </p>
            </div>
            <img
              src={voice}
              alt=""
              className="h-[455px] sm:-mt-[550px] 2xl:mt-[0px] 2xl:h-[455px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full sm:h-[700px] h-[650px] bg-white">
        <div className="sm:flex sm:w-full  sm:justify-center sm:place-items-center  sm:h-[700px] h-[650px] w-[1280px] 2xl:mx-auto 2xl:flex justify-center  2xl:pt-[90px]">
          <div className="-100 sm:-mt-[60px] sm:w-[600px] sm:flex sm:flex-col h-[480px] w-[1200px] mt-[10px] flex 2xl:flex 2xl:h-full 2xl:flex-row  2xl:w-[1200px]">
            <img
              src={fandom}
              alt=""
              className="sm:h-[400px] 2xl:h-[430px] 2xl:mt-[50px]"
            />
            <div className="sm:mt-[25px] sm:w-[600px] sm:mx-auto sm:flex sm:flex-col sm:h-[900px] w-full 2xl:p-5 2xl:text-center 2xl:ml-[55px] 2xl:h-full">
              <h3 className="sm:h-[40px] sm:text-[25px] text-[44px] w-[430px] h-[190px] 2xl:text-[44px] 2xl:mt-[60px] 2xl:mx-auto font-bold text-left 2xl:ml-[0px] 2xl:p-4">
                From few to a fandom
              </h3>
              <p className="sm:mt-[16px] sm:text-[16px] sm:w-[600px]  text-[19px] 2xl:p-4 w-[420px] 2xl:text-[19px] 2xl:mt-[120px] 2xl:mx-auto text-left 2xl:w-[450px] 2xl:ml-[0px] text-gray-900 font-normal">
                Get any community running with moderation tools and custom
                member access. Give members special powers, set up private
                channels, and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:h-[840px] h-[1240px] bg-gray-100 2xl:h-[1350px]">
        <div className="sm:w-[600px] sm:h-[600px] sm:mt-[50px] sm:text-left h-[650px] w-[1280px] flex flex-col mx-auto 2xl:justify-center 2xl:h-[900px] 2xl:w-[1200px] 2xl:mt-[100px] 2xl:items-center ">
          <div className="sm:w-[600px] sm:h-[180px] sm:text-left h-[150px] text-center flex flex-col 2xl:items-center">
            <span className="sm:text-left sm:w-[500px] sm:text-[30px] text-[52px] font-extrabold 2xl:w-[1000px] 2xl:text-[52px] 2xl:text-center">
              RELIABLE TECH FOR STAYING CLOSE
            </span>
            <p className="sm:w-[600px] sm:text-[16px] mt-3 w-[1000px] text-[19px] text-gray-900 2xl:w-[950px] 2xl:text-center 2xl:text-[19px]">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <img
            src={chillin}
            alt=""
            className="h-[400px] 2xl:h-[1120px] 2xl:w-full"
          />
        </div>

        <div className="sm:-mt-[20px] sm:w-[600px] sm:h-[160px] sm:mb-[100px] h-[250px] w-[1280px] flex flex-col mx-auto justify-center items-center 2xl:mt-[60px]">
          <img src={stars} className="sm:h-[60px] h-[48px] 2xl:mx-auto" />
          <h1 className="sm:-mt-[30px] sm:text-[34px] 2xl:-mt-[29px] w-[500px] mx-auto text-[31px] font-bold text-center 2xl:text-[31px]">
            Ready to start your journey?
          </h1>
          <button className="sm:mt-[20px] sm:w-[620px] sm:text-[20px]  mt-[35px] 2xl:h-[55px] 2xl:w-[290px] 2xl:text-[18px] bg-[#5865f2] rounded-full text-white flex items-cente justify-center p-2 font-medium">
            <img
              src={downloadwhite}
              className=" h-[37px] sm:mr-[15px] m-2 my-auto"
            />
            <p className="my-auto">Download for Windows</p>
          </button>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
};

export default LandingPage;
