import React from "react";
import SkillsCard from "./skillsCard";

type Props={};

 function Skills({}:Props){
    return <div>
      <div className="mb-32">
      <div className="">
      
      <h1 className=" text-4xl md:text-6xl mt-8 md:py-8 font-russo font-normal text-orange-500">Projects</h1>
    
    <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />

      </div></div>
     </div></div>
    }
      
    
export default Skills;