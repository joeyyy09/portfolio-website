import Image from "next/image";
import avatar from "../public/Avatar.png";
import { motion } from "framer-motion";
import Text from "./Text";
import Project from "./Project";
import Nav from "./nav";
import Footer from "./Footer";
import Achievements from "./achievements";
import Education from "./education";
import Skills from "./skills";
const Fade = require("react-reveal/Fade");
const Zoom = require("react-reveal/Zoom");
export default function Home() {
  return (
    <div className="main">
      <main className="">
        <section className="min-h-screen banner">
          <Nav />
          <motion.div
            id="Home"
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="xl:mt-60 mt-40 px-10"
          >
            {/* relative bg-teal-500 rounded-full my-1 */}
            <Image
              className=" flex justify-center ml-8 h-60 w-60 object-cover  border-4 border-orange-500 rounded-full md:h-96 md:w-96 md:float-right "
              src="https://media.licdn.com/dms/image/C5603AQGbt0xX3lazlA/profile-displayphoto-shrink_200_200/0/1643091918137?e=1688601600&v=beta&t=BZwz2ASIbP2ceYYdoq-pgO7aAN8pITuxo85aCf_RD7s"
              width={1280}
              height={1280}
              alt={""}
            />
          </motion.div>

          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-left "
          >
            <h1 className=" px-10 md:text-4xl mt-24 md:mt-36 font-russo font-normal text-lg 2xl:text-6xl">
              Hi There!
            </h1>
            <h2 className=" px-10 md:text-6xl  text-orange-500 font-russo text-2xl font-semibold 2xl:text-8xl">
              {" "}
              <Text />
            </h2>
            <h3 className="px-10 font-amatic text-xl font-medium mt:4 md:mt-2 text-teal-200 md:text-5xl">
              Developer and an UI/UX Designer.
            </h3>
            <p className=" px-10 md:mt-10 mt-4 text-xs text-gray-200 md:text-lg">
              {" "}
              {"I'm"} an enthusiastic developer with a passion for creating
              innovative solutions and solving problems through code. As a
              beginner, {"I'm"} always eager to learn new technologies and expand my
              skillset.
            </p>
          </motion.div>
        </section>

        <div className="skills">
          <section id="project" className="mt-0 md:mt-4">
            <Project />
          </section>

          <Fade duration={1500}>
            <Skills />
          </Fade>
        </div>

        <section className="edac">
          <Fade left duration={1000}>
            <Education />
          </Fade>
          <Fade left duration={1000}>
            <Achievements />
          </Fade>
        </section>
      </main>
      <Footer />
    </div>
  );
}
