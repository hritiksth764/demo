import React from "react";
import { motion } from "framer-motion";

const SpreadSection = () => {
  return (
    <div className="w-full h-[70vh] flex items-center justify-start flex-col pb-[10rem] bg-white text-black px-8 sm:px-[10rem]">
      <div className="page2-title flex items-center gap-[0.3rem] text-black">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon w-[1rem]"
          data-v-669b4a84=""
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"
            data-v-669b4a84=""
          ></path>
        </svg>

        <h1 className="text-lg font-semibold text-black">In the media</h1>
      </div>

      <div className="Spread-content w-full h-full flex items-center justify-start flex-col">
        <div className="text-6xl text-center tracking-tighter mt-10 sm:text-[6rem] text-black">
          {["Spread", "the News"].map((item, index) => (
            <motion.h1
              key={index}
              className="origin-left overflow-hidden text-black"
              initial={{ rotate: 10, y: "100%", opacity: 0 }}
              whileInView={{ rotate: 0, y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 1.5 }}
            >
              {item}
            </motion.h1>
          ))}
        </div>
        <p className="text-lg text-center mt-12 sm:w-[30%] mx-auto mb-[10rem] text-black">
          Find out more about our work on these leading design and technology
          platforms.
        </p>
      </div>
    </div>
  );
};

export default SpreadSection;
