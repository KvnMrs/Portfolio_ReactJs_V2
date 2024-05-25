import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Animations
import { motion } from "framer-motion";
import { onNavigateAnim, openNavAnim } from "../../../animations/common/commonAnimations.js";
// Assets
import SvgHome from "../../../../assets/svg/sidebar/links-section/SvgHome";
import SvgProfile from "../../../../assets/svg/sidebar/links-section/SvgProfile";
import SvgProject from "../../../../assets/svg/sidebar/links-section/SvgProject";
import SvgContact from "../../../../assets/svg/sidebar/links-section/SvgContact";
import SvgBurger from "../../../../assets/svg/sidebar/SvgBurger";

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return setShowMenu(false);
    } else setShowMenu(true);
  }, [location]);

  const toggleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <>
      {showMenu && (
        <>
          <div className="btn-burger-container">
            <button
            className="btn-burger"
              type="button"
              onClick={toggleNavMenu}
            >
              <SvgBurger />
            </button>
          </div>
          <Link to="/">
            <button onClick={() => setIsMenuOpen(false)} type="button" className="logo">KM</button>
          </Link>
        </>
      )}
      {isMenuOpen && (
              <motion.nav
              variants={onNavigateAnim}
              initial="initial"
              animate="animate" className="menu-nav-container">
         <motion.div
              variants={openNavAnim}
              initial="initial"
              animate="animate" className="menu-nav-box">
            <div className="group">
              <button
                type="button"
                onClick={toggleNavMenu}
                className="menu-nav-cross"
              >
                X
              </button>
            </div>
            {/* Links Section */}
            <ol className="links-container">
              <li className="group">
                <Link className="link-box " onClick={toggleNavMenu} to="/">
                  <SvgHome />
                  <p className="link-name">Accueil</p>
                </Link>
              </li>
              <li className="group">
                <Link className="link-box " onClick={toggleNavMenu} to="/about">
                  <SvgProfile className={"link-svg"} />
                  <p className="link-name">A propos</p>
                </Link>
              </li>
              <li className="group">
                <Link
                  className="link-box "
                  onClick={toggleNavMenu}
                  to="/projects"
                >
                  <SvgProject />
                  <p className="link-name">Projets</p>
                </Link>
              </li>
              <li className="group">
                <Link
                  className="link-box "
                  onClick={toggleNavMenu}
                  to="/contact"
                >
                  <SvgContact />
                  <p className="link-name">Contact</p>
                </Link>
              </li>
            </ol>
          </motion.div>
        </motion.nav>
      )}
    </>
  );
}

export default NavMenu;
