import React, { useEffect } from "react";
import lottie from "lottie-web";
// Animations
import { motion } from "framer-motion";
import {
  homeIllustrationAnim,
} from "../../animations/homeAnimations.js";

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
    <motion.div
    variants={homeIllustrationAnim}
    initial="initial"
    animate="animate"
      className="md:w-10/12 md:self-center | lg:w-8/12 xl:absolute xl:-right-1/2 xl:-bottom-[16%] xl:w-10/12 xl:z-50 xl:scale-105 "
      id="lottie-container"
    ></motion.div>
  );
}

export default HomeIllustration;
