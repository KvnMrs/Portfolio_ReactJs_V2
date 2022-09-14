import React from "react";

// Package
import { motion } from "framer-motion";

// Datas
import dataSkills from "../../../datas/datasSkills";

// Sub-components
import ButtonCallToActionSvg from "../../sub-components/buttons/ButtonCallToActionSvg";
import HardSkill from "../../sub-components/skills/HardSkill";

// Assets
import RightArrowSvg from "../../../assets/svg/global/RightArrowSvg";

const HardSkills = ({ toggleSkills }) => {
  return (
    <>
      <article className="sections-sub-containers">
        <header className="sections-headers">
          <h2 className="sections-titles ml-8 md:ml-16">Compétences</h2>
          <ButtonCallToActionSvg
            svg={<RightArrowSvg />}
            fct={() => toggleSkills()}
            customClass={"ml-5"}
          />
        </header>

        <motion.aside
          className="skills-list"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {dataSkills
            .filter((category) => category.catégorie === "Compétence")
            .map((hardSkill) => (
              <HardSkill
                key={hardSkill.element}
                hardSkill={hardSkill.element}
                catégorie={hardSkill.catégorie}
                img={hardSkill.image}
              />
            ))}
        </motion.aside>
      </article>
    </>
  );
};

export default HardSkills;
