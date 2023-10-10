"use client";

import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 overflow-auto">
      <section className="w-full lg:w-2/4 rounded-lg text-white min-h-full">
        <Navbar />
        <div
          id="home"
          className="mt-32 font-bold  w-full flex flex-col justify-center items-center"
        >
          <motion.div
            initial={{ translateY: 50, opacity: 0 }}
            animate={{ translateY: -50, opacity: 1 }}
          >
            <h1 className="text-6xl lg:text-8xl tracking-tight font-sans">
              Let's start
            </h1>
          </motion.div>
          <motion.div
            initial={{ translateY: 50, opacity: 0 }}
            animate={{ translateY: -50, opacity: 1 }}
          >
            <h1 className="text-5xl lg:text-8xl tracking-tight font-sans mt-10 ">
              the{" "}
              <span className="gradiente p-2 rounded-lg font-extralight font-serif">
                Change
              </span>
            </h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ translateX: 30 }}
          whileInView={{ translateX: 0 }}
        >
          <div className="w-full h-[500px] rounded-lg lg:px-52 lg:block hidden mb-32">
            <Spline scene="https://prod.spline.design/obcSeh3Eawtq7XNT/scene.splinecode" />
          </div>
        </motion.div>

        <motion.div
          initial={{ translateX: 200 }}
          whileInView={{ translateX: 0 }}
        >
          <section
            className="w-full bg-white h-[50vh] rounded-xl p-6 text-black"
            id="about"
          >
            <h3 className="text-sans font-bold text-3xl">What's the change?</h3>
          </section>
        </motion.div>
      </section>
    </main>
  );
}
