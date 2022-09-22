import React from "react";

function ProfileInformation({ svg, text, children }) {
  return (
    <>
      <div className="w-full flex my-2 md:my-3">
        {svg && (
          <span className="w-5 sm:w-8 md:w-10 self-center my-2 mx-3 bg-white bg-opacity-40 rounded-lg p-1">
            {svg}
          </span>
        )}
        {text ? (
          <p className="self-center text-sm sm:text-base">{text}</p>
        ) : (
          children
        )}
      </div>
    </>
  );
}

export default ProfileInformation;
