import React, { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { Power4 } from "gsap/all";
import { motion, useScroll, useTransform } from "framer-motion"; // eslint-disable-line no-unused-vars
import imagePNG from "../assets/image.png";

const Landing = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  // const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const introY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const subcopyY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[150vh] sm:h-[190vh]  text-white relative font-regular tracking-tighter overflow-hidden"
    >
      <div className="image h-full overflow-hidden">
        <motion.img
          data-scroll
          data-scroll-speed="-1"
          className="h-full object-cover"
          src={imagePNG}
          alt=""
          // style={{ scale: heroScale }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        />
      </div>

      <div className="absolute top-0 h-full px-8 sm:px-[10rem]">
        <motion.div
          className="para mt-[25rem] sm:text-2xl sm:leading-7 text-left w-full ml-0"
          style={{ y: introY }}
        >
          {[
            "A glimpse into the inspired world,",
            "Regalium marks the revolutionary manifestation",
            "under the Svasa banner, and allows us a",
            "peek into a time yet to come.",
          ].map((item, index) => (
            <p key={index} className="overflow-hidden m-0 block text-left">
              <motion.span
                className="inline-block origin-left "
                initial={{ rotate: 30, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: "0%", opacity: 1 }}
                transition={{
                  ease: Power4.easeInOut,
                  duration: 1.5,
                  delay: index * 0.1,
                }}
              >
                {item}
              </motion.span>
            </p>
          ))}
        </motion.div>

        <motion.div
          className="heading sm:text-[14.5rem] text-7xl sm:font-light sm:my-[5rem] my-[2rem] tracking-tighter sm:leading-[12rem] leading-[4rem] text-left w-full -ml-2 sm:-ml-4 text-white relative z-10"
          style={{ y: headingY }}
        >
          {["Regalium"].map((item, index) => (
            <h1
              key={index}
              className="m-0 p-0 block text-left text-white relative z-10"
            >
              <motion.span
                className="inline-block origin-left text-white relative"
                initial={{ rotate: 10, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: "0%", opacity: 1 }}
                transition={{
                  ease: Power4.easeInOut,
                  duration: 1.5,
                  delay: index * 0.1 + 0.5,
                }}
                style={{ display: "inline-block" }}
              >
                {item}
              </motion.span>
            </h1>
          ))}
        </motion.div>

        {/* <FaArrowDown className="text-[#ffffffc5] " /> */}
        <motion.p
          className="para2 mt-12 sm:w-1/2 sm:text-2xl sm:leading-7 "
          style={{ y: subcopyY }}
        >
          We prioritise the presentation of our culture at the forefront. Owing
          to the diversity of elements in art and architecture across South
          India, there existed vast inspiration for Regalium's structure and
          design.
        </motion.p>

        <div className="studio">
          <a
            href=""
            className="font-semibold sm:text-lg text-sm border-b-[.1px] border-[0.5] mt-7 inline-block"
          >
            Virtual Walkthrough
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
