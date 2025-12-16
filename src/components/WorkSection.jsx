import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imagePNG from "../assets/homeImages/landing1.png";
import illustrationImage from "../assets/homeImages/landing2.png";
import imageCopy2 from "../assets/work3.png";

const WorkSection = () => {
  // Refs for each image container
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  // Scroll progress for each image
  const { scrollYProgress: scroll1 } = useScroll({
    target: image1Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scroll2 } = useScroll({
    target: image2Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scroll3 } = useScroll({
    target: image3Ref,
    offset: ["start end", "end start"],
  });

  // Parallax movement - images move at different speeds within pinned containers
  // Container stays fixed, image moves inside creating depth effect
  const y1 = useTransform(scroll1, [0, 1], ["-30%", "30%"]);
  const y2 = useTransform(scroll2, [0, 1], ["-40%", "40%"]);
  const y3 = useTransform(scroll3, [0, 1], ["-35%", "35%"]);

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
        <div
          ref={image1Ref}
          className="w-full order-1 sm:order-1 overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.img
              src={imagePNG}
              alt="Faceted objects"
              className="w-full h-auto object-cover"
              style={{ y: y1 }}
            />
          </motion.div>
        </div>

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
        <div
          ref={image2Ref}
          className="w-full order-3 sm:order-4 overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.img
              src={illustrationImage}
              alt="Architectural illustration"
              className="w-full h-auto object-cover"
              style={{ y: y2 }}
            />
          </motion.div>
        </div>

        {/* Lower Left - Image */}
        <div
          ref={image3Ref}
          className="w-full order-5 sm:order-5 overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.img
              src={imageCopy2}
              alt="Decorative objects"
              className="w-full h-auto object-cover"
              style={{ y: y3 }}
            />
          </motion.div>
        </div>

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
