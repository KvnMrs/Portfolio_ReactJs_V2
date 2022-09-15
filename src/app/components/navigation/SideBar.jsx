import React, { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import SvgHome from "../../../assets/svg/sidebar/links-section/SvgHome";
import SvgProfile from "../../../assets/svg/sidebar/links-section/SvgProfile";
import SvgSkills from "../../../assets/svg/sidebar/links-section/SvgSkills";
import SvgProject from "../../../assets/svg/sidebar/links-section/SvgProject";
import SvgContact from "../../../assets/svg/sidebar/links-section/SvgContact";
import SvgBurger from "../../../assets/svg/sidebar/SvgBurger";
import { Link } from "react-router-dom";

function BarNav() {
  const [openSidebar, setOpenSideBar] = useState(false);

  const toggleSidebar = () => {
    setOpenSideBar(!openSidebar);
  };
  return (
    <>
      <div className={openSidebar ? "sideBar-container " : "sideBar-closed "}>
        <div className="burger-button-container">
          <button type="button" onClick={toggleSidebar}>
            <SvgBurger />
          </button>
        </div>

        {/* Links Section */}
        <nav className={openSidebar ? "nav" : "hidden"}>
          <ol className="links-container">
            <li>
              <Link className="links" to="/">
                <SvgHome />
              </Link>
            </li>
            <li>
              <a className="links" href="#about">
                <SvgProfile />
              </a>
            </li>
            <li>
              <a className="links" href="#skills">
                <SvgSkills />
              </a>
            </li>
            <li>
              <a className="links" href="#projects">
                <SvgProject />
              </a>
            </li>
            <li>
              <a className="links" href="#contact">
                <SvgContact />
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}

export default BarNav;
