import React from "react";
import dataSkills from "../../datas/DatasSkills";

const HardSkills = ({ toggleSkills }) => {
  return (
    <>
      <article className="HardSkills-container">
        <header>
          <h2 className="ml-20">Compétences</h2>
          <button
            type="button"
            className="group ml-5"
            onClick={() => {
              toggleSkills();
            }}
          >
            <svg
              className="group-hover:fill-cyan-600 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              style={{ enableBackground: "new 0 0 500 500" }}
              fill="white"
            >
              <path d="M329.4 248.4c-2.4-1.8-5.1-3.4-7.2-5.5C256 176.8 189.8 110.6 123.6 44.5c-4.7-4.7-9.1-9.4-10-16.4-1.4-10.2 1.9-18.4 10.5-24.2 8.1-5.5 18.9-5.1 27 .7 2.4 1.8 4.6 3.9 6.7 6 73 72.9 145.9 145.8 218.8 218.9 4 4 7.5 9 9.4 14.2 2.8 7.8.7 15.4-4.7 21.9-1.3 1.5-2.7 3-4.2 4.4-73.5 73.6-147 147-220.4 220.6-5.6 5.5-11.6 9.6-19.8 9.4-9.8-.2-17-4.6-21.2-13.3-4.2-8.6-3.4-17.2 2.3-25 1.8-2.4 4-4.5 6.2-6.6 66.2-66.2 132.3-132.4 198.5-198.5 1.9-1.9 4.4-3.4 6.6-5 0-1.1.1-2.1.1-3.2z" />
            </svg>
          </button>
        </header>

        <aside>
          {dataSkills
            .filter((compétence) => compétence.catégorie === "Compétence")
            .map((el) => (
              <div>
                <h3>{el.element}</h3>
                <img alt={el.catégorie} src={el.image} />
              </div>
            ))}
        </aside>
      </article>
    </>
  );
};

export default HardSkills;
