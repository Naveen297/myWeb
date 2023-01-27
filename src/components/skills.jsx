import React from "react";
import Bars from "react-bars";
import ProgressBar from "react-bootstrap/ProgressBar";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillUnlock } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { FaHtml5, FaPython } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";

const Skills = () => {
  return (
    <section class="text-gray-600 body-font " id="skill">
      <div class="hidden md:block container px-5 py-14 mx-auto ">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            My Loving Skill Set
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s md:mx-none sm-mx-3">
            Among the world full of Technologies , I have listed some of them i
            have
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-orange-400 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 place-items-center md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-yellow-500 mb-5 flex-shrink-0">
              <AiOutlineHtml5
                style={{
                  fontSize: "2.5rem",
                }}
              />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                HTML5
              </h2>
              <p class="leading-relaxed text-base">
                The Structural Language of the Web
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-yellow-500 mb-5 flex-shrink-0">
              <DiJavascript1
                style={{
                  fontSize: "2.5rem",
                }}
              />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                JavaScript
              </h2>
              <p class="leading-relaxed text-base">
                The Programming Language of the Web
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-yellow-500 mb-5 flex-shrink-0">
              <FaReact
                style={{
                  fontSize: "2.5rem",
                }}
              />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                ReactJS
              </h2>
              <p class="leading-relaxed text-base">
                The Frontend Library of the Web
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 mt-5">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center justify-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-yellow-500 mb-5 flex-shrink-0">
              <IoLogoCss3
                style={{
                  fontSize: "2.5rem",
                }}
              />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                CSS3
              </h2>
              <p class="leading-relaxed text-base">
                The Styling Language of the Web
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-yellow-500 mb-5 flex-shrink-0">
              <FaPython
                style={{
                  fontSize: "2.5rem",
                }}
              />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Python
              </h2>
              <p class="leading-relaxed text-base">
                The Programming Language of the Robots
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-yellow-500 mb-5 flex-shrink-0">
              C / C++
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                C / C++
              </h2>
              <p class="leading-relaxed text-base">
                The Programming Language of the Machines
              </p>
            </div>
          </div>
        </div>
      </div>
      <section class="text-gray-600 body-font md:hidden">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              My Loving Skill Set
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s md:mx-none sm-mx-3">
              Among the world full of Technologies , I have listed some of them
              i have
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-orange-400 inline-flex"></div>
            </div>
          </div>
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <FaHtml5
                  style={{
                    fontSize: "2.5rem",
                  }}
                />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  HTML5
                </h2>
                <p class="leading-relaxed">
                  The Markup and Structural Language of the Web
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <IoLogoCss3
                  style={{
                    fontSize: "2.5rem",
                  }}
                />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  CSS 3
                </h2>
                <p class="leading-relaxed">
                  The Styling and designing Language of the Websites
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <DiJavascript1
                  style={{
                    fontSize: "2.5rem",
                  }}
                />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  JavaScript
                </h2>
                <p class="leading-relaxed">
                  The Programming language of the Websites
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <FaReact
                  style={{
                    fontSize: "2.5rem",
                  }}
                />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  ReactJS
                </h2>
                <p class="leading-relaxed">
                  The JavaScript Library for Building User Interfaces
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
