import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ translateY: -120 }}
      animate={{ translateY: 0 }}
      className="top-[5%] sticky w-full flex justify-between items-center py-1 px-4 lg:px-32 backdrop-blur-lg bg-black/20 overflow-visible z-10 rounded-xl"
    >
      <h2 className="text-2xl font-bold">
        theChange<span className="text-pink-400">.</span>{" "}
      </h2>
      <div className="3/4 lg:block hidden py-3">
        <ul className="w-full flex justify-between gap-5 items-center text-white font-light font-sans">
          <li className="hover:text-pink-300  duration-200">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:text-pink-400  duration-100">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:text-pink-500  duration-100">
            <Link target="__blank" href="https://github.com/snowydevd">
              Creator
            </Link>
          </li>
        </ul>
      </div>

      <div className="block lg:hidden w-1/6 overflow-auto">
        <div className="flex justify-center items-center">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-primary border-none text-2xl bg-transparent hover:bg-transparent"
              >
                <AiOutlineMenu className=" " />
              </label>
            </div>
            <div className="drawer-side l">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <div className="menu flex min-h-screen  backdrop-blur-lg bg-black rounded-2xl text-base-content justify-start items-center">
                {/* <Image alt="drawer logo" src={simpleLogo} width={100} /> */}
                <ul className="menu p-4 w-56 h-72 flex text-base-content text-xl flex-col font-semibold">
                  {/* Sidebar content here */}
                  <li className="hover:-translate-y-1 duration-200 w-fit">
                    <Link
                      href="#home"
                      className="hover:shadow-lg hover:bg-white hover:text-black hover:shadow-pink-700 text-white px-3 py-2 rounded-lg duration-150"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="hover:-translate-y-1 duration-200 w-fit">
                    <Link
                      href="#about"
                      className="hover:shadow-lg hover:bg-white hover:text-black hover:shadow-pink-700 text-white px-4 py-3 rounded-lg duration-150"
                    >
                      About
                    </Link>
                  </li>
                  <li className="hover:-translate-y-1 duration-200 w-fit">
                    <Link
                      target="__blank"
                      href="https://github.com/snowydevd"
                      className="hover:shadow-lg hover:bg-white hover:text-black hover:shadow-pink-700 text-white px-3 py-2 rounded-lg duration-150"
                    >
                      Creator
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
