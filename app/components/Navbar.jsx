import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ translateY: -120 }}
      animate={{ translateY: 0 }}
      className="top-0 sticky w-full flex justify-center items-center py-1 px-2 lg:px-32 backdrop-blur-lg bg-white/20 border-2 border-slate-950 overflow-visible z-10 rounded-xl"
    >
      <div className="w-full lg:block hidden">
        <ul className="w-full flex justify-between items-center text-l lg:text-xl text-white  py-4 font-semibold font-sans ">
          <li className="hover:text-slate-400  duration-200">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-slate-400  duration-100">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-slate-400  duration-100">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-slate-400  duration-100">
            <a href="#affiliates">Affiliates</a>
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
                className="drawer-button btn btn-primary border-none text-2xl bg-transparent hover:bg-transparent light:bg-black"
              >
                <AiOutlineMenu className=" " />
              </label>
            </div>
            <div className="drawer-side l">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <div className="menu flex min-h-full backdrop-blur-sm bg-white/10 text-base-content justify-start items-center">
                {/* <Image alt="drawer logo" src={simpleLogo} width={100} /> */}
                <ul className="menu p-4 w-56 h-72 flex text-base-content text-xl flex-col font-semibold">
                  {/* Sidebar content here */}
                  <li className="hover:-translate-y-1 duration-200">
                    <a
                      href="/plans"
                      className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
                    >
                      Planes
                    </a>
                  </li>
                  <li className="hover:-translate-y-1 duration-200">
                    <a
                      href="/info"
                      className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
                    >
                      Informacion
                    </a>
                  </li>
                  <li className="hover:-translate-y-1 duration-200">
                    <a
                      href="/affiliates"
                      className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
                    >
                      Afiliados
                    </a>
                  </li>
                  <li className="hover:-translate-y-1 duration-200">
                    <a
                      href="/contact"
                      className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
                    >
                      Contacto
                    </a>
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
