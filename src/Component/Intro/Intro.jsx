import React from "react";
import my_photo from "./../../images/typing_img.gif";
import "./Intro.css";
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
    <div className="w-full h-auto overflow-x-hidden flex flex-wrap lg:flex-nowrap z-0 lg:h-full bg-slate-200 relative dark:bg-slate-700 justify-center lg:justify-between">
      <div>
        <motion.img
          variants={ImageVariants}
          initial="hide"
          animate="show"
          src={my_photo}
          className="shadow shadow-gray-500/50 w-60 h-60 m-20 md:w-80 md:h-80 rounded-full border-green-500 border-4 p-1 bg-[#091549b6]"
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
          from Myanmar. With 3 years of experience in this field, I have
          embarked on an exciting journey since the age of 16, immersing myself
          in the realm of computer science. In my web-development endeavors, I
          primarily employ a selection of cutting-edge technologies and
          frameworks. .As I continue my journey in the realm of fullstack
          development, I remain enthusiastic about honing my skills, tackling
          new challenges, and contributing to the ever-evolving world of
          technology.
        </p>
        <br />

        <h4 className="px-0 md:px-5 py-3 underline underline-offset-4 decoration-pink-600">
          My Experience
        </h4>
        <ul className="px-0 md:px-5 font-mono flex flex-col gap-2">
          <li>💡 Fullstack software engineer at a game company</li>
          <li>
            💡 ReactJs instructor at <a href="https://codemal.com">CodeMal</a>
          </li>
        </ul>
        <button className="p-2 my-5 mx-0 md:mx-5 bg-slate-300 dark:bg-blue-400 dark:shadow-md dark:hover:shadow-gray-500 hover:shadow shadow-gray-700 rounded font-minibold">
          <a href="/my.pdf" download>
            {" "}
            Download Cv
          </a>
        </button>
      </motion.div>{" "}
      <br />
    </div>
  );
};

export default Intro;
