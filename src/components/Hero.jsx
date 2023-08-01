import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn, refreshPage } from "../utils/motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <motion.div
        variants={refreshPage(0.5)}
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start justify-center gap-5 mb-10`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

        <div>
          <div className="-mt-6 flex flex-col items-center justify-center text-center">
            <p className={`${styles.heroSubText}`}>Hi, I'm Tio Dwi Satrio 👋</p>
            <h1 className={`${styles.heroHeadText} headtext`}>
              Fullstack Web Developer
            </h1>
            <p className={`${styles.heroSmallText} mt-3`}>
              <span className="font-semibold">2+ years of experiences</span> in
              frontend and backend development using Javascript Technologies for
              developing a website and web applications.
            </p>

            {/* <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#730CC3]">Tio Dwi Satrio</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I design User interfaces <br /> and develop Web Applications
            </p> */}
          </div>

          <div className="flex flex-row items-center justify-center mt-5 mb-3">
            <span className="w-4 h-4 rounded-full blue-pink-gradient z-10"></span>
            <span className="w-full md:1/2 lg:w-1/2 h-[2px] purple-blue-gradient rounded-full -ml-4"></span>
            {/* <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
          </div>
        </div>
      </motion.div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
