import React from "react";
// Packages
import { motion } from "framer-motion";
// Animations
import { descriptionAnim } from "../../animations/aboutAnimation";

function About() {
  return (
    <>
      <section id="about" className="w-full h-screen">
        <article className="sections-sub-containers">
          <div className="">
            <motion.aside
              className="flex flex-col gap-2"
              variants={descriptionAnim}
              initial="initial"
              animate="animate"
            >
              <p className="text-3xl">Je suis..</p>
              <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </motion.aside>
          </div>
        </article>
      </section>
    </>
  );
}

export default About;
