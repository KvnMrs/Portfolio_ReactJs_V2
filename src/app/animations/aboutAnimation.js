// About
export const descriptionAnim = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export const imageAnim = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export const softSkillsAnim = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.7 },
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
}