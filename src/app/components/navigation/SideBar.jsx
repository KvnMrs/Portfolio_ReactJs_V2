import React, { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import SvgHome from "../../../assets/svg/sidebar/links-section/SvgHome";
import SvgProfile from "../../../assets/svg/sidebar/links-section/SvgProfile";
import SvgSkills from "../../../assets/svg/sidebar/links-section/SvgSkills";
import SvgProject from "../../../assets/svg/sidebar/links-section/SvgProject";
import SvgContact from "../../../assets/svg/sidebar/links-section/SvgContact";
import SvgBurger from "../../../assets/svg/sidebar/SvgBurger";

function BarNav() {
  const [openSidebar, setOpenSideBar] = useState(false);

  const toggleSidebar = () => {
    setOpenSideBar(!openSidebar);
  };
  return (
    <>
      <div className={openSidebar ? "sideBar-container " : "sideBar-closed "}>
        <div className="burger-button-container">
          <button className="absolute h-auto left-4 top-4" type="button" onClick={toggleSidebar}>
            <SvgBurger />
          </button>
        </div>

        {/* Links Section */}
        <nav className={openSidebar ? "nav" : "hidden"}>
          <ol className="links-container">
            <li>
              <Link className="links" to="/">
                <SvgHome />
                <p className="text-xl">Accueil</p>
              </Link>
            </li>
            <li>
              <Link className="links" to="#about">
                <SvgProfile />
                <p className="text-xl">A propos</p>
              </Link>
            </li>
            <li>
              <Link className="links" to="#projects">
                <SvgProject />
                <p className="text-xl">Projets</p>
              </Link>
            </li>
            <li>
              <Link className="links" to="#contact">
                <SvgContact />
                <p className="text-xl">Contact</p>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}

export default BarNav;
