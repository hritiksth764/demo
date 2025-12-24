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
import sliderImage1 from "../assets/aboutImages/imageslider1.png";

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
      title: "A NATIONAL RECOGNITION",
      description:
        "Shri Machani Somappa — to whom we owe our beginnings — is awarded the Padma Shri in Public Affairs.",
      image: "src/assets/aboutImages/timeline2.png",
    },
    {
      year: "1960",
      title: "Stumpp, Schuele & Somappa (SSS) Springs founded",
      description:
        "Established as a joint venture to manufacture precision springs — later becoming India's leading spring manufacturer and a manufacturing anchor for the Group.",
      image: "src/assets/aboutImages/timeline3.png",
    },
    {
      year: "2014",
      title: "The Birth of Svasa Homes",
      description:
        "The Svasa Homes residential project opened on ancestral Basavanagudi land; the project delivered luxury heritage residences and anchors the group's real-estate presence, as well as the Svasa Life philosophy.",
      image: "src/assets/aboutImages/timeline4.png",
    },
    {
      year: "2026",
      title: "Our Biggest Milestone, Regalium",
      description:
        "With several other group companies — across robotics, AI, automotive, design, and more — in play, we present our vision for the future, and a destination to redefine how we live and grow.",
      image: "src/assets/aboutImages/timeline5.png",
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
            className="m-0 para2 absolute top-[35%] right-0 sm:top-[40%] px-8 sm:right-[9rem] sm:w-[50%] text-[16px] sm:text-[1.2vw] text-left z-10"
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
      <div className="w-full h-[auto] bg-white pt-8 sm:pt-15 pb-8 sm:pb-15 px-8 sm:px-[10rem] flex flex-col justify-between">
        {/* Section Title */}
        <motion.h2
          className="text-base sm:text-[3.5vw] font-bold text-left mb-0 sm:mb-[2vw]"
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
                className="text-2xl sm:text-[0.8vw] mb-[1vw] "
                style={{
                  fontFamily: '"ChivoMono", serif',
                  fontWeight: "400",
                  textTransform: "uppercase",
                  color: "#BB924D",
                  letterSpacing: "0.03em",
                }}
              >
                {activeItem.title}
              </h3>
              <p
                className="text-[16px] sm:text-[1.1vw] mb-0 mt-0 w-[80%]"
                style={{
                  fontFamily: "BonaNova",
                  fontWeight: "400",
                  color: "#5C5857",
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
                className="w-full h-full"
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
          className="w-full mt-0 sm:mt-[2vw] sm:mb-10"
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
                  className="text-sm sm:text-[1.75vw]"
                  style={{
                    fontFamily: "BonaNova",
                    fontWeight: "400",
                  }}
                  animate={{
                    color: activeIndex === index ? "#BB924D" : "#EDECED",
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
                  className="w-12 sm:w-20 h-1 bg-[#BB924D] mt-2 origin-center"
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
              className="text-[16px] sm:text-[1.2vw] leading-relaxed"
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

      <div className="w-full h-[100vh] bg-white pt-20 pb-10 sm:pt-20 sm:pb-20 px-8 sm:px-[10rem]">
        <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-0 flex flex-col items-center">
          {/* Title */}
          <motion.h2
            className="text-base sm:text-[3vw] text-center"
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
            SHAPING INDIA'S FUTURE — <br /> ACROSS DOMAINS
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-[16px] sm:text-[1.2vw] sm:w-[60%] text-center mx-auto"
            style={{
              fontFamily: "BonaNova",
              fontWeight: "400",
              color: "#5C5857",
              letterSpacing: "0.02em",
              lineHeight: "1.6",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A leadership that is equal parts foresight and philosophy —
            championing ideas that nurture the industries of tomorrow, and carry
            forward a legacy rooted in responsibility, imagination, and
            transformative ambition.
          </motion.p>

          {/* Horizontal Image Slider */}
          <motion.div
            className="w-full mt-12 sm:mt-10 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="overflow-x-auto scrollbar-hide w-full">
              <div
                className="flex gap-6 sm:gap-8"
                style={{ width: "max-content", margin: "0 auto" }}
              >
                {/* Slider Items - Landscape images */}
                {[sliderImage1, sliderImage1, sliderImage1, sliderImage1].map(
                  (image, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[500px] sm:w-[600px] h-[300px] sm:h-[400px] bg-gray-200 overflow-hidden"
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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
                height: isOpen ? 380 : 250,
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
                  className="text-2xl sm:text-[3.0vw] mb-3 sm:mb-4 w-[65vw]"
                  style={{
                    fontFamily: "BonaNova",
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    fontWeight: "400",
                  }}
                >
                  {item.title}
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      className="text-[16px] sm:text-[1.2vw] max-w-xl leading-relaxed"
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
        className="w-full h-[100vh] py-20 sm:py-24 px-8 sm:px-[10rem] flex items-center justify-center"
        style={{ background: "white" }}
      >
        <motion.div
          className="w-full max-w-4xl mx-auto text-center space-y-8 sm:space-y-04"
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
              textTransform: "uppercase",
              color: "#BB924D",
              letterSpacing: "0.03em",
            }}
          >
            A LEGACY SHAPED BY INTENT
          </motion.h3>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-[3.0vw] font-bold uppercase leading-tight"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              fontFamily: '"BonaNova", serif',
              color: "#0211A2",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              fontWeight: "400",
            }}
          >
            ENDURING GROWTH, CRAFTED <br /> WITH PRECISION
          </motion.h1>

          {/* Paragraph Text */}
          <motion.p
            className="text-[16px] sm:text-[1.2vw] leading-relaxed  mx-auto mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontFamily: "BonaNova",
              color: "#5C5857",

              letterSpacing: "0.02em",
            }}
          >
            At Machani Group, growth has always been purposeful — built through
            decades of thoughtful enterprise, integrity, and
            institution-building. Every space, decision, and detail reflects a
            commitment to creating value that endures. Growth here is cumulative
            and generational, shaped by vision, discipline, and an unwavering
            belief in progress that serves both people and the future.
          </motion.p>

          {/* Learn More Button */}
          <motion.div
            className="flex justify-center mt-10 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href=""
              className="inline-block text-[16px] sm:text-[1.0vw] px-8 py-3 sm:px-10 sm:py-4 rounded-full border text-center transition-all font-medium"
              style={{
                fontFamily: "BonaNova",
                letterSpacing: "0.1em",
                color: "#BB924D",
                borderColor: "#BB924D",
                borderWidth: "1px",
                textTransform: "uppercase",
              }}
            >
              JOIN US ON THE JOURNEY
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
