import React from "react";
import { Link } from "react-router-dom";

function HomeNavButton({ linkName, svg, link }) {
  return (
    <>
      <Link className="home-link" to={link}>
        {svg}
        <code className="home-link-name">{linkName}</code>
      </Link>
    </>
  );
}

export default HomeNavButton;
