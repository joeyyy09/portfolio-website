import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft: boolean;
};

function SkillsImages(props: { url: string | undefined; }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="flex xl:flex-lg justify-around items-center"
    >
      <img
        src={props.url}
        className="rounded-full border border-orange-500 mt-4 md:mt-8 object-fill w-12 h-12 mb-4 md:mb-8 md:w-32 md:h-32"
      />
    </motion.div>
  );
}

export default SkillsImages;
