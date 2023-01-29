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
          <div class="flex flex-wrap -mx-4  text-center border-2 border-orange-800 rounded-xl ">
            <div class="sm:w-1/2 px-4  p-2 bg-orange-100 rounded-tl-xl rounded-bl-xl">
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
            </div>
            <div class="sm:w-1/2  px-4 p-2  bg-orange-100 rounded-tr-xl rounded-br-xl">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ach;
