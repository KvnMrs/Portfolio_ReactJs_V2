import React, { useState, useEffect, useRef, useCallback } from "react";

//Modules
import { gsap } from "gsap";

// Datas
import dataSkills from "../../../datas/datasSkills";

// Sub-components
import ButtonsSvg from "../../sub-components/buttons/ButtonsSvg";
import HardSkill from "../../sub-components/skills/HardSkill";

// Assets
import RightArrowSvg from "../../../assets/svg/global/RightArrowSvg";

//Hooks
import { useOnScreen } from "../../hooks/useOnScreen";

const HardSkills = ({ toggleSkills }) => {
  const [activedAnimation, setActivedAnimation] = useState(false);
  const refHardSkill = useRef();

  const refChildren = gsap.utils.selector(refHardSkill);

  const onScreen = useOnScreen(refHardSkill);

  // Animations
  const animationHardSkills = useCallback(
    (element) => {
      setActivedAnimation(true);
      gsap.fromTo(
        refChildren(element),
        {
          opacity: 0,
          scale: 0.1,
        },
        {
          duration: 1,
          opacity: 1,
          scale: 1,
        }
      );
    },
    [onScreen]
  );

  useEffect(() => {
    onScreen && !activedAnimation && animationHardSkills(".boxSkill");
  }, [onScreen]);

  return (
    <>
      <article className="hardSkills-container" ref={refHardSkill}>
        <header className="hardSkills-header">
          <h2 className="hardSkills-title ml-16">Compétences</h2>
          <ButtonsSvg
            svg={<RightArrowSvg />}
            fct={() => toggleSkills()}
            customClass={"ml-5"}
          />
        </header>

        <aside className="skill-container">
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
        </aside>
      </article>
    </>
  );
};

export default HardSkills;
