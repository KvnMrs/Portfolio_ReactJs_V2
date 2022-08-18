import React from "react";

// Datas
import dataCv from "../../../datas/datasExperiences";

// Sub-Component
import Experience from "../../sub-components/modal/Experience";

function Experiences() {
  return (
    <div className="content-experiences">
      {dataCv.map((experience) => (
        <Experience datas={experience} />
      ))}
    </div>
  );
}

export default Experiences;
