import "./App.css"
import { Suspense, lazy, useState } from "react";
import Loader from "./Component/Loader/Loader";
import { motion, AnimatePresence } from "framer-motion";
const Nav = lazy(() => import("./Component/Header/Nav"));
const Provide = lazy(() => import("./Component/service/Provide"));
const Intro = lazy(() => import("./Component/Intro/Intro"));
const Projects = lazy(() => import("./Component/Projects/Projects"));
const Experience = lazy(() => import("./Component/Experience/Experience"));
const Contact = lazy(() => import("./Component/Contact/Contact"));
const SocialMedia = lazy(() => import("./Component/Contact/SocialMedia"));
const Footer = lazy(() => import("./Component/footer/Footer"));

const Home = () => {
  return(
    <>
        <Intro />
        <Experience />
        <Projects />
        <Provide />
        <Contact />
        <SocialMedia />  
        <Footer />  
    </>
  )
}

function App() {

  const [load, setLoad] = useState(true)

  setTimeout(() => {
    setLoad(false)
  }, 3000)

  return (
    <>
      
      <AnimatePresence>
      {
        load && (
          <motion.div 
            exit={{ y: "-100vh"}}
            transition={{ duration:2, type: "spring" }}
          className="w-screen h-full bg-[silver] fixed top-0 z-50 ">
            <Loader />
          </motion.div>
        )
      }
      </AnimatePresence>
      {
        !load && (
          <div className="w-full bg-slate-200 dark:bg-slate-700">
            <Nav />
            <div className="lg:max-w-[1700px] mx-auto">
              <Home />
            </div>
          </div>
        )
      }
    
    </>
  );
}

export default App;
