import React from "react";
//import image from "../assests/ach.png";
import image from "../assests/lor.png";
import imagee from "../assests/foofd.png";
const Ach = () => {
  const openlink = () => {
    window.alert("Sorry! Page not Found");
  };
  const opellink2 = () => {
    window.open("https://youtu.be/QgrUp7NEnSg");
  };
  return (
    <div id="ach">
      <div class="text-center">
        <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4 font-seasons">
          My Achievements
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 ">
          Love to share my achievements with you.
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-orange-400 inline-flex"></div>
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap justify-center items-center -mx-4  text-center  ">
            <div class="max-w-sm bg-orange-100 border border-gray-200 rounded-lg shadow dark:bg-orange-100 dark:border-gray-700 mx-2 mb-4">
              <a href="#">
                <img class="rounded-t-lg" src={image} alt="lor" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Letter of Appreciation
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Recieved a letter of appreciation from the DM, jaipur for
                  successful completion and implementation of the project.
                </p>
                <button
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-blue-800"
                  onClick={openlink}
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="max-w-sm bg-orange-100 border border-gray-200 rounded-lg shadow dark:bg-orange-100 dark:border-gray-700 mx-4">
              <a href="#">
                <img class="rounded-t-lg" src={imagee} alt="lor" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Winning the Hackathon
                  </h5>
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    10th - 11th October 2022
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Won the hackathon conducted by the MLH and the hackathon was
                  conducted on the theme of "Food".
                </p>
                <button
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-blue-800"
                  onClick={openlink}
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* <div class="sm:w-1/2 px-4  p-2 bg-orange-100 rounded-tl-xl rounded-bl-xl">
              <div class="rounded-xl h-72 overflow-hidden border-2 border-gray-500 rounded-xl">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full h-96 "
                  src={image}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Letter Of Appreciation
              </h2>
              <h2 class="title-font text-l font-medium text-gray-900 mt-2 mb-3">
                21 November 2022
              </h2>
              <p class="leading-relaxed text-base">
                Recieved a letter of appreciation from the DM, jaipur for
                successful completion and implementation of the project.
              </p>
              <button
                class="flex mx-auto mt-3 text-white bg-orange-400 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded"
                onClick={openlink}
              >
                See more
              </button>
            </div> */}
            {/* <div class="sm:w-1/2  px-4 p-2  bg-orange-100 rounded-tr-xl rounded-br-xl">
              <div class="rounded-xl h-72 border-2 border-gray-500 rounded-xl  overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center w-full"
                  src={imagee}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Winning My First Hackathon
              </h2>
              <h2 class="title-font text-l font-medium text-gray-900 mt-2 mb-3">
                10 October 2022
              </h2>
              <p class="leading-relaxed text-base">
                Won my first hackathon with my team. We built a web app to help
                to manage food waste.
              </p>
              <button
                class="flex mx-auto mt-3 text-white bg-orange-400 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded"
                onClick={opellink2}
              >
                See more
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ach;
