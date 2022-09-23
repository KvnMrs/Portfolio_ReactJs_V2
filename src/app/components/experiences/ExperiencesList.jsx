import React from "react";

// Package
import { motion } from "framer-motion";

function ExperiencesList({ datas, legend }) {
  return (
    <>
      <motion.div
        className="lists-elements"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1
          className={
            legend
              ? "mb-2 text-2xl md:text-3xl transition-all duration-700 " +
                `${datas.legendColor}`
              : "mb-2 text-2xl md:text-3xl transition-all duration-700 text-white"
          }
        >
          {datas.entreprise}
        </h1>
        <h2 className="mb-1 md:text-xl text-slate-200">{datas.lieu}</h2>
        <h2 className="mb-1 md:text-xl text-slate-200">{datas.date}</h2>
        <h3 className="mb-5 md:text-xl text-slate-200">{datas.statut}</h3>
        <div className="w-3/4 md:w-5/6 mx-auto text-start">
          <p className="md:text-lg text-slate-200 italic">{datas.mission}</p>
          {datas.mission2 && (
            <>
              <p className="md:text-lg text-slate-200 italic">
                {datas.mission2}
              </p>
              <p className="md:text-lg text-slate-200 italic">
                {datas.mission3}
              </p>
              <p className="md:text-lg text-slate-200 italic">
                {datas.mission4}
              </p>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default ExperiencesList;
