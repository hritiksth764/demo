import React from "react";
import { motion } from "framer-motion";
import centerImage from "../assets/image.png";

const LastSection = () => {
  return (
    <div
      className="w-full min-h-screen py-20 sm:py-32 px-8 sm:px-[10rem] flex items-center"
      style={{ background: "#ECE8DC" }}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left Side - BOULEVARD Text */}
        <motion.div
          className="lg:col-span-3 flex items-center justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-[8vw] sm:text-[6vw] lg:text-[5vw] font-bold text-center lg:text-left"
            style={{
              fontFamily: '"BonaNova", serif',
              color: "#010F1A",
              letterSpacing: "0.02em",
              lineHeight: "1.1",
            }}
          >
            BOULEVARD
          </h1>
        </motion.div>

        {/* Center - Image */}
        <motion.div
          className="lg:col-span-6 w-full h-[400px] sm:h-[500px] lg:h-[600px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="w-full h-full rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${centerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>

        {/* Right Side - Paragraph Text */}
        <motion.div
          className="lg:col-span-3 flex items-start justify-center lg:justify-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p
            className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-md text-center lg:text-left"
            style={{
              fontFamily: "BonaNova",
              color: "#333333",
              letterSpacing: "0.02em",
            }}
          >
            We prioritise the presentation of our culture at the forefront.
            Owing to the diversity of elements in art and architecture across
            South India, there existed vast inspiration for Regalium's structure
            and design.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LastSection;
