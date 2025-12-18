import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imagePNG from "../assets/herohome.png";
import heroOverlayImage from "../assets/herooverlay.png";
import workImage1 from "../assets/homeImages/landing1.png";
import workImage2 from "../assets/homeImages/landing2.png";
import workImage3 from "../assets/work3.png";
import lastSectionImage from "../assets/image.png";

const Home = () => {
  // Landing section refs and transforms
  const landingContainerRef = useRef(null);
  const { scrollYProgress: landingScroll } = useScroll({
    target: landingContainerRef,
    offset: ["start start", "end start"],
  });
  const introY = useTransform(landingScroll, [0, 1], [0, -100]);
  const subcopyY = useTransform(landingScroll, [0, 1], [0, -90]);

  // Work section refs and transforms
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

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

  const y1 = useTransform(scroll1, [0, 1], ["-30%", "30%"]);
  const y2 = useTransform(scroll2, [0, 1], ["-40%", "40%"]);
  const y3 = useTransform(scroll3, [0, 1], ["-35%", "35%"]);

  return (
    <div className="w-full">
      {/* Section 1: Landing Section */}
      <div
        ref={landingContainerRef}
        className="w-full h-[200vh] sm:h-[240vh] text-white relative font-regular tracking-tighter overflow-hidden"
      >
        <div className="image h-full overflow-hidden relative">
          <img
            data-scroll
            data-scroll-speed="-1"
            className="w-full h-full object-cover sm:object-cover sm:object-top"
            src={imagePNG}
            alt=""
            style={{
              objectPosition: "center top",
            }}
          />
          <div
            className="absolute top-0 left-0 w-full h-[80%] pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #010F1A 0%, rgba(1, 15, 26, 0.8) 1%, transparent 100%)",
            }}
          />
          {/* Overlay Image */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              zIndex: 100,
              backgroundImage: `url(${heroOverlayImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }}
          />
        </div>

        <div className="absolute top-0 h-full px-8 sm:px-[10rem]">
          <div
            className="para mt-[8rem] sm:mt-[15rem] sm:leading-7 text-left w-full ml-0"
            style={{ transform: `translateY(${introY}px)` }}
          >
            <p
              className="overflow-hidden m-0 block text-left sm:text-[1.5vw] uppercase"
              style={{
                fontFamily: "ChivoMono-Regular",
                color: "#FFF",
                lineHeight: "normal",
              }}
            >
              An inheritance of the future
            </p>
          </div>

          <div
            className="heading text-[8vw] sm:text-[8vw] tracking-tighter sm:leading-[12rem] text-left w-full sm:-ml-2 relative z-10"
            style={{
              transform: `translateY(${introY}px)`,
              fontFamily: '"BonaNova", serif',
              textTransform: "uppercase",
            }}
          >
            <p
              id="regalium-heading"
              className="m-0 p-0 block text-left text-white z-10 overflow-hidden"
              style={{
                position: "relative",
                top: "120px",
                opacity: 0,
              }}
            >
              Regalium
            </p>
          </div>

          <p
            className="para2 mt-0 sm:w-1/2 sm:text-[1.2vw] sm:leading-7"
            style={{
              transform: `translateY(${subcopyY}px)`,
              fontFamily: "BonaNova",
              letterSpacing: "0.03em",
            }}
          >
            In the heart of Bengaluru, in Koramangala, Regalium is a
            next-generation development that forms a seamless world of retail,
            workspaces, F&B, and culture for those who lead with vision. Rooted
            in and inspired by our heritage, we pillar on luxury, community, and
            innovation to create an inspired world.
          </p>

          <div className="studio mt-5 sm:mt-10">
            <a
              href=""
              className="inline-block text-xs sm:text-[1vw] px-6 py-3 sm:px-10 sm:py-4 rounded-full border text-center transition-all font-medium"
              style={{
                fontFamily: "BonaNova",
                color: "#BB924D",
                borderColor: "#EDB161",
                fontWeight: "400",
                borderWidth: "1px",
                textTransform: "uppercase",
              }}
            >
              Virtual Walkthrough
            </a>
          </div>
        </div>
        {/* Bottom gradient overlay */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[20vh]"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      {/* Section 2: Work Section */}
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
                src={workImage1}
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
                src={workImage2}
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
                src={workImage3}
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

      {/* Section 3: Last Section */}
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
                backgroundImage: `url(${lastSectionImage})`,
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
              South India, there existed vast inspiration for Regalium's
              structure and design.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section 4: Inspired World Section */}
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
            At Regalium, every element becomes a fractal unit aligned to a
            larger intention: creating a future we wish to live in. Growth is no
            longer only upward or cyclical, but outward, expansive, and
            multiplicative, mirroring the evolution of cities, communities, and
            shared visions.
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
    </div>
  );
};

export default Home;
