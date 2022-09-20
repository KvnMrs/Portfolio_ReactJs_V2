import React from "react";

// Packages
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//Sub-component
import ButtonCallToActionText from "../../sub-components/buttons/ButtonCallToActionText";

// Animations
import {
  div1,
  div2,
  div3,
  div4,
  welcomeAnim,
  nameAnim,
  jobAnim,
  buttonAnim,
} from "../../animations/homeAnimations";

function Home() {
  return (
    <>
      <div id="home" className="home-container relative">
        <div className="px-2 lg:border lg:p-20">
          <header className="home-header">
            <motion.h1
              className="welcome"
              variants={welcomeAnim}
              initial="initial"
              animate="animate"
            >
              Bienvenue sur mon Portfolio
            </motion.h1>
            <motion.p
              className="home-paragraph"
              variants={nameAnim}
              initial="initial"
              animate="animate"
            >
              je m'appelle <span className="name">Kévin MARAIS</span>
            </motion.p>
            <motion.p
              className="home-paragraph"
              variants={jobAnim}
              initial="initial"
              animate="animate"
            >
              je suis Développeur Web Front-End Junior
            </motion.p>
          </header>
          <motion.div
            className="w-fit mx-auto"
            variants={buttonAnim}
            initial="initial"
            animate="animate"
          >
            <Link to="/portofolio">
              <ButtonCallToActionText
                text={"Continuer"}
              ></ButtonCallToActionText>
            </Link>
          </motion.div>
        </div>
        {/* left side */}
        <motion.div
          className="left-8 bottom-48 w-1 blur-lg absolute bg-white rounded-lg"
          variants={div1}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="left-16 bottom-24 w-1 blur-xl absolute bg-white rounded-lg"
          variants={div3}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="left-28 bottom-2 w-1 blur-xl absolute bg-white rounded-lg"
          variants={div4}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="left-2/4 bottom-24 w-1 blur-xl absolute bg-white rounded-lg"
          variants={div3}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="left-32 bottom-12 w-1 blur-md absolute bg-white rounded-lg"
          variants={div2}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="left-44 bottom-12 w-1 blur-md absolute bg-white rounded-lg"
          variants={div4}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="left-56 bottom-20 w-1 blur-md absolute bg-white rounded-lg"
          variants={div3}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="left-80 bottom-36 w-1 blur-lg absolute bg-white rounded-lg"
          variants={div2}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="left-80 bottom-36 w-1 blur-xl absolute bg-white rounded-lg"
          variants={div3}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="right-2/3 bottom-20 w-1 blur-xl absolute bg-white rounded-lg"
          variants={div1}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="right-3/4 bottom-8 w-1 blur-xl absolute bg-white rounded-lg"
          variants={div3}
          initial="initial"
          animate="animate"
        ></motion.div>

        <motion.div
          className="left-auto bottom-28 w-1 blur-2xl absolute bg-white rounded-lg"
          variants={div2}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="left-auto bottom-28 w-1 blur-md absolute bg-white rounded-lg"
          variants={div4}
          initial="initial"
          animate="animate"
        ></motion.div>

        {/* right side */}
        <motion.div
          className="right-16 bottom-20 w-1 blur-lg absolute bg-white rounded-lg"
          variants={div1}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="right-32 bottom-20 w-1 blur-xl absolute bg-white rounded-lg"
          variants={div3}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="right-48 bottom-4 w-1 blur-lg absolute bg-white rounded-lg"
          variants={div2}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="right-72 bottom-4 w-1 blur-lg absolute bg-white rounded-lg"
          variants={div3}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="hidden lg:visible left-2/3 bottom-24 w-2 blur-xl absolute bg-white rounded-lg"
          variants={div2}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="right-96 bottom-72 w-1 blur-lg absolute bg-white rounded-lg"
          variants={div1}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="right-1/4 bottom-8 w-1 blur-xl absolute bg-white rounded-lg"
          variants={div3}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="right-3/4 bottom-8 w-1 blur-2xl absolute bg-white rounded-lg"
          variants={div3}
          initial="initial"
          animate="animate"
        ></motion.div>
      </div>
    </>
  );
}

export default Home;
