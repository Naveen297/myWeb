import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useSnackbar } from "notistack";
import avatar from "../assests/avatar.png";
import { BsFillSuitHeartFill } from "react-icons/bs";
const Message = () => {
  const form = useRef();
  //   const { enqueueSnackbar } = useSnackbar();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 5000);
    // enqueueSnackbar("Record added successfully", {
    //   variant: "success",
    // });

    setClicked(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nq5bifa",
        "template_cwofztl",
        form.current,
        "9-1taoz1X_a4bmljO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section class="text-gray-600 body-font relative" id="msg">
      <div class="container px-5 py-24 mx-auto" id="msg">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 font-seasons">
            Message Me
          </h1>
          <div class="flex mt-2 justify-center">
            <div class="w-16 h-1 rounded-full bg-orange-400 inline-flex"></div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div class="lg:w-1/2 md:w-2/3 mx-auto flex justify-center items-center">
            <img
              class="object-cover object-center rounded-xl animate__animated animate__fadeIn animate__delay-1s p-1 w-1/3 h-1/2"
              alt="hero"
              src={avatar}
            />
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  class="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-700 rounded text-lg "
                  type="submit"
                  value="Send Message"
                  onClick={handleClick}
                >
                  {clicked ? "Thanks for connecting !!" : "Send Message"}

                  <div class="mt-1 ml-2">
                    <BsFillSuitHeartFill />
                  </div>
                </button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Message;
