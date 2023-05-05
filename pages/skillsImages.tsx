import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  directionLeft: boolean;
};

function SkillsImages(props: { url: string | undefined; }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="flex xl:flex-lg justify-around items-center"
    >
      <Image
        src={props.url!}
        className="rounded-full border border-orange-500 mt-4 md:mt-8 object-fill w-12 h-12 mb-4 md:mb-8 md:w-32 md:h-32"
        alt=""
        width={1920}
        height={1080}
      />
    </motion.div>
  );
}

export default SkillsImages;
