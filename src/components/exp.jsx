import React from "react";
import { RiGovernmentFill } from "react-icons/ri";
import { GiVintageRobot } from "react-icons/gi";
import { AiFillAndroid } from "react-icons/ai";

const Exp = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Experience
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s md:mx-none sm-mx-3">
          Sharing my Industrial Experience
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-orange-400 inline-flex"></div>
        </div>
      </div>
      <div class="container px-5 py-10 mx-auto flex flex-wrap">
        <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6  rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
            1
          </div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              <RiGovernmentFill
                style={{
                  fontSize: "2rem",
                }}
              />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Project Intern at Government of Rajasthan, India
              </h2>
              <h2 class="font-medium title-font text-gray-900 mb-1 text-l">
                Sept 2022 - Dec 2022
              </h2>
              <p class="leading-relaxed">
                Developed a DAK/Letter management system for the District
                Magistrate (DM) office in Jaipur. The purpose of this system was
                to effectively monitor the workflow within the collectorate.
                This system helped in streamlining the process of managing DAKs
                and letters, ensuring proper tracking and efficient
                communication between different departments.
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
              <GiVintageRobot
                style={{
                  fontSize: "2rem",
                }}
              />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Summer Intern at Celebal Technologies - Remote, India
              </h2>
              <h2 class="font-medium title-font text-gray-900 mb-1 text-l">
                May 2022 - July 2022
              </h2>
              <p class="leading-relaxed">
                I was responsible for developing, implementing, and maintaining
                data analytics protocols, standards, and documentation. I also
                analyzed complex data and identified anomalies, trends, and
                risks to provide useful insights that helped improve internal
                controls.
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
              <AiFillAndroid
                style={{
                  fontSize: "2rem",
                }}
              />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                ANDROID DEVELOPER INTERN at Verzeo Edutech Pvt Ltd - Remote,
                India
              </h2>
              <h2 class="font-medium title-font text-gray-900 mb-1 text-l">
                May 2021 - July 2021
              </h2>
              <p class="leading-relaxed">
                During my Android Developer internship at Verzeo Edutech Pvt
                Ltd, I was responsible for providing dedicated support and
                timely resolution of issues for clients after the successful
                launch of an app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
