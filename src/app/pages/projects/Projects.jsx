import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DatasProjects from "../../../datas/datasProjects";
// Components
import ProjectCard from "../../components/projects/ProjectCard";
export default function App() {
  const [selectedProject, setSelectedProject] = useState(1);

  return (
    <div className="flex justify-center items-center ">
      {DatasProjects.map((el, index) => (
        <motion.div
          key={index}
          className={`"left-0 top-0 absolute  w-1/2 flex flex-col cursor-pointer contrast-bg-1 "`}
          // initial={{ top: "6rem", left: "48rem" }}
          animate={{
            x: index * 40,
            top: "2rem",
            left: "8rem",
          }}
          style={{ zIndex: el.id === selectedProject ? 10 : 1 }} // Ajoutez cette ligne
          whileHover={{ zIndex: 50, x: 500, y: 500 }}
          onClick={() => setSelectedProject(el.id)}
        >
          <h1 className="text-xl">{el.title}</h1>
          <img className="project-img w-1/3 " alt={el.title} src={el.img} />
        </motion.div>
      ))}
      {/* <AnimatePresence exitBeforeEnter>
        {selectedProject && (
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, display: "flex" }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <ProjectCard
              projectData={DatasProjects.find(
                (el) => el.id === selectedProject
              )}
            />
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
}
