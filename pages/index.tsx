import Image from "next/image";
import { motion } from "framer-motion";
import Text from "./Text";
import Project from "./Project";
import Nav from "./nav";
import Footer from "./Footer";
import Achievements from "./achievements";
import Education from "./education";
import Avatar from "../public/Avatar.png";
import Skills from "./skills";
import { Fade } from "react-awesome-reveal";

export const config = {
  unstable_runtimeJS: false,
};

export default function Home() {
  return (
    <div className="main">
      <main className="">
        <section className="min-h-screen banner pb-2">
          <Nav />
          <motion.div
            className="xl:mt-40 mt-20 px-10"
          >
            {/* relative bg-teal-500 rounded-full my-1 */}
            <Image
              className=" flex justify-center ml-8 h-60 w-60 object-cover  border-4 border-orange-500 rounded-full md:h-96 md:w-96 md:float-right "
              src={Avatar}
              priority={true}
              width={1280}
              height={1280}
              alt={""}
            />
          </motion.div>

          <motion.div
            className="text-left "
          >
            <h1 className=" px-10 md:text-4xl mt-8 md:mt-36 font-dancingScript font-normal text-2xl 2xl:text-6xl">
              Hi There!
            </h1>
            <h2 className=" px-10 md:mt-4 md:text-6xl  text-orange-500 font-russo text-3xl font-semibold 2xl:text-8xl">
              {" "}
              <Text />
            </h2>
            <h3 className="px-10 font-amatic text-3xl font-medium mt:6 md:mt-2 text-teal-200 md:text-5xl">
              Developer and an UI/UX Designer.
            </h3>
            <div>
              <p className=" px-10 md:mt-10 font-monteserrat mt-8 text-sm text-gray-200 md:text-lg">
                {" "}
                {"I'm"} an enthusiastic developer with a passion for creating
                innovative solutions and solving problems through code. As a
                beginner, {"I'm"} always eager to learn new technologies and
                expand my skillset.
              </p>
            </div>
          </motion.div>
        </section>

        <div className="skills">
          <section id="project" className="mt-0 pb-2 md:mt-4">
            <Project />
          </section>
        </div>

        <section className="edac">
          <Fade duration={500}>
            <Skills />
          </Fade>
          <Fade duration={500}>
            <Achievements />
          </Fade>
          <Fade duration={500}>
            <Education />
          </Fade>
        </section>
      </main>
      <Footer />
    </div>
  );
}
