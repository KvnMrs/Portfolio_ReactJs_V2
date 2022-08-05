import React from "react";

const ProjectCard = ({ img, title, category, description, link }) => {
  return (
    <>
      <article>
        <img alt={title} src={img} />
        <aside>
          <h3>{title}</h3>
          <h4>{category}</h4>
          <p>{description}</p>

          <a href={link} blank="">
            Read more
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </aside>
      </article>
    </>
  );
};

export default ProjectCard;
