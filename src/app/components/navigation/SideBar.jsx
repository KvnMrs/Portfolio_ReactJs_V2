import React, { useState } from "react";
import { Link } from "react-router-dom";
// Assets
import SvgHome from "../../../assets/svg/sidebar/links-section/SvgHome";
import SvgProfile from "../../../assets/svg/sidebar/links-section/SvgProfile";
import SvgProject from "../../../assets/svg/sidebar/links-section/SvgProject";
import SvgContact from "../../../assets/svg/sidebar/links-section/SvgContact";
import SvgBurger from "../../../assets/svg/sidebar/SvgBurger";
// Packages
import { motion } from "framer-motion";
// Animations
import { modalAnim } from "../../animations/aboutAnimation";

function BarNav() {
  const [openSidebar, setOpenSideBar] = useState(false);

  const toggleSidebar = () => {
    setOpenSideBar(!openSidebar);
  };
  return (
    <>
      {/* MOBILE */}
      <div className="burger-button-container md:hidden">
        <button
          className="fixed z-50 h-auto left-4 top-4"
          type="button"
          onClick={toggleSidebar}
        >
          <SvgBurger />
        </button>
      </div>
      {openSidebar && (
        <motion.div
          className="sideBar-container md:hidden"
          variants={modalAnim}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Links Section */}
          <ol className="links-container">
            <li>
              <Link className="links" to="/">
                <SvgHome className={"sidebar-svg"} />
                <p className="text-xl">Accueil</p>
              </Link>
            </li>
            <li>
              <Link className="links" to="about">
                <SvgProfile className={"sidebar-svg"} />
                <p className="text-xl">A propos</p>
              </Link>
            </li>
            <li>
              <Link className="links" to="projects">
                <SvgProject className={"sidebar-svg"} />
                <p className="text-xl">Projets</p>
              </Link>
            </li>
            <li>
              <Link className="links" to="contact">
                <SvgContact className={"sidebar-svg"} />
                <p className="text-xl">Contact</p>
              </Link>
            </li>
          </ol>
        </motion.div>
      )}
      {/* DESKTOP */}
      <Link className="" to="/">
        <h1 className="absolute top-4 left-8 text-xl font-bold">KM</h1>
      </Link>

      <div className="hidden md:flex w-10/12 px-8 pt-4 pr-8 ml-auto">
        <ol className="w-1/2 flex gap-8 ml-auto place-content-end">
          <li>
            <Link to="/">
              {/* <SvgHome className={"sidebar-svg"} /> */}
              <p className="text-xl">Accueil</p>
            </Link>
          </li>
          <li>
            <Link to="about">
              {/* <SvgProfile className={"sidebar-svg"} /> */}
              <p className="text-xl">A propos</p>
            </Link>
          </li>
          <li>
            <Link to="projects">
              {/* <SvgProject className={"sidebar-svg"} /> */}
              <p className="text-xl">Projets</p>
            </Link>
          </li>
          <li>
            <Link to="contact">
              {/* <SvgContact className={"sidebar-svg"} /> */}
              <p className="text-xl">Contact</p>
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
}

export default BarNav;
