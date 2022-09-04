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
      <section id="skills" className="section-container">
        <div className="section-surface">
          {showOthersSkills ? (
            <Tools toggleSkills={toggleSkills} />
          ) : (
            <HardSkills toggleSkills={toggleSkills} />
          )}
        </div>
      </section>
    </>
  );
}

export default Skills;
