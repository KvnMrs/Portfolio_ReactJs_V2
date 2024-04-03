import React from "react";

// Package
import { motion } from "framer-motion";

//Datas
import dataSkills from "../../../datas/datasSkills";

//Sub-component
import ButtonCallToActionSvg from "../../sub-components/buttons/ButtonCallToActionSvg";
import Tool from "../../sub-components/skills/Tool";

// Assets
import LeftArrowSvg from "../../../assets/svg/global/LeftArrowSvg";

function Tools({ toggleSkills }) {
  return (
    <>
      <header className="section-headers">
        <ButtonCallToActionSvg
          svg={<LeftArrowSvg />}
          fct={() => toggleSkills()}
          customClass={"mr-5"}
        />
        <h2 className="section-titles mr-8 md:mr-16">Outils</h2>
      </header>

      <motion.aside
        className="skills-list"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {dataSkills
          .filter((category) => category.catégorie === "Outil")
          .map((tool) => (
            <Tool
              key={tool.element}
              tool={tool.element}
              categorie={tool.catégorie}
              img={tool.image}
            />
          ))}
      </motion.aside>
    </>
  );
}

export default Tools;
