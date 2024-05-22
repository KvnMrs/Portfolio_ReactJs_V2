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
      {showMenu && (
        <>
          <div className="burger-button-container">
            <button
              className="fixed z-50 h-auto left-4 top-4"
              type="button"
              onClick={toggleSidebar}
            >
              <SvgBurger />
            </button>
          </div>
          <Link to="/">
            <h1 className="logo">KM</h1>
          </Link>
        </>
      )}
      {openSidebar && (
        <div className="menu-nav-container">
          <div className="menu-nav-box">
            <button
              type="button"
              onClick={toggleSidebar}
              className="menu-nav-cross"
            >
              X
            </button>
            {/* Links Section */}
            <ol className="links-container">
              <li className="group">
                <Link className="link-box " onClick={toggleSidebar} to="/">
                  <SvgHome />
                  <p className="link-name">Accueil</p>
                </Link>
              </li>
              <li className="group">
                <Link className="link-box " onClick={toggleSidebar} to="/about">
                  <SvgProfile className={"link-svg"} />
                  <p className="link-name">A propos</p>
                </Link>
              </li>
              <li className="group">
                <Link
                  className="link-box "
                  onClick={toggleSidebar}
                  to="/projects"
                >
                  <SvgProject />
                  <p className="link-name">Projets</p>
                </Link>
              </li>
              <li className="group">
                <Link
                  className="link-box "
                  onClick={toggleSidebar}
                  to="/contact"
                >
                  <SvgContact />
                  <p className="link-name">Contact</p>
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
