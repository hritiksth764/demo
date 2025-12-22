import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Power4 } from "gsap/all";
import heroImage from "../assets/aboutImages/Hero.png";
import accordionImage1 from "../assets/aboutImages/accordion1.png";
import accordionImage2 from "../assets/aboutImages/accordion2.png"; // Using same image for now, replace when you have accordion2.png

const About = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [accordionIndex, setAccordionIndex] = useState(null);

  const timelineItems = [
    {
      year: "1920",
      title: "Our Beginnings",
      description:
        "Recognised as the start of the Machani family enterprise — the roots that later grew transport, cooperative, manufacturing and social impact ventures across the 20th century.",
      image: "/src/assets/aboutImages/timeline1.png",
    },
    {
      year: "1954",
      title: "EXPANDING HORIZONS",
      description:
        "The Machani Group expanded its footprint, building transformative spaces that redefined how communities gather, work, and experience culture.",
      image:
        "https://via.placeholder.com/800x600/333333/ffffff?text=Expanding+Horizons",
    },
    {
      year: "1960",
      title: "DESIGN-LED FUTURES",
      description:
        "A renewed focus on Indo-luxury and precision-led design brought together global sensibilities and local craftsmanship in bold new ways.",
      image:
        "https://via.placeholder.com/800x600/555555/ffffff?text=Design+Led+Futures",
    },
    {
      year: "2014",
      title: "THE URBAN CANVAS",
      description:
        "Regalium emerges as a layered, living canvas—where retail, workspaces, and cultural programs intersect to create a new kind of city centre.",
      image:
        "https://via.placeholder.com/800x600/777777/ffffff?text=Urban+Canvas",
    },
    {
      year: "2026",
      title: "A CONTINUUM OF GROWTH",
      description:
        "Looking ahead, every intervention is imagined as part of a continuum—sustainable, future-first, and deeply rooted in heritage.",
      image:
        "https://via.placeholder.com/800x600/999999/ffffff?text=Continuum+of+Growth",
    },
  ];

  const activeItem = timelineItems[activeIndex];

  const accordionItems = [
    {
      id: 1,
      date: "09 June 2025",
      title: "EXPONENTIAL ORGANISATIONS SEMINAR WITH PETER DIAMANDIS",
      description:
        "Svasa Homes crafts heritage-rooted luxury homes that blend Indian philosophy with intentional design, pioneering community engineering to foster cultural connection. Recognised among South Bangalore's most prestigious addresses, Svasa sets the benchmark for Indian luxury living.",
      image: accordionImage1,
    },
    {
      id: 2,
      date: "09 June 2025",
      title: "OUR GUIDING INTELLIGENCE",
      description:
        "We prioritise the presentation of our culture at the forefront. Owing to the diversity of elements in art and architecture across South India, there existed vast inspiration for Regalium's structure and design, shaping a vision that is both rooted and future-facing.",
      image: accordionImage2,
    },
  ];
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
        className="w-full h-[200vh] text-white relative font-regular tracking-tighter overflow-hidden"
        style={{}}
      >
        {/* Background Image Placeholder */}
        <div className="absolute  w-full h-full overflow-hidden">
          <div
            className="w-full h-full "
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
        </div>
        <div className="absolute w-full h-full overflow-hidden">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />

          {/* Bottom gradient overlay */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[20vh]"
            style={{
              background:
                "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full px-8 sm:px-[10rem]">
          {/* Main Title */}
          <motion.div
            className="heading sm:text-[2.8vw] text-left w-[70%] z-10 mt-[8rem] sm:mt-[15rem]"
            style={{
              y: introY,
              fontFamily: "BonaNova",
              textTransform: "uppercase",
              color: "#ffffff",
              letterSpacing: "0.02em",
            }}
          >
            {[
              "A VISION BY THE MACHANI GROUP — ROOTED IN OUR HERITAGE, BUILT FOR OUR TOMORROW",
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
            className="m-0 para2 absolute top-[35%] right-0 sm:top-[40%] px-8 sm:right-[9rem] sm:w-[50%] sm:text-[1.4vw] text-left z-10"
            style={{
              y: heroParaY,
              fontFamily: "BonaNova",
              letterSpacing: "0.03em",
              color: "#ffffff",
            }}
          >
            When we look to the future, we are envisioning a holistic ecosystem
            — one that caters to each need, want, and aspiration of the members
            of our community. With our all-encompassing retail spaces, we
            deliver luxury at each step.
          </motion.p>
        </div>
      </div>

      {/* Section 2: Heritage Section */}
      <div className="w-full h-[100vh] bg-white py-8 sm:py-15 px-8 sm:px-[10rem] flex flex-col justify-between">
        {/* Section Title */}
        <motion.h2
          className="text-[5vw] sm:text-[4vw] font-bold text-left mb-0 sm:mb-0"
          style={{
            fontFamily: "BonaNova",
            textTransform: "uppercase",
            fontWeight: "400",
            color: "#0211A2",
            letterSpacing: "0.02em",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Century Long Legacy
        </motion.h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 flex-1 items-center">
          {/* Left Column - Text (changes with active year) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.year + "-text"}
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h3
                className="text-2xl sm:text-3xl font-semibold mb-0 -mt-10"
                style={{
                  fontFamily: '"ChivoMono", serif',
                  fontWeight: "400",
                  textTransform: "uppercase",
                  color: "#BB924D",
                  letterSpacing: "0.02em",
                }}
              >
                {activeItem.title}
              </h3>
              <p
                className="text-base sm:text-lg leading-relaxed mb-0 mt-0 w-[80%]"
                style={{
                  fontFamily: "BonaNova",
                  fontWeight: "400",
                  color: "#5C5857",
                  fontSize: "1.1vw",
                }}
              >
                {activeItem.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Right Column - Image (changes with active year) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.year + "-image"}
              className="w-full h-[400px] sm:h-[500px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="w-full h-full grayscale"
                style={{
                  backgroundImage: `url(${activeItem.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline Component */}
        <motion.div
          className="w-full mt-0 sm:mt-0 sm:mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Timeline Years */}
          <div className="relative w-full flex justify-between items-center pt-8">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer group relative"
                onClick={() => setActiveIndex(index)}
              >
                {/* Year */}
                <motion.span
                  className="text-sm sm:text-2xl font-semibold"
                  style={{
                    fontFamily: "chivo-mono",
                    fontWeight: "400",
                  }}
                  animate={{
                    color: activeIndex === index ? "#BB924D" : "#D9B57A",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    color: "#BB924D",
                  }}
                >
                  {item.year}
                </motion.span>
                {/* Underline for active years */}
                <motion.div
                  className="w-12 sm:w-20 h-1 bg-[#EDB161] mt-2 origin-center"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: activeIndex === index ? 1 : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section 3: Heritage Anchor Section with Placeholder Background */}
      <div className="w-full min-h-screen relative overflow-hidden">
        {/* Image Placeholder Background */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="w-full h-full bg-black"
            style={{
              backgroundImage:
                "url('https://via.placeholder.com/1920x1080/000000/ffffff?text=Heritage+Placeholder')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Optional overlay for better text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Text Overlay - Bottom Left */}
        <div className="relative z-10 h-full min-h-screen flex items-end px-8 sm:px-[10rem] pb-16 sm:pb-24">
          <motion.div
            className="w-full sm:w-2/3 lg:w-1/2 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold uppercase"
              style={{
                fontFamily: '"BonaNova", serif',
                color: "#ffffff",
                letterSpacing: "0.02em",
                lineHeight: "1.2",
              }}
            >
              AN ANCHOR OF OUR HERITAGE
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl xl:text-[1.2vw] leading-relaxed"
              style={{
                fontFamily: "BonaNova",
                color: "#ffffff",
                letterSpacing: "0.02em",
                lineHeight: "1.6",
              }}
            >
              A leadership that is equal parts foresight and philosophy —
              championing ideas that nurture the industries of tomorrow, and
              carry forward a legacy rooted in responsibility, imagination, and
              transformative ambition.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section 4: Modern Accordion Section */}
      <div className="w-full bg-[#181818] text-white">
        {accordionItems.map((item, index) => {
          const isOpen = accordionIndex === index;
          return (
            <motion.div
              key={item.id}
              className="relative w-full overflow-hidden cursor-pointer border-b border-white/10"
              onClick={() =>
                setAccordionIndex((prev) => (prev === index ? null : index))
              }
              initial={false}
              animate={{
                height: isOpen ? 380 : 140,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Background image and overlay */}
              <div className="absolute inset-0 w-full h-full">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-[10rem] py-6 sm:py-10">
                <p
                  className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-2"
                  style={{
                    fontFamily: "ChivoMono",
                    letterSpacing: "0.15em",
                  }}
                >
                  {item.date}
                </p>
                <h3
                  className="text-2xl sm:text-3xl lg:text-[2.3vw] font-semibold leading-tight mb-3 sm:mb-4"
                  style={{
                    fontFamily: '"BonaNova", serif',
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.title}
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      className="text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed"
                      style={{
                        fontFamily: "BonaNova",
                        letterSpacing: "0.02em",
                        color: "rgba(255,255,255,0.9)",
                      }}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

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

export default About;
