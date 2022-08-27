import React from "react";

function ProfileInformation({ svg, text }) {
  return (
    <>
      <div className="w-4/6 flex flex-col my-2 md:my-4">
        <span className="self-center m-2 bg-white bg-opacity-40 rounded-lg p-1">
          {svg}
        </span>
        <p className="self-center text-center">{text}</p>
      </div>
    </>
  );
}

export default ProfileInformation;
