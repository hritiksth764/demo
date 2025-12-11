import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Power4 } from "gsap/all";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  // const heroTitleY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const heroParaY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const introY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="w-full">
      {/* Section 1: Hero Section */}
      <div
        ref={containerRef}
        className="w-full min-h-screen text-white relative font-regular tracking-tighter overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #010F1A 0%, #1a1a1a 100%)",
        }}
      >
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            className="w-full h-full opacity-30"
            style={{
              backgroundImage:
                "url('https://via.placeholder.com/1920x1080/1a1a1a/ffffff?text=Modern+Building')",
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full px-8 sm:px-[10rem]">
          {/* Main Title */}
          <motion.div
            className="heading sm:text-[2vw] tracking-tighter text-left w-[50%] z-10 mt-[8rem] sm:mt-[15rem]"
            style={{
              y: introY,
              fontFamily: "BonaNova",
              textTransform: "uppercase",
              color: "#EDB161",
              letterSpacing: "0.02em",
            }}
          >
            {[
              "THE MACHANI LEGACY CONTINUES TO EXPAND BRINGING TOGETHER THE GROUP'S KEY STRENGTHS",
            ].map((item, index) => (
              <p
                key={index}
                className="m-0 p-0 block text-left z-10 overflow-hidden"
              >
                <motion.span
                  className="inline-block origin-left"
                  initial={{ rotate: 0, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: "0%", opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                    delay: index * 0.2,
                  }}
                >
                  {item}
                </motion.span>
              </p>
            ))}
          </motion.div>

          {/* Introductory Paragraph */}
          <motion.p
            className="m-0 px-8 para2 absolute bottom-16 right-0 sm:bottom-16 sm:right-[9rem] sm:w-[50%] sm:text-[1.4vw] text-left"
            style={{
              y: heroParaY,
              fontFamily: "BonaNova",
              letterSpacing: "0.03em",
              color: "#ffffff",
              zIndex: 10,
            }}
          >
            In the heart of Bengaluru, in Koramangala, Regalium is a
            next-generation development that forms a seamless world of retail,
            workspaces, F&B, and culture for those who lead with vision. Rooted
            in and inspired by our heritage, we pillar on luxury, community, and
            innovation to create an inspired world.
          </motion.p>
        </div>
      </div>

      {/* Section 2: Heritage Section */}
      <div className="w-full min-h-screen bg-white py-20 sm:py-32 px-8 sm:px-[10rem]">
        {/* Section Title */}
        <motion.h2
          className="text-[5vw] sm:text-[4vw] font-bold text-left mb-16 sm:mb-20"
          style={{
            fontFamily: '"BonaNova", serif',
            textTransform: "uppercase",
            color: "#010F1A",
            letterSpacing: "0.02em",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          100 YEARS OF MACHANI GROUP HERITAGE
        </motion.h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-20">
          {/* Left Column - Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3
              className="text-2xl sm:text-3xl font-semibold"
              style={{
                fontFamily: '"BonaNova", serif',
                textTransform: "uppercase",
                color: "#EDB161",
                letterSpacing: "0.05em",
              }}
            >
              THE FOUNDATION
            </h3>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{
                fontFamily: "BonaNova",
                color: "#333333",
                letterSpacing: "0.02em",
              }}
            >
              We prioritise the presentation of our culture at the forefront.
              Owing to the diversity of elements in art and architecture across
              South India, there existed vast inspiration for Regalium's
              structure and design.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="w-full h-[400px] sm:h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="w-full h-full grayscale"
              style={{
                backgroundImage:
                  "url('https://via.placeholder.com/800x600/000000/ffffff?text=Heritage+Image')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </motion.div>
        </div>

        {/* Timeline Component */}
        <motion.div
          className="w-full mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Horizontal Timeline Line */}
          <div className="relative w-full h-1 bg-[#EDB161] mb-8">
            {/* Timeline Years */}
            <div className="absolute top-0 left-0 w-full flex justify-between items-start">
              {[
                { year: "1920", active: true },
                { year: "2005", active: false },
                { year: "2015", active: true },
                { year: "2027", active: false },
                { year: "2030", active: false },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                  style={{
                    position: "absolute",
                    left: `${(index * 100) / 4}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {/* Vertical Line */}
                  <div
                    className="w-0.5 bg-[#EDB161] mb-2"
                    style={{ height: "20px" }}
                  />
                  {/* Year */}
                  <span
                    className="text-sm sm:text-base font-semibold"
                    style={{
                      fontFamily: '"BonaNova", serif',
                      color: "#010F1A",
                    }}
                  >
                    {item.year}
                  </span>
                  {/* Underline for active years */}
                  {item.active && (
                    <div className="w-12 sm:w-16 h-0.5 bg-[#EDB161] mt-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 3: Leadership Section */}
      <div className="w-full min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "url('https://via.placeholder.com/1920x1080/2a2a2a/ffffff?text=Leadership+Background')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Overlay for better text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(1, 15, 26, 0.7) 0%, rgba(1, 15, 26, 0.3) 100%)",
            }}
          />
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 h-full min-h-screen flex items-end px-8 sm:px-[10rem] pb-20 sm:pb-32">
          <motion.div
            className="w-full sm:w-2/3 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-[8vw] sm:text-[6vw] font-bold"
              style={{
                fontFamily: '"BonaNova", serif',
                textTransform: "uppercase",
                color: "#ffffff",
                letterSpacing: "0.02em",
                lineHeight: "1.2",
              }}
            >
              RAVI MACHANI
            </h2>
            <h3
              className="text-[4vw] sm:text-[3vw] font-semibold"
              style={{
                fontFamily: '"BonaNova", serif',
                textTransform: "uppercase",
                color: "#ffffff",
                letterSpacing: "0.05em",
              }}
            >
              A VISIONARY LEADER
            </h3>
            <p
              className="text-base sm:text-lg sm:w-2/3 leading-relaxed mt-6"
              style={{
                fontFamily: "BonaNova",
                color: "#ffffff",
                letterSpacing: "0.02em",
              }}
            >
              We prioritise the presentation of our culture at the forefront.
              Owing to the diversity of elements in art and architecture across
              South India, there existed vast inspiration for Regalium's
              structure and design.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
