import React, { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { Power4 } from "gsap/all";
import { motion, useScroll, useTransform } from "framer-motion"; // eslint-disable-line no-unused-vars
import imagePNG from "../assets/image copy.png";

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
      className="w-full h-[200vh] sm:h-[240vh]  text-white relative font-regular tracking-tighter overflow-hidden"
    >
      <div className="image h-full overflow-hidden">
        <motion.img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover sm:object-cover sm:object-top"
          src={imagePNG}
          alt=""
          style={{
            objectPosition: "center top",
          }}
          // style={{ scale: heroScale }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        />
      </div>

      <div className="absolute top-0 h-full px-8 sm:px-[10rem] ">
        <motion.div
          className="para mt-[8rem] sm:mt-[15rem]  sm:leading-7 text-left w-full ml-0 "
          style={{ y: introY }}
        >
          {["An inheritance of the future"].map((item, index) => (
            <p
              key={index}
              className="overflow-hidden m-0 block text-left sm:text-[1.5vw] uppercase"
              style={{
                fontFamily: "ChivoMono-Regular",
                color: "#EDB161",
                lineHeight: "normal",
              }}
            >
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
          className="heading text-[8vw] sm:text-[8vw] tracking-tighter sm:leading-[12rem] text-left w-full sm:-ml-2 relative z-10"
          style={{
            y: headingY,
            fontFamily: '"BonaNova", serif',
            textTransform: "uppercase",
          }}
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
          className="para2 mt-0 sm:w-1/2 sm:text-[1.2vw] sm:leading-7 "
          style={{ y: subcopyY, fontFamily: "BonaNova" }}
        >
          In the heart of Bengaluru, in Koramangala, Regalium is a
          next-generation development that forms a seamless world of retail,
          workspaces, F&B, and culture for those who lead with vision. Rooted in
          and inspired by our heritage, we pillar on luxury, community, and
          innovation to create an inspired world.
        </motion.p>

        <div className="studio mt-5 sm:mt-10">
          <a
            href=""
            className="inline-block text-xs sm:text-[1vw] px-6 py-3 sm:px-10 sm:py-4 rounded-full border text-center transition-all font-medium"
            style={{
              fontFamily: "ChivoMono-Regular",
              // backgroundColor: "#1e2a3a",
              color: "#EDB161",
              borderColor: "#EDB161",
              borderWidth: "1px",
            }}
          >
            Virtual Walkthrough
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
