"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaHeart, FaTimes, FaBars } from "react-icons/fa";
import Drawer from "./rightDrawer";
import Image from "next/image";
import log from '../assets/images/log.png';
// import Link from 'next/link'

const PracticeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-end items-center bg-gray-100 px-10 md:px-32 lg:py-4 lg:mb-10">
        <div className="flex items-center">
          <ul
            className={`lg:flex ${isOpen ? 'hidden' : 'hidden'} items-center gap-x-10 font-semibold lg:mt-5`}
          >
            <li className="relative group">
              <Link href="/" className=" text-black px-3 underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] " >Home</Link>
              <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <Link href="/about" className=" text-black px-3 underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] " >About</Link>
              <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <Link href="/projects" className=" text-black px-3 underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out  hover:text-[#EF1E60]" >Projects</Link>
              <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <Link href="/contact" className=" text-black px-3 underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] " >Contact</Link>
              <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <li>
              <button className="bg-blue rounded-md px-5 py-2 text-white text-xl flex items-center gap-x-2 hover:bg-[#EF1E60] transition-all duration-300 ease-in-out">
                Donate <FaHeart />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <nav className="flex flex-col justify-start items-end px-10">
          <div className="flex items-center">
            <ul
              className={`lg:flex items-center gap-x-16 font-semibold`}
            >
              <li className="hover:underline text-black mb-3 underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-secondary">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:underline text-black  mb-3 underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-secondary">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:underline text-black mb-3 underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-secondary">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="hover:underline text-black  mb-3 underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-secondary">
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <button className="bg-blue rounded-md px-5 py-2 text-white text-base flex items-center gap-x-2 hover:bg-secondary transition-all duration-300 ease-in-out">
                  Donate <FaHeart />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </Drawer>
      <div className="flex flex-row-reverse justify-between  shadow-md w-full lg:hidden bg-white">
        <button
          className="text-blue focus:outline-none text-2xl focus:text-gray-800 lg:hidden pr-10 "
          onClick={toggleMenu}
        >
          {isOpen ? <></> : <FaBars />}
        </button>
        <div className=" ml-5 md:ml-9 h-[100px]">
          <Image alt="my pic" src={log} className="w-[80px] h-[80px] overflow-hidden object-contain mt-3 lg:hidden" />
        </div>
      </div>

    </div>
  );
};

export default PracticeNavbar;
