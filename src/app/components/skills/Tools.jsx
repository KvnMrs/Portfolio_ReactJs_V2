import React, { useState, useEffect, useRef, useCallback } from "react";

//Modules
import { gsap } from "gsap";

//Datas
import dataSkills from "../../../datas/datasSkills";

//Sub-component
import ButtonsSvg from "../../sub-components/buttons/ButtonsSvg";
import Tool from "../../sub-components/skills/Tool";

// Assets
import LeftArrowSvg from "../../../assets/svg/global/LeftArrowSvg";

//Hooks
import { useOnScreen } from "../../hooks/useOnScreen";

function Tools({ toggleSkills }) {
  const [activedAnimation, setActivedAnimation] = useState(false);
  const refTool = useRef();

  const refChildren = gsap.utils.selector(refTool);

  const onScreen = useOnScreen(refTool);

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
    onScreen && !activedAnimation && animationHardSkills(".boxTool");
  }, [onScreen]);

  return (
    <>
      <article className="hardSkills-container" ref={refTool}>
        <header className="hardSkills-header">
          <ButtonsSvg
            svg={<LeftArrowSvg />}
            fct={() => toggleSkills()}
            customClass={"mr-5"}
          />
          <h2 className="hardSkills-title mr-8 md:mr-16">Outils</h2>
        </header>

        <aside className="skill-container">
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
        </aside>
      </article>
    </>
  );
}

export default Tools;
