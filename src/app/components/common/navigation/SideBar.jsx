import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Assets
import SvgHome from "../../../../assets/svg/sidebar/links-section/SvgHome";
import SvgProfile from "../../../../assets/svg/sidebar/links-section/SvgProfile";
import SvgProject from "../../../../assets/svg/sidebar/links-section/SvgProject";
import SvgContact from "../../../../assets/svg/sidebar/links-section/SvgContact";
import SvgBurger from "../../../../assets/svg/sidebar/SvgBurger";
// Packages
import { motion } from "framer-motion";

function BarNav() {
  const [openSidebar, setOpenSideBar] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return setShowMenu(false);
    } else setShowMenu(true);
  }, [location]);

  const toggleSidebar = () => {
    setOpenSideBar(!openSidebar);
  };
  return (
    <>
      {/* MOBILE */}
      {showMenu && (
        <div className="burger-button-container">
          <button
            className="fixed z-50 h-auto left-4 top-4"
            type="button"
            onClick={toggleSidebar}
          >
            <SvgBurger />
          </button>
        </div>
      )}
      {openSidebar && (
        <motion.div
          className="sideBar-container "
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Links Section */}
          <ol className="links-container">
            <li>
              <Link className="links" to="/">
                <SvgHome className={"sidebar-svg"} />
                <p className="text-xl hover:text-sky-500 duration-300 hover:scale-110">
                  Accueil
                </p>
              </Link>
            </li>
            <li>
              <Link className="links" to="/about">
                <SvgProfile className={"sidebar-svg"} />
                <p className="text-xl hover:text-sky-500 duration-300 hover:scale-110">
                  A propos
                </p>
              </Link>
            </li>
            <li>
              <Link className="links" to="/projects">
                <SvgProject className={"sidebar-svg"} />
                <p className="text-xl hover:text-sky-500 duration-300 hover:scale-110">
                  Projets
                </p>
              </Link>
            </li>
            <li>
              <Link className="links" to="/contact">
                <SvgContact className={"sidebar-svg"} />
                <p className="text-xl hover:text-sky-500 duration-300 hover:scale-110">
                  Contact
                </p>
              </Link>
            </li>
          </ol>
        </motion.div>
      )}
      {/* DESKTOP */}
      {showMenu && (
        <div className="hidden bg-gradient-to-l from-transparent rounded-md via-black z-40 w-full px-8 py-4 pr-8  | md:flex md:fixed md:justify-center">
          <div className="flex | md:w-10/12 | lg:w-1/2">
            <Link to="/">
              <h1 className="text-xl font-bold z-50">KM</h1>
            </Link>
            <ol className="flex gap-8 ml-auto place-content-end">
              <li>
                <Link to="/">
                  <p className="text-xl hover:text-sky-500 duration-300 hover:scale-110">
                    Accueil
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <p className="text-xl hover:text-sky-500 duration-300 hover:scale-110">
                    A propos
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <p className="text-xl hover:text-sky-500 duration-300 hover:scale-110">
                    Projets
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <p className="text-xl hover:text-sky-500 duration-300 hover:scale-110">
                    Contact
                  </p>
                </Link>
              </li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
}

export default BarNav;
