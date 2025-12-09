import React from "react";
import { motion } from "framer-motion";
import imagePNG from "../assets/work1.png";
import imageCopy2 from "../assets/image copy 3.png";
import illustrationImage from "../assets/work2.png";

const WorkSection = () => {
  return (
    <div
      className="w-full bg-white py-16 sm:py-24 px-8 sm:px-[10rem]"
      style={{
        fontFamily: "BonaNova",
      }}
    >
      {/* Header */}
      <motion.h2
        className="text-2xl sm:text-[3vw] text-black uppercase tracking-tight mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: "BonaNova",
        }}
      >
        AN INTENTIONAL SPACE OF <br /> COLLECTIVE POSSIBILITY
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        {/* Upper Left - Large Image */}
        <motion.div
          className="w-full order-1 sm:order-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src={imagePNG}
            alt="Faceted objects"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Upper Right - Text Block */}
        <motion.div
          className="w-full flex flex-col justify-center order-2 sm:order-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3
            className="text-xl sm:text-[2vw] font-bona-nova text-black uppercase tracking-tight mb-6"
            style={{
              fontFamily: "BonaNova",
            }}
          >
            INDO-LUXURY DEFINED BY <br /> PRECISION AND PURPOSE
          </h3>
          <a
            href=""
            className="inline-block text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-3 rounded-full border text-center transition-all font-medium w-fit"
            style={{
              fontFamily: "BonaNova",
              color: "#EDB161",
              borderColor: "#EDB161",
              borderWidth: "1px",
            }}
          >
            Learn More
          </a>
        </motion.div>

        {/* Mid-Left - Text Block */}
        <motion.div
          className="w-full flex flex-col justify-center order-4 sm:order-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3
            className="text-xl sm:text-[2vw] font-bona-nova text-black uppercase tracking-tight mb-6"
            style={{
              fontFamily: "BonaNova",
            }}
          >
            COMMUNITY AS A SCALABLE <br /> ARCHITECTURE
          </h3>
          <a
            href=""
            className="inline-block text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-3 rounded-full border text-center transition-all font-medium w-fit"
            style={{
              fontFamily: "BonaNova",
              color: "#EDB161",
              borderColor: "#EDB161",
              borderWidth: "1px",
            }}
          >
            Learn More
          </a>
        </motion.div>

        {/* Mid-Right - Illustration Block */}
        <motion.div
          className="w-full order-3 sm:order-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src={illustrationImage}
            alt="Architectural illustration"
            className="w-full h-auto object-cover "
          />
        </motion.div>

        {/* Lower Left - Image */}
        <motion.div
          className="w-full order-5 sm:order-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img
            src={imageCopy2}
            alt="Decorative objects"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Lower Right - Text Block */}
        <motion.div
          className="w-full flex flex-col justify-center order-6 sm:order-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3
            className="text-xl sm:text-[2vw] text-black uppercase tracking-tight mb-6"
            style={{
              fontFamily: "BonaNova",
            }}
          >
            INDO-LUXURY DEFINED BY <br /> PRECISION AND PERFECTION
          </h3>
          <a
            href=""
            className="inline-block text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-3 rounded-full border text-center transition-all font-medium w-fit"
            style={{
              fontFamily: "BonaNova",
              color: "#EDB161",
              borderColor: "#EDB161",
              borderWidth: "1px",
            }}
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkSection;
