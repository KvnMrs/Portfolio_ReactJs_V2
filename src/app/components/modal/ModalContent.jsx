import React, { useState, useEffect, useRef } from "react";

//Modules
import { gsap } from "gsap";

const ModalContent = ({ content }) => {
  const refModalContent = useRef();

  const refChildren = gsap.utils.selector(refModalContent);

  // Animations
  const animationModalContent = (element) => {
    gsap.fromTo(
      refChildren(element),
      {
        opacity: 0,
      },
      {
        duration: 3,
        opacity: 1,
      }
    );
  };

  useEffect(() => {
    animationModalContent(".boxModalContent");
  }, [content]);

  return (
    <>
      <div className="content-modal" ref={refModalContent}>
        {content}
      </div>
    </>
  );
};

export default ModalContent;
