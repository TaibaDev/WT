import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import Drawer from "./rightDrawer";
{/* <div className="origin-bottom -rotate-6 w-full h-16 bg-black absolute -bottom-3" style={{borderTopLeftRadius:40,borderRadius:15,marginLeft:'1%',width:'99%'}}></div> */}
// 
const Navbar = () => {
  return (
    <div className="bg-white shadow-md lg:hidden">
      <nav className="flex justify-end items-center bg-gray-100 px-32 py-4">
        <ul className="flex items-center gap-x-16 font-semibold">
        <li className="hover:underline underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-secondary">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-secondary">
            <Link href="/contact">About</Link>
          </li>
          <li className="hover:underline underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-secondary">
            <Link href="/contact">Projects</Link>
          </li>
          {/* CONTACT  */}
          <li className="hover:underline underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-secondary">
            <Link href="/contact">Contact</Link>
          </li>
          {/* CONTACT */}
          <li>
            <button className="bg-blue rounded-md px-5 py-2 text-white text-xl flex items-center gap-x-2 hover:bg-secondary transition-all duration-300 ease-in-out">
              Donate <FaHeart />
            </button>
          </li>
        </ul>
      </nav>
      <Drawer/>
    </div>
  );
};

export default Navbar;
