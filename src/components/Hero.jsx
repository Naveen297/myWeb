import React from "react";
import "animate.css";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import Cards from "./cards";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  //function to download resume
  const downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/17mSojxaymAH6YO4ZfZwF4ktIHMWJRO0u/view?usp=share_link"
    );
    //function to open linkedin profile
  };
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/naveen-malhotra-a91916195");
  };
  return (
    <div className="w-100%" id="hero">
      <section class="text-gray-600 body-font z-0 ">
        <div class="container mx-auto flex md:flex-row flex-col items-center">
          <div class="animate__animated animate__fadeIn animate__delay-1s lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 border-2 border-orange-400 rounded-xl border-spacing-2 z-0">
            <img
              class="object-cover object-center rounded-xl animate__animated animate__fadeIn animate__delay-1s md:ml-10 border-2 border-orange-400 p-1"
              alt="hero"
              src="https://i.postimg.cc/Xvw7yTYd/IMG-1152-Original-2.jpg"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p class="font-mono text-2xl flex justify-center items-center font-semibold text-gray-600">
              Hello
              <span class="wave">👋🏻</span>, I'm
            </p>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold font-prosto text-myblue">
              <p className="">
                <TypeAnimation
                  sequence={[
                    "Naveen Malhotra", // Types 'One'
                    2000, // Waits 1s
                    "Developer !!!", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    //   "Two Three", // Types 'Three' without deleting 'Two'
                    () => {
                      console.log("Done typing!"); // Place optional callbacks anywhere in the array
                    },
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  //   style={{ fontSize: "2em" }}
                />
              </p>
              {/* <br class="hidden lg:inline-block">readymade gluten</br> */}
            </h1>
            <p class="font-serif text-xl flex justify-center items-center font-semibold text-myCyan mx-10">
              An aspiring User Interface Designer & Developer
            </p>
            <p class="mb-8 leading-relaxed text-myblue-light">
              A self-Tought Frontend web Developer and UI/UX Designer. I am a
              3rd Year Computer Science Student at Manipal University Jaipur and
              I am passionate about building beautiful and intuitive UI/UX for
              web and mobile applications.
            </p>
            <div class="flex justify-center">
              <button
                className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded-xl hover:bg-white group"
                onClick={openLinkedin}
              >
                {/* purple box */}
                <span className="w-0 h-0 rounded bg-orange-400 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-fullt text-xl text-myblue-light border-2 border-myblue-light rounded-xl dark:text-myblue-light font-prosto transition-colors duration-300 ease-in-out group-hover:text-white z-10 py-2 px-4 font-semibold">
                  Contact Me
                </span>
              </button>
              <button
                className="btn ml-3 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded-xl hover:bg-white group"
                onClick={downloadResume}
              >
                {/* purple box */}
                <span className="w-0 h-0 rounded bg-orange-400 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-fullt text-xl text-myblue-light border-2 border-myblue-light rounded-xl dark:text-myblue-light font-prosto transition-colors duration-300 ease-in-out group-hover:text-white z-10 py-2 px-4 font-semibold">
                  {/* //resume in french */}
                  My Resume
                  {/* <p class="mt-1 ml-2 w-3">
                    <AiOutlineLinkedin />
                  </p> */}
                </span>
              </button>
            </div>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-myCyan">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://twitter.com/Naveen_2970"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://www.instagram.com/iamnav_297"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://www.linkedin.com/in/naveen-malhotra-a91916195"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
