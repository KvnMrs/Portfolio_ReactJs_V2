import React from "react";

// Datas
import dataSkills from "../../../datas/datasSkills";

function Tools({ toggleSkills }) {
  return (
    <>
      <article className="HardSkills-container">
        <header>
          <button
            type="button"
            className="group mr-5"
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
              <path d="M170.6 249.1c3.1 3.2 4.8 5.1 6.5 6.8l198.5 198.5c2.1 2.1 4.3 4.3 6.2 6.6 7.4 9.4 6.9 22.6-1 31.2-8.1 8.8-21.7 10.4-31.6 3.4-2.3-1.6-4.3-3.5-6.2-5.5-73.4-73.2-146.7-146.5-220-219.8-1.6-1.6-3.2-3.2-4.6-5-7.6-9.6-7.5-21.8.4-31.2 1.3-1.5 2.8-2.9 4.2-4.4C196.3 156.4 269.6 83.1 342.8 9.8c5.5-5.5 11.4-9.8 19.7-9.8 10.1 0 17.5 4.4 22 13.3 4.4 8.9 3.4 17.6-2.6 25.6-2 2.6-4.4 4.8-6.7 7.2-65.6 65.6-131.2 131.2-196.9 196.8-2.2 2.1-4.7 3.8-7.7 6.2z" />
            </svg>
          </button>
          <h2 className="mr-20">Outils</h2>
        </header>

        <aside>
          {dataSkills
            .filter((outil) => outil.catégorie === "Outil")
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
}

export default Tools;
