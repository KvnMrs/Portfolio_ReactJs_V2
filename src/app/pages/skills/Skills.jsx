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
      <section id="skills" className="section-containers">
        <div className="section-surfaces">
          <article className="article-containers">
            {showOthersSkills && <Tools toggleSkills={toggleSkills} />}
            {!showOthersSkills && <HardSkills toggleSkills={toggleSkills} />}
          </article>
        </div>
      </section>
    </>
  );
}

export default Skills;
