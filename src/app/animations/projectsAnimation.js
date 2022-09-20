export const projectsContainer = {
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

export const projecItemAnim = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    x: 100,
    opacity: 0,
  },
};
