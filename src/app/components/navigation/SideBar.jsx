import React, { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import SvgHome from "../../../assets/svg/sidebar/links-section/SvgHome";
import SvgProfile from "../../../assets/svg/sidebar/links-section/SvgProfile";
import SvgProject from "../../../assets/svg/sidebar/links-section/SvgProject";
import SvgContact from "../../../assets/svg/sidebar/links-section/SvgContact";
import SvgBurger from "../../../assets/svg/sidebar/SvgBurger";
// Package
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
          className="sideBar-container"
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
    </>
  );
}

export default BarNav;
