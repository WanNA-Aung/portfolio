import React from "react";
import MouseIcon from "@mui/icons-material/Mouse";
import my_photo from "./../../images/photo_2023-04-01_17-17-40.jpg";
import "./Intro.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ImageVariants = {
  hide: {
    x: -70,
  },
  show: {
    x: 50,
    transition: {
      duration: 2,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

const TextVariants = {
  hide: {
    x: "100vw",
  },
  show: {
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

const Intro = () => {
  return (
    <>
      <div className="w-full h-auto overflow-x-hidden flex flex-wrap lg:flex-nowrap z-0 lg:h-full bg-slate-200 relative dark:bg-slate-700 justify-center lg:justify-between">
        <div>
          <motion.img
            variants={ImageVariants}
            initial="hide"
            animate="show"
            src={my_photo}
            className="shadow shadow-gray-500/50 w-60 h-60 m-20 md:w-80 md:h-80 rounded-full border-green-500 border-4 "
            alt="logo"
          />
        </div>
        <motion.div
          variants={TextVariants}
          initial="hide"
          animate="show"
          className="w-3/5 lg:mt-20 mb-20 dark:text-white"
        >
          <h2 className="font-dancing text-6xl underline underline-offset-8 decoration-lime-600">
            Jinn
          </h2>
          <p className="px-0 md:px-5 py-5 font-mono italic">
            My name is Wan Na Aung, an 18-year-old fullstack developer hailing
            from Myanmar. With two years of experience in this field, I have
            embarked on an exciting journey since the age of 16, immersing
            myself in the realm of computer science. In my web-development
            endeavors, I primarily employ a selection of cutting-edge
            technologies and frameworks. On the frontend, I adeptly utilize
            ReactJs, NextJs, Redux-toolkit, TailwindCss, and Mui (Material UI).
            These tools enable me to create engaging and dynamic user
            interfaces. For the server-side development, my go-to choices are
            NodeJs and ExpressJs, allowing me to build robust and scalable web
            applications.As I continue my journey in the realm of fullstack
            development, I remain enthusiastic about honing my skills, tackling
            new challenges, and contributing to the ever-evolving world of
            technology.
          </p>
          <br />

          <h4 className="px-0 md:px-5 py-3 underline underline-offset-4 decoration-pink-600">
            My Educational Background
          </h4>
          <p className="px-0 md:px-5 font-mono">
            - I am a student at the{" "}
            <a
              href="https://www.uopeople.com"
              className="bg-blue-400 px-1 text-gray-600 hover:text-slate-300 transition duration-500 rounded"
            >
              University Of The People(UoPeople){" "}
            </a>{" "}
            - April, 2023.
          </p>
          <p className="px-0 md:px-5 font-mono">
            - I also have the cretificate from Cisco Netwroking Academy.{" "}
          </p>
          <button className="p-2 my-3 mx-0 md:mx-5 bg-slate-300 dark:bg-blue-400 dark:shadow-md dark:hover:shadow-gray-500 hover:shadow shadow-gray-700 rounded font-minibold">
            <a href="/my.pdf" download>
              {" "}
              Download Cv
            </a>
          </button>
        </motion.div>{" "}
        <br />
      </div>
        {/* <div className="p-2 w-full flex justify-center relative cursor-pointer hover:text-blue-900 mx-auto hover:dark:text-pink-500 text-gray-500 dark:text-white">
          <p className="absolute bottom-0 underline underline-offset-4 decoration-green-600 transition duration-300 ease-linear">
            Scroll
          </p>
          <p id="scroll" className="rotate-180 px-2">
            <a href="#service">
              <MouseIcon />
            </a>
          </p>
        </div> */}
    </>
  );
};

export default Intro;
