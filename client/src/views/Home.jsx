import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import { TypeAnimation } from "react-type-animation";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";
import PDF from "../assets/pdf/CV_kevin_cabello.pdf";
const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7x px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.div
                className={darkMode ? "block text-black" : " text-white"}
              >
                Hi, I am Kevin
              </motion.div>
              <span className="block text-blue-500 z- lg:inline white-space: nowrap">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    900,
                    "Front End Developer",
                    900,
                    "Back End Developer",
                    900,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              "I'm a passionate full-stack developer who is committed to
              creating innovative solutions that make a difference in the
              digital world."
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="mr-5 cursor-pointer mt-2 hover:scale-125"
                >
                  <img alt="" src={el.url} />
                  <p className="text-md mt-1 hover:hidden">{el.name}</p>
                </a>
              ))}
            </div>
            <div className="mt-2 sm:mt-2 sm:flex sm:justify-center lg:justify-start ">
              <div className="mt- sm:mt-2 cursor-pointer w-1/ ">
                <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                  <a
                    href={PDF}
                    download="Download CV"
                    className="btn btn-sm btn-secondary text-white"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 70 },
            }}
            src={heroBg}
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
