"use client";

import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center lg:p-5">
      <section className="w-full lg:w-2/4 rounded-lg text-white min-h-full ">
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
            <h1 className="text-6xl lg:text-8xl tracking-tight font-sans mt-10 ">
              the{" "}
              <span className="gradiente-text p-2 rounded-lg font-bold ">
                Change
              </span>
            </h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ translateX: 30 }}
          whileInView={{ translateX: 0 }}
        >
          <div className=" h-[600px] rounded-lg mb-32">
            <Spline scene="https://prod.spline.design/obcSeh3Eawtq7XNT/scene.splinecode" />
          </div>
          {/* <div className=" h-[500px] rounded-lg lg:hidden  py-5 block mb-32 ">
            <Spline scene="https://prod.spline.design/q3AgkpJ57jXhvD6O/scene.splinecode" />
          </div> */}
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex lg:flex-row flex-col p-3 gap-1   justify-center items-center"
        >
          <div
            className="w-full lg:w-2/4 bg-white text-black rounded-xl p-9 text-left"
            id="about"
          >
            <h3 className="text-sans font-bold text-2xl lg:text-3xl ">
              What's the change?
            </h3>
            <p className="text-sans font-medium text-l lg:text-xl mt-6">
              The change is what you think it would be better for you in the
              future, and follow the steps to achieve that.
            </p>
            <p className="text-sans  text-l lg:text-xl mt-6">
              You really liked the{" "}
              <span className="gradiente-text">Moving Cubes huh?</span> we all
              do!
            </p>
            <p className="text-sans font-medium text-l lg:text-xl mt-6">
              So why don't you start <span className="gradiente-text">NOW</span>
              .
            </p>
          </div>

          <div className="w-full lg:w-2/4 flex flex-col gap-1 ">
            <div
              className="w-full bg-white text-black  rounded-xl p-9"
              id="about"
            >
              <h3 className="text-sans text-2xl font-bold lg:text-2xl ">
                Why the Change?
              </h3>
              <p className="text-sans font-medium text-l lg:text-xl mt-6">
                Everyone needs a change in their lives, maybe some are late for
                it.
              </p>
            </div>

            <div
              className="w-full bg-white text-black rounded-xl p-6 "
              id="about"
            >
              <h3 className="text-sans text-2xl font-bold lg:text-2xl ">
                Who's the change?
              </h3>
              <p className="text-sans font-medium text-l lg:text-xl mt-6">
                The change is who you think he is. That's the{" "}
                <span className="gradiente-text text-bold">Idea</span>.
              </p>
            </div>
          </div>
        </motion.section>
      </section>
    </main>
  );
}
