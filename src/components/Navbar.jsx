import React from "react";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import logoImage from "../assets/REG web assets.svg";

const Navbar = () => {
  return (
    <div className="w-full fixed z-[9999]">
      <nav
        className="text-white flex items-center justify-between px-8 sm:px-[9rem] py-5"
        style={{
          background: "rgba(0, 0, 0, 0.01)",

          backdropFilter: "blur(4px)",
        }}
      >
        <div className="inline-block">
          <img src={logoImage} alt="Logo" className="sm:w-40 w-25 h-auto" />
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
