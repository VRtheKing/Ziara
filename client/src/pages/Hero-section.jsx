"use client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FaArrowDown } from "react-icons/fa";
import QuickFindAnswers from "../components/QuickFindAnswers";

const HeroSection = () => {
  const words = [
    {
      text: "Effortlessly",
      className: "text-[35px]",
    },
    {
      text: "Plan ,",
      className: "text-[35px]",
    },
    {
      text: "Manage ,",
      className: "text-[35px]",
    },
    {
      text: "Enjoy",
      className: "text-[35px]",
    },
    {
      text: "Events",
      className: "text-[35px]",
    },
    {
      text: "With",
      className: "text-[35px]",
    },
    {
      text: "Ziara.",
      className: "text-[35px] text-customeRed",
    },
  ];

  return (
    <main className="">
      <div className="max-w-[1040px] mx-auto h-[540px]">
        <div className="flex flex-col justify-center  items-center text-center md:w-9/12 mx-auto md:px-0 px-2 pt-10 space-y-6">
          <div className="inset-0">
            <Link
              className="px-3  text-sm font-medium inline-flex items-center justify-center border rounded-full  text-zinc-600 hover:text-black transition duration-150 ease-in-out w-full group border-black"
              to="/contact"
            >
              <span className=" inline-flex items-center">
                Contact Us
                <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </span>
            </Link>
          </div>
          <TypewriterEffect words={words} fontSize="text-3xl" />

          <p className="text-lg text-gray-500 ">
            Ziara offers a comprehensive solution for event planning. Create
            events, manage attendees, and handle ticketing all in one place.
            With real-time updates and user authentication, organizing events
            has never been easier.
          </p>
          <div className="flex gap-4">
            <Link to="/register">
              <button
                type="button"
                className="rounded-md  bg-customeRed hover:bg-customeRed/90 px-6 py-2 text-white text-sm font-medium"
              >
                Get Started
              </button>
            </Link>
            <Link to="/">
              <button className="border-customeRed rounded-md border shadow-sm transition-colors bg-white hover:bg-none px-6 py-2 text-black text-sm font-medium">
                Learn More
              </button>
            </Link>
          </div>
          <div className="  items-center pt-32  ">
            <FaArrowDown
              icon="mdi:arrow-down"
              className="text-3xl text-[#e54f47] animate-bounce w-6 h-6"
            ></FaArrowDown>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
