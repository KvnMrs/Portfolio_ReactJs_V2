// About
export const descriptionAnim = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

export const imageAnim = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.7 } },
};

export const softSkillsAnim = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 1.4 },
  },
};

export const imageHoverAnim = {
  whileHover: {
    borderColor: "cyan",
    scale: 1.2,
  },
  transition: { duration: 0 },
};

export const softSkillHoverAnim = {
  whileHover: {
    scale: 1.2,
  },
  transition: { duration: 0 },
};

// Modal
export const modalAnim = {
  initial: { y: -1000 },
  animate: { y: 0, transition: { ease: "easeOut", duration: 0.7 } },
  exit: { y: -1000, transition: { ease: "easeOut", duration: 0.4 } },
};

// Modal Profile part
export const modalProfileInfosAnim = {
  initial: { opacity: 0, x: -150 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  viewport: { once: true },
};

export const modalProfileContactAnim = {
  initial: { opacity: 0, x: 150 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  viewport: { once: true },
};

export const modalProfileHobbiesAnim = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  viewport: { once: true },
};
