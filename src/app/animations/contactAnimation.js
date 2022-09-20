export const inputsAnim = {
  initial: { opacity: 0, x: -100 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const texteAreaAnim = {
  initial: { opacity: 0, x: 100 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const submitAnim = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: {
    opacity: 1,
    scale: 1,
    rotateY: 360,
    transition: { delay: 0.7, duration: 0.7 },
  },
};
