import React from "react";
import { Link } from "react-router-dom";

function HomeNavButton({ linkName, svg, link }) {
  return (
    <>
      <Link
        className="flex flex-col place-content-center items-center rounded-md md:w-40 md:h-40 md:gap-2"
        to={link}
      >
        {svg}
        <h2 className="text-lg md:text-xl">{linkName}</h2>
      </Link>
    </>
  );
}

export default HomeNavButton;
