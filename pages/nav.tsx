import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <nav className="md:mb-0 mb-40 px-10 pt-8  flex justify-end">
      <a href=" https://github.com/joeyyy09">
        <div className="text-4xl flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-130 hover: duration-800 md:text-5xl">
          <AiFillGithub />
        </div>
      </a>
      <a href="https://www.instagram.com/harshith.mente/">
        <div className="text-4xl px-6 flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-130 hover: duration-800 md:text-5xl">
          <AiFillInstagram />
        </div>
      </a>
      <a href=" https://www.linkedin.com/in/harshith-mente-001492224?originalSubdomain=in">
        <div className="text-4xl flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-130 hover: duration-800 md:text-5xl">
          <AiFillLinkedin />
        </div>
      </a>

      <ul className="flex items-center">
        <li>
          <motion.div whileTap={{ scale: 0.75 }} whileHover={{ scale: 1.1 }}>
            <a
              className=" px-4 py-3  text-sm md:text-lg bg-orange-500 text-white md:px-6 md:py-4 rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </motion.div>
        </li>
      </ul>
    </nav>
  );
}
