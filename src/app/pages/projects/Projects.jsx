import React from "react";
import { AnimatePresence } from "framer-motion";
// Components
import ProjectCard from "../../components/projects/ProjectCard";
import dataProjects from "../../../datas/datasProjects";

export default function App() {
  return (
    <section className="section-containers">
      <div className="flex flex-col items-center">
        <AnimatePresence exitBeforeEnter>
          {dataProjects.map((el) => (
            <>
              <ProjectCard projectData={el} />
            </>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
