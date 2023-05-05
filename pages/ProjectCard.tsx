import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {};
export default function ProjectCard(props: {
  description4: ReactNode;
  description3: ReactNode;
  description2: ReactNode;
  description1: ReactNode;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.75 }}
      className="flex flex-col rounded-lg items-center space-y-7 pb-8    pt-4 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[630px] "
    >
      {/* <img
        className="md:w-32 md:h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center   "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpMgjV_xFjpbVUiUu4sYv_2YOZQ8CEegtVF9DuIwK&s"
        alt=""
      /> */}
      <div className="m-4 w-5/6 md:h-72 h-40 bg-slate-100"></div>
      <div className=" px-0 md:px-10 flex justify-items-start flex-col">
        <div>
          {" "}
          <h4 className="ml-4 md:ml-0 text-xl md:text-4xl mb-2 font-light">
            {props.title}
          </h4>
        </div>
        <div>
          <ul className="ml-4 px-4 md:ml-0 list-disc text-xs md:text-lg">
            <li>{props.description1}</li>
            <li>{props.description2}</li>
            <li>{props.description3}</li>
            <li>{props.description4}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
