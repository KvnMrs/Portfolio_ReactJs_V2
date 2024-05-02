import React, { useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import DatasProjects from "../../../datas/datasProjects";
// Components
import ProjectCard from "../../components/projects/ProjectCard";
export default function App() {
  const [selectedProject, setSelectedProject] = useState(1);
  const { scrollXProgress } = useScroll();

  return (
    <div className="flex flex-col md:flex-row pt-8 justify-around  content-center">
      <motion.div className="overflow-y-hidden overflow-y-auto md:scrollbar-hide flex gap-4 justify-around items-center self-auto | md:w-2/6  md:h-[40rem] md:flex-col md:gap-8 md:self-start md:overflow-x-hidden md:overflow-y-auto ">
        {DatasProjects.map((el, index) => (
          <motion.div
            key={index}
            className={"w-auto md:w-full flex flex-col cursor-pointer pl-4 "}
            animate={{ borderLeft: "0.5px solid white" }}
            whileHover={{ x: 20, borderLeft: 0 }}
            onHoverStart={() => setSelectedProject(el.id)}
            onClick={() => setSelectedProject(el.id)}
          >
            <h1 className="text-xl  w-max">{el.title}</h1>
            <img
              className=" h-20 md:h-auto md:w-3/4 rounded-lg"
              alt={el.title}
              src={el.img}
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="w-4/5 mx-auto my-8 border border-t-0 md:hidden"> </div>
      <AnimatePresence exitBeforeEnter>
        <div className="w-full md:w-1/2 content-center">
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
