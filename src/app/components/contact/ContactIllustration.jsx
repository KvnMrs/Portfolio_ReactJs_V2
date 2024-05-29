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
      className="hidden lg:flex lg:self-center lg:absolute lg:bottom-4 lg:left-[15%] lg:w-80 lg:scale-105 | xl::bottom-8 "
      id="lottie-container"
    ></div>
  );
}

export default ContactIllustration;
