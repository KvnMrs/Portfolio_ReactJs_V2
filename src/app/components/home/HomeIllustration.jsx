import React, { useEffect } from "react";
import lottie from "lottie-web";

function HomeIllustration() {
  useEffect(() => {
    const animationContainer = document.getElementById("lottie-container");
    const animationData = require("../../../assets/illustrations/HomeIllustration.json");

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
      className="md:w-10/12 md:self-center | lg:w-8/12 xl:absolute xl:-right-[40%] xl:-bottom-10 xl:w-10/12 xl:z-50 xl:scale-105 "
      id="lottie-container"
    ></div>
  );
}

export default HomeIllustration;
