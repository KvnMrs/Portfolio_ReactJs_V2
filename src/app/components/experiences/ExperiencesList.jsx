import React from "react";

// Package
import { motion } from "framer-motion";

function ExperiencesList({ datas }) {
  return (
    <>
      <motion.div
        className="lists-elements"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-2xl md:text-3xl text-white">{datas.entreprise}</h1>
        <h2 className="text-xl text-slate-200">{datas.lieu}</h2>
        <h2 className="text-xl text-slate-200">{datas.date}</h2>
        <h3 className="text-lg text-slate-200">{datas.statut}</h3>
        <p className="text-lg text-slate-200 italic">{datas.mission}</p>
      </motion.div>
    </>
  );
}

export default ExperiencesList;
