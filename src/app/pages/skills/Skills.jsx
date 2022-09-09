import React, { useState } from "react";

// Components
import HardSkills from "../../components/skills/HardSkills";
import Tools from "../../components/skills/Tools";

function Skills() {
  const [showOthersSkills, setShowOthersSkills] = useState(false);

  const toggleSkills = () => {
    return setShowOthersSkills(!showOthersSkills);
  };

  return (
    <>
      <section id="skills" className="sections-containers">
        <div className="sections-surfaces">
          <article className="sections-sub-containers">
            {showOthersSkills ? (
              <Tools toggleSkills={toggleSkills} />
            ) : (
              <HardSkills toggleSkills={toggleSkills} />
            )}
          </article>
        </div>
      </section>
    </>
  );
}

export default Skills;
