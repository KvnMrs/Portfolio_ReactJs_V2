import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function H2({ children }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.h2
        className="mb-4 text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <code>
          {"<"}
          {children}
          {"/>"}
        </code>
      </motion.h2>
    </AnimatePresence>
  );
}

export default H2;
