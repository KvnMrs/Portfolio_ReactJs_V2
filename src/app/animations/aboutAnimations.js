import { delay } from "framer-motion";

export const aboutMeDescriptionAnim = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const aboutMeImgAnim = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const skillsContainerAnim = {
  initial: { opacity: 0, x: -40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.4,
      ease: "linear",
      staggerChildren: 0.4,
    },
  },

}; export const skillsContainerAnim2 = {
  initial: { opacity: 0, x: -40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      staggerChildren: 0.4,
    },
  },
};

export const skillsBoxAnim = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const logoBoxAnim = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 0.2,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.4,
    },
  },
};