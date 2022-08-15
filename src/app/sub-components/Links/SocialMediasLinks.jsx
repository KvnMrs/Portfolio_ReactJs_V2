import React from "react";

function SocialMediasLinks({ link, img, alt }) {
  return (
    <>
      <a
        className="bg-white rounded-2xl duration-700 m-3 hover:scale-125"
        href={link}
        target="blank"
      >
        <img className="w-12 m-1" src={img} alt={alt} />
      </a>
    </>
  );
}

export default SocialMediasLinks;
