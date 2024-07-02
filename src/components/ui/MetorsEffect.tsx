import React from "react";
import { Meteors } from "./ui/meteors";
import { color } from "framer-motion";
import { Black_And_White_Picture } from "next/font/google";

export function MetorsEffect() {
  return (
    <div className="">
      <div className=" w-[100%] h-[100vh] ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden  flex flex-col justify-center items-center">
       
      <div className="flex flex-col mx-auto w-[50%] gap-8  justify-center align-middle items-center">
      <h1 className="text-6xl font-bold">Contact Us</h1>
        <p className="text-sm text-center w-[75%] text-gray-500">
        We are currently building a developer community called SSDeveloper to help developers solve their doubts and queries free of cost. Anyone can connect with me using the contact form below.
             .</p>
        <div className="flex flex-col gap-5 w-[80%]">
            <input className="bg-black text-gray-600 placeholder:text-gray-600 p-4 rounded-lg border
            border-gray-700" type="text" placeholder="Your Email Address" />
            <textarea className="bg-black text-gray-600 placeholder:text-gray-600 p-4 rounded-lg border
            border-gray-700" placeholder="Your Message">

            </textarea>
        <button className="p-3 bg-green-400  rounded-lg w-[30%] font-bold">Send Message</button>
        </div>
      </div>

       

          {/* Meaty part - Meteor effect */}
          <Meteors number={1000} />
        </div>
      </div>
    </div>
  );
}
