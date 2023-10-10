import React from "react";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <motion.div initial={{ translateY: -120 }} animate={{ translateY: 0 }}>
      <nav className="top-0 sticky w-full flex justify-center items-center py-1  lg:px-32 bg-black ">
        <ul className="w-full flex justify-between items-center text-l lg:text-xl text-white mb-3 py-4 font-semibold font-sans">
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
      </nav>
    </motion.div>
  );
}
