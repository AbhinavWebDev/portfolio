import { assets, infoList, skills, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Skills = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="w-full px-[12%] py-5 scroll-mt-20"
    >
     
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center md:text-5xl text-4xl lg:text-5xl font-Ovo"

      >
       Technical Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        // className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        className="flex w-full flex-col items-center gap-20 my-10"
      >
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <motion.p 
               initial={{opacity:0}}
               whileInView={{opacity:1}}
               transition={{duration:0.7,delay:0.5}}
               
               className="text-center max-w-3xl mx-auto mt-2 mb-12 font-Ovo">
                 {" "}
Tools and technologies I use to build scalable, production-ready web applications.               </motion.p>
          
          
         <motion.ul
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 1.5 }}
  className="flex flex-wrap justify-center gap-3 sm:gap-5 lg:max-w-5xl mx-auto"
>
  {skills.map((skill, index) => (
    <motion.li
      key={index}
      whileHover={{ scale: 1.05 }}
      className="
        flex items-center justify-center gap-1
        h-10 px-3
        border border-gray-400 rounded-lg
        cursor-pointer
        hover:-translate-y-1 duration-500
        bg-white
      "
    >
      <Image src={skill.icon} alt={skill.label} className="w-3 h-3 sm:w-5 sm:h-5 mx-1" />
       <p className="text-xs sm:text-sm font-medium text-gray-700">{skill.label}</p>
    </motion.li>
  ))}
</motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
