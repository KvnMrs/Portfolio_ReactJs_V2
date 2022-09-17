// Experiences
export const listsContainerAnim = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const listsItemsAnim = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const legendAnim = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};
