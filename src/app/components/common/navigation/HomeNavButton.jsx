import React from "react";
import { Link } from "react-router-dom";

function HomeNavButton({ linkName, svg, link }) {
  return (
    <>
      <Link
        className="home-surfaces w-48 h-36 lg:w-56 lg:h-40 flex flex-col place-content-center items-center border border-t-0 border-transparent rounded-md |  md:gap-2 hover:scale-110 duration-300 ease-in | hover:border-sky-500 hover:bg-opacity-40 hover:rounded-2xl hover:shadow-md hover:shadow-sky-900"
        to={link}
      >
        {svg}
        <code className="font-semibold text-lg md:text-xl">{linkName}</code>
      </Link>
    </>
  );
}

export default HomeNavButton;
