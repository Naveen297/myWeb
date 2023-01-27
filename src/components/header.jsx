import React from "react";
// import { button } from "react-router-dom";
import { useState } from "react";
import "animate.css";

const Header = ({ showOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    document.getElementById("nav-toggle").onclick = function () {
      document.getElementById("nav-content").classList.toggle("hidden");
    };
  };
  //function to naviagate to skill section of the page
  const skill = () => {
    document
      .getElementById("skill")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };
  const project = () => {
    document
      .getElementById("project")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };
  const homepage = () => {
    document
      .getElementById("hero")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };
  const contact = () => {
    document
      .getElementById("msg")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <header className="sticky top-0 ">
      <body class="bg-gray-400 font-sans leading-normal tracking-normal">
        <nav class="flex items-center justify-between flex-wrap bg-white p-2 w-full z-10 top-0">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <a
              class="text-white no-underline hover:text-white hover:no-underline"
              href="#"
            >
              <span>
                <p className="flex items-center relative">
                  <img
                    src="https://i.postimg.cc/kGGVQZ2D/Screenshot-2023-01-26-at-2-31-47-PM-removebg-preview.png"
                    style={{ width: 200 }}
                    alt="logoName"
                  />
                </p>
              </span>
            </a>
          </div>

          <div class="block lg:hidden">
            <button
              onClick={toggleMenu}
              id="nav-toggle"
              class="flex items-center px-3 py-2 mr-3 border rounded text-orange-600 border-orange-400  appearance-none focus:outline-none"
            >
              <svg
                class="fill-current h-3 w-3 text-orange-600 border-orange-400"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            class="w-full flex-grow rounded-xl lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0 "
            id="nav-content"
          >
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
              <li class="mr-4">
                <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                  {/* purple box */}
                  <span className="w-0 h-0 rounded bg-orange-400 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-fullt text-xl text-myblue-light  dark:text-myblue-light font-prosto transition-colors duration-300 ease-in-out group-hover:text-white z-10 py-2 px-4 font-semibold">
                    Home
                  </span>
                </button>
              </li>
              <li class="mr-4">
                <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                  {/* purple box */}
                  <span className="w-0 h-0 rounded bg-orange-400 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-fullt text-xl text-myblue-light  dark:text-myblue-light font-prosto transition-colors duration-300 ease-in-out group-hover:text-white z-10 py-2 px-4 font-semibold">
                    About Me
                  </span>
                </button>
              </li>
              <li class="mr-3">
                <button
                  className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group"
                  onClick={skill}
                >
                  {/* purple box */}
                  <span className="w-0 h-0 rounded bg-orange-400 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-fullt text-xl text-myblue-light  dark:text-myblue-light font-prosto transition-colors duration-300 ease-in-out group-hover:text-white z-10 py-2 px-4 font-semibold">
                    Skills
                  </span>
                </button>
              </li>

              <li class="mr-3">
                <button
                  className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group"
                  onClick={
                    // go to project section
                    project
                  }
                >
                  {/* purple box */}
                  <span className="w-0 h-0 rounded bg-orange-400 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-fullt text-xl text-myblue-light  dark:text-myblue-light font-prosto transition-colors duration-300 ease-in-out group-hover:text-white z-10 py-2 px-4 font-semibold">
                    Projects
                  </span>
                </button>
              </li>
              <li class="mr-3">
                <button
                  className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group animate-pulse"
                  onClick={
                    // go to project section
                    contact
                  }
                >
                  {/* purple box */}
                  <span className="w-0 h-0 rounded bg-orange-400 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-fullt text-xl text-myblue-light  dark:text-myblue-light font-prosto transition-colors duration-300 ease-in-out group-hover:text-white z-10 py-2 px-4 font-semibold">
                    Message Me
                  </span>
                </button>
                {/* <Modal /> */}
              </li>
            </ul>
          </div>
        </nav>

        <div class="container shadow-lg mx-auto bg-white mt-24 md:mt-18">
          {/* <hr class="my-8 h-px bg-black border-2 w-7 dark:bg-white"></hr> */}
        </div>
      </body>
    </header>
  );
};

export default Header;
