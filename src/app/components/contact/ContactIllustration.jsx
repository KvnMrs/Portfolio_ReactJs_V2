import React, { useEffect } from "react";
import lottie from "lottie-web";

function ContactIllustration() {
  useEffect(() => {
    const animationContainer = document.getElementById("lottie-container");
    const animationData = require("../../../assets/illustrations/ContactIllustration.json");

    const anim = lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div
      className="hidden md:flex md:self-center md:absolute md:bottom-4  md:left-[15%] md:w-80 md:scale-105 | xl::bottom-8 "
      id="lottie-container"
    ></div>
  );
}

export default ContactIllustration;
