import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import project from "./data/project";
type Props = {};

function Project({}: Props) {
  const projectComp = project.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        title={project.title}
        description1={project.description1}
        description2={project.description2}
        description3={project.description3}
        description4={project.description4}
      />
    );
  });
  return (
    <motion.div className=" px-10 grid-cols-2">
      <div className="mb-8 md:mb-24 2xl:mb-52">
        <div className="">
          <h1 className=" text-2xl md:text-5xl 2xl:text-6xl mt-8  font-russo font-normal text-orange-500">
            Projects
          </h1>
          <div className="flex gap-1 gap-x-8 flex-wrap justify-center items-center ">
            {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}
            {projectComp}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
