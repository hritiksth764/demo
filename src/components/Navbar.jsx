import React from "react";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import logoImage from "../assets/REG web assets.svg";

const Navbar = () => {
  return (
    <div className="w-full fixed z-[9999]">
      <nav className="text-white sm:mx-[10rem] max-w-screen-2xl  sm:px-0 px-8 sm:py-5 py-5 flex items-center justify-between">
        <div className="inline-block">
          <img src={logoImage} alt="Logo" className="sm:w-50 w-25 h-auto" />
        </div>

        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.9 }}
          className="md:hidden sm:hidden"
        >
          <FiMenu className="text-xl " />
        </motion.span>

        <motion.div className="overflow-hidden m-0 block text-left sm:flex sm:items-center sm:gap-5 hidden ">
          {["Home", "Legacy", "Community", "Apply Now"].map((item, index) => (
            <motion.a
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                ease: [0.5, 0, 0.5, 1],
                duration: 0.9,
                delay: index * 0.14,
              }}
              className="inline-block"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
