import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const colors = ["white", "cyan"];

function H2({ children }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.h2
        className="mb-4 text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {"< "}
        {children}
        {" />"}
      </motion.h2>
    </AnimatePresence>
  );
}

export default H2;
