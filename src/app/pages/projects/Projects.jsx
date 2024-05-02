import React, { useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import DatasProjects from "../../../datas/datasProjects";
// Components
import ProjectCard from "../../components/projects/ProjectCard";
export default function App() {
  const [selectedProject, setSelectedProject] = useState(1);
  const { scrollXProgress } = useScroll();

  return (
    <div className="flex  pt-8 justify-around  content-center">
      <motion.div className="w-2/6 h-[40rem] overflow-x-hidden scrollbar-hide overflow-auto flex flex-col gap-4 justify-around items-center self-start pt-8">
        {DatasProjects.map((el, index) => (
          <motion.div
            key={index}
            className={"w-full flex flex-col cursor-pointer pl-4 "}
            animate={{ borderLeft: "0.5px solid white" }}
            whileHover={{ x: 20, borderLeft: 0 }}
            onHoverStart={() => setSelectedProject(el.id)}
            onClick={() => setSelectedProject(el.id)}
          >
            <h1 className="text-xl">{el.title}</h1>
            <img className=" w-3/4 rounded-lg" alt={el.title} src={el.img} />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence exitBeforeEnter>
        <div className="w-1/2 content-center">
          {selectedProject && (
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{}}
            >
              <ProjectCard
                projectData={DatasProjects.find(
                  (el) => el.id === selectedProject
                )}
              />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}
