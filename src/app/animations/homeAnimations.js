import { delay } from "framer-motion";

export const homeTitleAnim = {
  initial: {
    opacity: 0,
    x: -80
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delayChildren: 2.8,
      staggerChildren: 0.3
    },
  },
};
export const homeIllustrationAnim = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6,
      duration: 0.5
    },
  },
};

export const presentationContainerAnim = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

export const afterPresentation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 5, duration: 0.5
    },
  },
};

export const presentationBoxAnim = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const lettersNameAnim = {
  initial: {
    opacity: 0,
    rotate: 180,
    x: 40
  },
  animate: {
    opacity: 1,
    rotate: 0,
    x: 0
  }
};
export const lettersNameAnim2 = {
  initial: {
    opacity: 0,
    y: -40
  },
  animate: {
    transition: {
      duration: 0.8,
      type: "spring",
    },
    opacity: 1,
    y: 0
  }
}
