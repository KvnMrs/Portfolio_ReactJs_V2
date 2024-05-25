export const comeFromLeftAnim = {
    initial: { opacity: 0, x: -80 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "linear",
            duration: 0.4,
        },
    },
};
export const comeFromRightAnim = {
    initial: { opacity: 0, x: 80 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "linear",
            duration: 0.4,
        },
    },
};

export const openNavAnim = {
    initial: { scale: 0 },
    animate: {
        scale: 1,
        transition: {
            ease: "linear",
            duration: 0.4,
        },
    },
};

export const onNavigateAnim = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            ease: "linear",
            duration: 0.4,
        },
    },
};

export const skillsContainerAnim = {
    initial: { opacity: 0, x: -40 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1,
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