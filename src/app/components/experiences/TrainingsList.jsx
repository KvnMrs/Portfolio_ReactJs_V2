import React from "react";
// Packages
import { motion } from "framer-motion";

function TrainingsList({ datas }) {
  return (
    <motion.div
      className="lists-elements"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <img
        alt={datas.centre}
        src={datas.image}
        className="w-20 md:w-28 mx-auto mb-6"
      />

      <h1 className="text-xl text-white mb-1">{datas.centre}</h1>
      <h2 className="text-lg text-gray-400 mb-1">{datas.lieu}</h2>
      <h2 className="text-lg text-gray-400">{datas.date}</h2>
      <h3 className="">{datas.statut}</h3>
    </motion.div>
  );
}

export default TrainingsList;
