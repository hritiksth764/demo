import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import logoImage from "../assets/REG web assets.svg";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Legacy", path: "/about" },
    { label: "Community", path: "/community" },
    { label: "Apply Now", path: "/apply" },
  ];

  return (
    <div className="w-full fixed z-[9999]">
      <nav
        className="text-white flex items-center justify-between px-8 sm:px-[9rem] py-1"
        style={{
          background: "rgba(0, 0, 0, 0.03)",

          backdropFilter: "blur(4px)",
        }}
      >
        <Link to="/" className="inline-block">
          <img src={logoImage} alt="Logo" className="sm:w-45 w-25 h-auto" />
        </Link>

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
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                ease: [0.5, 0, 0.5, 1],
                duration: 0.9,
                delay: index * 0.14,
              }}
            >
              <Link
                to={item.path}
                style={{
                  color: "#EDB161",
                  fontFamily: "BonaNova",
                  letterSpacing: "0.01em",
                  textTransform: "uppercase",
                }}
                className={`inline-block ${
                  location.pathname === item.path ? "underline" : ""
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
