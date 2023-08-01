import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";

import {
  AiOutlineGithub,
  AiOutlineDribbble,
  AiOutlineWhatsApp,
  AiFillMessage,
} from "react-icons/ai";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-10"
      >
        I'm a skilled software developer with experience in{" "}
        <strong>TypeScript</strong> and <strong>JavaScript</strong>, and
        expertise in frameworks/libraries like{" "}
        <strong>React, Next, Node, Express, Tailwind, and Bootstrap.</strong> I'm a
        quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

      {/* Create button for sending email */}
      <motion.p variants={fadeIn("", "", 0.2, 1)}>
        <div className="flex items-center gap-x-5">
          <a
            href="mailto:tiodwisatrio27@gmail.com"
            className="flex gap-x-2 items-center green-pink-gradient rounded px-4 py-2"
          >
            <AiFillMessage />
            <button className="">Email Me</button>
          </a>
          <Link to="https://github.com/tiodwisatrio" target="_blank">
            <AiOutlineGithub className="text-2xl opacity-70 hover:opacity-100" />
          </Link>

          <Link to="https://dribbble.com/tiodwisatrio" target="_blank">
            <AiOutlineDribbble className="text-2xl opacity-70 hover:opacity-100" />
          </Link>

          <Link to="https://wa.me/6288972061745" target="_blank">
            <AiOutlineWhatsApp className="text-2xl opacity-70 hover:opacity-100" />
          </Link>
        </div>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
