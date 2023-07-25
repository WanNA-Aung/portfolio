import Css_Logo from "./../../images/Css.svg";
import HTML_Logo from "./../../images/html.svg";
import React_Logo from "./../../images/React.svg";
import Js_Logo from "./../../images/Js.png";
import Tailwind_Logo from "./../../images/Tailwind.png";
import Bootstrap_Logo from "./../../images/Bootstrap.jpg";
import Node_Logo from "./../../images/Node.svg";
import Python_Logo from "./../../images/python.svg";
import mongo_Logo from "./../../images/MongoDb.svg";
import mysql_Logo from "./../../images/MySql.svg";
import post_logo from "./../../images/PostgreSql.svg";
import mui_logo from "./../../images/mui.png";
import next_logo from "./../../images/next.png"
import express_logo from "./../../images/express.png"
import {motion} from "framer-motion"


const TitleVariants = {
    hide: {
        y: 150, 
        opacity: 0 
    },
    show: {
        y: 0, 
        opacity: 1
    }
}

const Experience = () => {
    return(
        <>
            <div id="experience" className="pt-20 sm:w-full md:w-11/12" style={{ marginInline: "auto"}}>
                <div className="">
                    <div className="text-center my-10">
                        <motion.h1 
                            variants={TitleVariants}
                            initial="hide"
                            whileInView="show"
                            viewport={{ once: true, amount:1  }}
                            transition={{ duration: 1, type: "spring" }}
                            className="text-4xl underline underline-offset-4 decoration-pink-500 dark:text-white">Experiences</motion.h1>
                    </div>

                    <motion.h1 
                        variants={TitleVariants}
                        initial="hide"
                        whileInView="show"
                        viewport={{ once: true, amount:1  }}
                        transition={{ duration: 1, type: "spring" }}
                        className="px-10 text-xl font-mont text-neutral-400 underline underline-offset-4 decoration-green-700">Front-end Skills</motion.h1>
                    <motion.div 
                        variants={TitleVariants}
                        initial="hide"
                        whileInView="show"
                        viewport={{ once: true, amount:1  }}
                        transition={{ duration: 1, type: "spring" }}
                        className="flex gap-8 my-8 mx-10 md:mx-20 flex-wrap">
                        <img src={HTML_Logo} alt="html_logo" className="w-16 shadow-2xl rounded-full shadow-orange-400 h-16" />
                        <img src={Css_Logo} alt="css_logo" className="w-16 shadow-2xl rounded-full shadow-blue-400 h-16" />
                        <img src={Js_Logo} alt="js_logo" className="w-16 shadow-2xl rounded-full shadow-yellow-500 h-16" />
                        <img src={React_Logo} alt="react_logo" className="w-16 shadow-2xl rounded-full shadow-cyan-500 h-16" />
                        <img src={Tailwind_Logo} alt="tailwind_logo" className="w-16 shadow-2xl rounded-full shadow-cyan-500 h-16" />
                        <img src={Bootstrap_Logo} className="w-16 shadow-2xl rounded-full shadow-violet-500 h-16"  alt="" />
                        <img src={mui_logo} className="w-16 shadow-2xl rounded-full shadow-blue-500 h-16"  alt="" />
                    </motion.div>

                    <motion.h1 
                        variants={TitleVariants}
                        initial="hide"
                        whileInView="show"
                        viewport={{ once: true, amount:1  }}
                        transition={{ duration: 1, type: "spring" }}
                        className="px-10 text-xl font-mont text-neutral-400 underline underline-offset-4 decoration-green-700">Back-end Skills</motion.h1>
                    <motion.div 
                        variants={TitleVariants}
                        initial="hide"
                        whileInView="show"
                        viewport={{ once: true, amount:1  }}
                        transition={{ duration: 1, type: "spring" }}
                        className="flex flex-wrap gap-8 my-8 mx-10 md:mx-20">
                        <img src={Node_Logo} alt="node_logo" className="w-16 shadow-2xl rounded-full shadow-lime-600 h-16" />
                        <img src={express_logo} alt="express_logo" className="w-16 shadow-2xl rounded-full shadow-slate-300 h-16" />
                        <img src={next_logo} alt="python_logo" className="w-16 shadow-2xl rounded-full shadow-yellow-400 h-16" />
                    </motion.div>

                    <motion.h1 
                        variants={TitleVariants}
                        initial="hide"
                        whileInView="show"
                        viewport={{ once: true, amount:1  }}
                        transition={{ duration: 1, type: "spring" }}
                        className="px-10 text-xl font-mont text-neutral-400 underline underline-offset-4 decoration-green-700">Database</motion.h1>
                    <motion.div 
                        variants={TitleVariants}
                        initial="hide"
                        whileInView="show"
                        viewport={{ once: true, amount:1  }}
                        transition={{ duration: 1, type: "spring" }}
                        className="flex flex-wrap gap-8 my-8 mx-10 md:mx-20">
                        <img src={mongo_Logo} alt="mongo_logo" className="w-16 bg-gray-300 p-1 shadow-2xl rounded-full shadow-green-600 h-16" />
                        <img src={mysql_Logo} alt="mysql_logo" className="w-16 bg-gray-300 p-1 shadow-2xl rounded-full shadow-orange-400 h-16" />
                        <img src={post_logo} alt="postgresql_logo" className="w-16 bg-gray-300 p-1 shadow-2xl rounded-full shadow-black h-16" />
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default Experience;