import SkillsImages from "./skillsImages";
import skillsURLs from "../utils/skillsURLs";
export default function Skills(){
  const skillsComp = skillsURLs.map((skill) => {
    return <SkillsImages key={skill.id} url={skill.url} />;
  });
    return (
      <>
        {" "}
        <section id="skills" className="pt-4 md:px-10 px-6 mb-0 md:mb-20">
          <h1 className="text-3xl font-russo font-normal text-orange-500 md:text-5xl 2xl:text-6xl">
            Skills
          </h1>
          <div className=" flex gap-1 gap-x-8 flex-wrap justify-center items-center ">
            {/* <SkillsImages directionLeft={false} />
            <SkillsImages directionLeft={false} />
            <SkillsImages directionLeft={false} />
            <SkillsImages directionLeft={false} />
            <SkillsImages directionLeft={false} />
            <SkillsImages directionLeft={false} />
            <SkillsImages directionLeft={false} />
            <SkillsImages directionLeft={false} /> */}
            {skillsComp}
          </div>
        </section>
      </>
    );
}


