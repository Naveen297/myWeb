import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillUnlock } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { FaPython } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";

const Cards = () => {
  //link to mystyle.css

  //   <link rel="stylesheet" href="src/mystyle.css" />;
  return (
    <div id="project">
      <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4 font-seasons">
          My Projects
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 ">
          Here are some of my projects. I have worked on a lot of projects
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-orange-400 inline-flex"></div>
        </div>
      </div>
      <section class="text-myblue body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="bg-orange-100 h-full border-2 border-orange-800 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://i.postimg.cc/ncmssKH8/virtua-as.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-bold text-orange-700 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Mini AI Project
                  </h1>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Virtual AI Assistant
                  </h1>
                  <p class="leading-relaxed mb-3">
                    This is a virtual assistant that can do many tasks for you
                    like opening websites, playing music, telling jokes, etc.
                  </p>
                  <h2 class="tracking-widest text-xs title-font font-medium text-orange-700 mb-1">
                    STATUS : COMPLETED
                  </h2>
                  {/* <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Mini AI Project
                  </h1> */}
                  <div class="flex items-center flex-wrap ">
                    <a
                      class=" mt-2 border-2 rounded-xl px-2 py-2 border-myblue text-myblue inline-flex items-center md:mb-2 lg:mb-0"
                      href="https://github.com/Naveen297/Naveen-Malhotra.git"
                      target={"_blank"}
                    >
                      <p className="mr-2">
                        <AiFillGithub />
                      </p>
                      Repo Link
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <AiFillUnlock />
                    </p>
                    <FaPython />
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="bg-orange-100 h-full border-2 border-orange-800 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://i.postimg.cc/QN9Jjnyh/mm.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-orange-600 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Automation Project
                  </h1>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    MUJ Department Website Automation
                  </h1>
                  <p class="leading-relaxed mb-3">
                    This Is the automation project that can automate the the
                    record(achievements) gathering process of the students,
                    teachers and the staff of the department.
                  </p>
                  <h2 class="tracking-widest text-xs title-font font-medium text-orange-600 mb-1">
                    STATUS : IN PROGRESS
                  </h2>
                  {/* <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Mini AI Project
                  </h1> */}
                  <div class="flex items-center flex-wrap ">
                    <a
                      class=" mt-2 border-2 rounded-xl px-2 py-2 border-myblue text-myblue inline-flex items-center md:mb-2 lg:mb-0"
                      href="#"
                      onClick={() => {
                        alert("This is a private repository");
                      }}
                    >
                      <p className="mr-2">
                        <AiFillGithub />
                      </p>
                      Repo Link
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <AiFillLock />
                    </p>
                    <FaReact />
                    <AiOutlineHtml5 />
                    <DiJavascript1 />
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="bg-orange-100 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://i.postimg.cc/4yq8NDzh/Screenshot-2022-12-29-at-5-51-33-PM.png"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-orange-600  mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Automation Project
                  </h1>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Letter/DAK Management System
                  </h1>
                  <p class="leading-relaxed mb-3">
                    This is the automation project that will automate the the
                    letter management process for COLLECTRATE (D.M) jaipur and
                    the other offices of the district.
                  </p>
                  <h2 class="tracking-widest text-xs title-font font-medium text-orange-600 mb-1">
                    STATUS : COMPLETED
                  </h2>
                  {/* <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Mini AI Project
                  </h1> */}
                  <div class="flex items-center flex-wrap ">
                    <a
                      class=" mt-2 border-2 rounded-xl px-2 py-2 border-myblue text-myblue inline-flex items-center md:mb-2 lg:mb-0"
                      href="#"
                      onClick={() => {
                        alert("This is a private repository");
                      }}
                    >
                      <p className="mr-2">
                        <AiFillGithub />
                      </p>
                      Repo Link
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <AiFillLock />
                    </p>
                    <FaReact />
                    <AiOutlineHtml5 />
                    <DiJavascript1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="bg-orange-100 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://i.postimg.cc/VNgDbrqw/gggg.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-orange-600 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Gym Management System
                  </h1>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    GYM Website
                  </h1>
                  <p class="leading-relaxed mb-3">
                    This is the website for the gym management system that will
                    automate the the gym management process for the gym.
                  </p>
                  <h2 class="tracking-widest text-xs title-font font-medium text-orange-600 mb-1">
                    STATUS : COMPLETED
                  </h2>
                  {/* <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Mini AI Project
                  </h1> */}
                  <div class="flex items-center flex-wrap ">
                    <a
                      class=" mt-2 border-2 rounded-xl px-2 py-2 border-myblue myblue inline-flex items-center md:mb-2 lg:mb-0"
                      href="https://github.com/Naveen297/H-force-GYM-Website.git"
                      target={"_blank"}
                    >
                      <p className="mr-2">
                        <AiFillGithub />
                      </p>
                      Repo Link
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <AiFillUnlock />
                    </p>
                    <FaReact />
                    <DiJavascript1 />
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="bg-orange-100  h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://i.postimg.cc/4y75MWr4/efwe.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-orange-600 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Automation Project
                  </h1>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    MUJ 10th Convocation Website
                  </h1>
                  <p class="leading-relaxed mb-3">
                    This is the website for the 10th convocation of the MUJ.
                    This website is made for the automation of the convocation
                    process.
                  </p>
                  <h2 class="tracking-widest text-xs title-font font-medium text-orange-600 mb-1">
                    STATUS : UPCOMMING
                  </h2>
                  {/* <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Mini AI Project
                  </h1> */}
                  <div class="flex items-center flex-wrap ">
                    <a
                      class=" mt-2 border-2 rounded-xl px-2 py-2 border-myblue text-myblue inline-flex items-center md:mb-2 lg:mb-0"
                      href="#"
                      onClick={() => {
                        alert("This is a private repository");
                      }}
                    >
                      <p className="mr-2">
                        <AiFillGithub />
                      </p>
                      Repo Link
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <AiFillLock />
                    </p>
                    <FaReact />
                    <AiOutlineHtml5 />
                    <DiJavascript1 />
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="bg-orange-100 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://i.postimg.cc/hPRy6BPH/agfwqer.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-orange-600 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Management System
                  </h1>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Employee Management System
                  </h1>
                  <p class="leading-relaxed mb-3">
                    This System is made for the management of the employees of
                    the company. This system is made for the automation of the
                    employee management process.
                  </p>
                  <h2 class="tracking-widest text-xs title-font font-medium text-orange-600 mb-1">
                    STATUS : COMPLETED
                  </h2>
                  {/* <h1 class="title-font text-sm font-medium text-gray-900 mb-3">
                    Mini AI Project
                  </h1> */}
                  <div class="flex items-center flex-wrap ">
                    <a
                      class=" mt-2 border-2 rounded-xl px-2 py-2 border-myblue text-myblue inline-flex items-center md:mb-2 lg:mb-0"
                      href="https://github.com/Naveen297/Employee-Management-System.git"
                      target={"_blank"}
                    >
                      <p className="mr-2">
                        <AiFillGithub />
                      </p>
                      Repo Link
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <AiFillUnlock />
                    </p>
                    <FaPython />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
