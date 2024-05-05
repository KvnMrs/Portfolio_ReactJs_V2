import React from "react";

function SocialMediasLinks({ link, img, alt }) {
  return (
    <>
      <a className="h-fit bg-white rounded-2xl " href={link} target="blank">
        <img className="w-8 md:w-10" src={img} alt={alt} />
      </a>
    </>
  );
}

export default SocialMediasLinks;
