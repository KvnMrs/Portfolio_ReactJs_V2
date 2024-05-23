export const nameAnim = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      duration: 0.8,
    },
  },
};
export const jobAnim = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.4,
      duration: 1,
    },
  },
};
export const buttonAnim = {
  initial: { opacity: 0, x: -200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
};

// background lines
export const div1 = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: 1000,
    transition: {
      duration: 7,
      repeat: Infinity,
    },
  },
};
export const div2 = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: 800,
    transition: {
      repeatDelay: 1,
      duration: 5,
      repeat: Infinity,
    },
  },
};
export const div3 = {
  initial: { opacity: 0, height: 0, y: 0 },
  animate: {
    opacity: 1,
    height: 900,
    y: -1000,
    transition: {
      repeatDelay: 1,
      duration: 4,
      repeat: Infinity,
    },
  },
};
export const div4 = {
  initial: { opacity: 0, height: 0, y: 0 },
  animate: {
    opacity: 1,
    height: 1000,
    y: -2000,
    transition: {
      repeatDelay: 1,
      duration: 7,
      repeat: Infinity,
    },
  },
};
