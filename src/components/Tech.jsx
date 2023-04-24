import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-center text-2xl font-semibold">Skills</h1>
        <p>Tech that i used to make your apps come true</p>
      </div> */}
      <motion.div
        variants={textVariant()}
        className="text-center flex flex-col gap-y-2 mb-10"
      >
        <p className={styles.sectionSubText}>Tech</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
