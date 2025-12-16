import React from "react";
import { motion } from "framer-motion";

const InspiredWorldSection = () => {
  return (
    <div
      className="w-full h-[100vh] py-20 sm:py-32 px-8 sm:px-[10rem] flex items-center justify-center"
      style={{ background: "white" }}
    >
      <motion.div
        className="w-full max-w-4xl mx-auto text-center space-y-8 sm:space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Subheading */}
        <motion.h3
          className="text-sm sm:text-base uppercase tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "ChivoMono",
            color: "#010F1A",
            letterSpacing: "0.1em",
          }}
        >
          A GLIMPSE INTO THE INSPIRED WORLD
        </motion.h3>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-[2.5vw] font-bold uppercase leading-tight"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            fontFamily: '"BonaNova", serif',
            color: "#0211A2",
            letterSpacing: "0.02em",
            lineHeight: "1.2",
          }}
        >
          GROWTH EXPRESSED IN PRECISION,
          <br /> CLARITY, AND ENCODED BEAUTY
        </motion.h1>

        {/* Paragraph Text */}
        <motion.p
          className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontFamily: "BonaNova",
            color: "#333333",
            letterSpacing: "0.02em",
          }}
        >
          At Regalium, every element becomes a fractal unit aligned to a larger
          intention: creating a future we wish to live in. Growth is no longer
          only upward or cyclical, but outward, expansive, and multiplicative,
          mirroring the evolution of cities, communities, and shared visions.
        </motion.p>

        {/* Learn More Button */}
        <motion.div
          className="flex justify-center mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href=""
            className="inline-block text-sm sm:text-base px-8 py-3 sm:px-10 sm:py-4 rounded-full border text-center transition-all font-medium"
            style={{
              fontFamily: "BonaNova",
              color: "#010F1A",
              borderColor: "#EDB161",
              borderWidth: "1px",
              backgroundColor: "transparent",
            }}
          >
            Virtual Walkthrough
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InspiredWorldSection;
