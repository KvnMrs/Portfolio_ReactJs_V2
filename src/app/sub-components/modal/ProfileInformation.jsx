import React from "react";

function ProfileInformation({ svg, text }) {
  return (
    <>
      <div className="flex my-8">
        <span className="self-center mr-4 bg-white bg-opacity-40 rounded-lg p-1">
          {svg}
        </span>
        <p className="self-center">{text}</p>
      </div>
    </>
  );
}

export default ProfileInformation;
