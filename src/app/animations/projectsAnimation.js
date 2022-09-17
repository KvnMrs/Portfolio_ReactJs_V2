export const projectsAnim = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const projectAnim = {
  initial: { x: -200, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: { durantion: 0.5 },
  },
  exit: {
    x: 200,
    opacity: 0,
  },
};
