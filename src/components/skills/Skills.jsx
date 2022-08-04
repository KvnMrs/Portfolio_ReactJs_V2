import React, { useState } from "react";
import HardSkills from "../../sub-components/skills/HardSkills";
import Tools from "../../sub-components/skills/Tools";

function Skills() {
  const [showOthersSkills, setShowOthersSkills] = useState(false);

  const toggleSkills = () => {
    return setShowOthersSkills(!showOthersSkills);
  };
  return (
    <>
      <section id="skills" className="Skills-container">
        {showOthersSkills ? (
          <Tools toggleSkills={toggleSkills} />
        ) : (
          <HardSkills toggleSkills={toggleSkills} />
        )}
      </section>
    </>
  );
}

export default Skills;
