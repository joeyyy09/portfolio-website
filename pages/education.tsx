import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.div className="px-6 md:px-10 pb-6">
      <h3 className="text-3xl mt-30 mb-6 md:mt-8 font-russo font-normal pt-8 2xl:mb-8 md:mb-4 text-orange-500 md:text-5xl 2xl:text-6xl">
        Education
      </h3>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-6 md:mb-6 2xl:mb-10 ml-4">
          <div className=" absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="text-md mb-2 font-normal leading-none text-gray-400 dark:text-gray-300 2xl:text-lg md:text-base">
            2021 - 2026
          </time>
          <h3 className="text-sm mb-2 2xl:text-xl md:text-lg mt-1 font-semibold text-gray-900 dark:text-white">
            Atal Bihari Vajpayee Indian Institute of Information Technology and
            Management, Gwalior
          </h3>
          <p className="text-sm 2xl:mt-2 2xl:mb-4 md:text-sm 2xl:text-base font-normal text-gray-900 dark:text-gray-300">
            Integrated Post Graduate Masters of Technology, Information
            Technology: CGPA - 8.29
          </p>
        </li>
        <li className="mb-4 md:mb-6 2xl:mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-2 2xl:text-lg md:text-base text-md font-normal leading-none text-gray-300 dark:text-gray-300">
            2019 - 2021{" "}
          </time>
          <h3 className="mb-1 text-sm mt-1 md:text-xl font-semibold text-gray-900 dark:text-white">
            Narayana Junior College
          </h3>
          <p className="md:text-sm 2xl:text-base text-sm 2xl:mt-2 font-normal text-gray-500 dark:text-gray-300">
            Central Board of Secondary Education, <br></br>Grade XII: 95%{" "}
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className=" 2xl:text-lg md:text-base text-md mb-1 font-normal leading-none text-gray-300 dark:text-gray-300">
            2007 - 2019
          </time>
          <h3 className="mt-1 mb-1 text-sm md:text-xl font-semibold text-gray-900 dark:text-white">
            {" "}
            The Presidential School
          </h3>
          <p className=" text-sm 2xl:mt-2 md:text-sm 2xl:text-base font-normal text-gray-500 dark:text-gray-300">
            Central Board of Secondary Education, <br></br>Grade X: 97%{" "}
          </p>
        </li>
      </ol>
    </motion.div>
  );
}
