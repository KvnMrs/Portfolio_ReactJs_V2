import React from "react";

function Tool({ tool, categorie, img }) {
  return (
    <>
      <div className="skill-container">
        <h3 className="skill-name">{tool}</h3>
        <img className="skill-img" alt={categorie} src={img} />
      </div>
    </>
  );
}

export default Tool;
