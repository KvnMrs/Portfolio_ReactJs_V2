import React from "react";

// Assets
import SvgHome from "../../../assets/svg/sidebar/links-section/SvgHome";
import SvgProfile from "../../../assets/svg/sidebar/links-section/SvgProfile";
import SvgSkills from "../../../assets/svg/sidebar/links-section/SvgSkills";
import SvgProject from "../../../assets/svg/sidebar/links-section/SvgProject";
import SvgContact from "../../../assets/svg/sidebar/links-section/SvgContact";

function BarNav() {
  return (
    <>
      <div className="sideBar-container ">
        {/* Links Section */}
        <nav className="nav">
          <ol>
            <li>
              <a className="links" href="#home">
                <SvgHome />
              </a>
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
