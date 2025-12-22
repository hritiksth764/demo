import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Power4 } from "gsap/all";
import heroImage from "../assets/communityImages/hero.png";
import heroOverlayImage from "../assets/herooverlay.png";
import speakerImage from "../assets/communityImages/lastsection1.png";
import lastsection2 from "../assets/communityImages/speaker2.png";
import lastsection3 from "../assets/communityImages/speaker3.png";
import eventImage from "../assets/communityImages/event.png";

// import accordionImage1 from "../assets/communityImages/accordion1.png";
// import accordionImage2 from "../assets/communityImages/accordion2.png"; // Using same image for now, replace when you have accordion2.png

const Community = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("ALL EVENT");
  //   const [activeIndex, setActiveIndex] = useState(0);
  //   const [accordionIndex, setAccordionIndex] = useState(null);

  //   const accordionItems = [
  //     {
  //       id: 1,
  //       date: "09 June 2025",
  //       title: "EXPONENTIAL ORGANISATIONS SEMINAR WITH PETER DIAMANDIS",
  //       description:
  //         "Svasa Homes crafts heritage-rooted luxury homes that blend Indian philosophy with intentional design, pioneering community engineering to foster cultural connection. Recognised among South Bangalore's most prestigious addresses, Svasa sets the benchmark for Indian luxury living.",
  //       image: accordionImage1,
  //     },
  //     {
  //       id: 2,
  //       date: "09 June 2025",
  //       title: "OUR GUIDING INTELLIGENCE",
  //       description:
  //         "We prioritise the presentation of our culture at the forefront. Owing to the diversity of elements in art and architecture across South India, there existed vast inspiration for Regalium's structure and design, shaping a vision that is both rooted and future-facing.",
  //       image: accordionImage2,
  //     },
  //   ];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroParaY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const introY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="w-full">
      {/* Section 1: Hero Section */}{" "}
      <div
        ref={containerRef}
        className="w-full h-[200vh] text-white relative font-regular tracking-tighter overflow-hidden"
        style={{}}
      >
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
          {/* Background Image Placeholder */}

          <div className="absolute w-full h-full overflow-hidden">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
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
                opacity: 1, // Adjust opacity as needed
              }}
            />
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
              "WHERE THE EXCEPTIONAL FIND THEIR CIRCLE — AND CULTURE, CRAFT, AND INTELLECT CONVERGE",
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
      {/* Section 2: Featured Event Section */}
      <div className="w-full bg-white">
        {/* Top Header */}
        <div className="w-full px-8 sm:px-[10rem] pt-16 sm:pt-20 pb-8 sm:pb-12 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: '"BonaNova", serif',
              color: "#0211A2",
              fontWeight: "400",
              letterSpacing: "0.02em",
            }}
          >
            FEATURED EVENT TITLE
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "ChivoMono",
              letterSpacing: "0.05em",
            }}
          >
            5TH JANUARY 2026 @ THE GALLERY
          </motion.p>
        </div>

        {/* Main Event Image */}
        <div className="w-full px-8 sm:px-[10rem] mb-16 sm:mb-20">
          <motion.div
            className="w-full h-[500px] sm:h-[600px] lg:h-[700px] relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="w-full h-full bg-black"
              style={{
                backgroundImage: `url(${eventImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </motion.div>
        </div>

        {/* Bottom Content Section */}
        <div className="w-full px-8 sm:px-[10rem] pb-20 sm:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            {/* Left Column */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p
                className="text-xs sm:text-sm uppercase tracking-wider"
                style={{
                  fontFamily: "ChivoMono",
                  color: "#666666",
                  letterSpacing: "0.1em",
                }}
              >
                MEMBERS ONLY
              </p>
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5vw] font-bold"
                style={{
                  fontFamily: '"BonaNova", serif',
                  color: "#0211A2",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                }}
              >
                FEATURED EVENT TITLE
              </h3>
              <p
                className="text-sm sm:text-base"
                style={{
                  fontFamily: "ChivoMono",
                  color: "#666666",
                  letterSpacing: "0.05em",
                }}
              >
                5TH JANUARY 2026 @ THE GALLERY
              </p>
              <p
                className="text-sm sm:text-base"
                style={{
                  fontFamily: "ChivoMono",
                  color: "#666666",
                  letterSpacing: "0.05em",
                }}
              >
                6PM - 9PM
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p
                className="text-sm sm:text-base lg:text-lg leading-relaxed"
                style={{
                  fontFamily: "BonaNova",
                  color: "#666666",
                  letterSpacing: "0.02em",
                }}
              >
                We prioritise the presentation of our culture at the forefront.
                Owing to the diversity of elements in art and architecture
                across South India, there existed vast inspiration for
                Regalium's structure and design. We prioritise the presentation
                of our culture at the forefront. Owing to the diversity of
                elements in art and architecture across South India, there
                existed vast inspiration for Regalium's structure and design.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Section 3: Explore Our Programming */}
      <div
        className="w-full py-16 sm:py-24 px-8 sm:px-[10rem]"
        style={{ background: "#ECE8DC" }}
      >
        {/* Header with Title and Navigation */}
        <div className="mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: '"BonaNova", serif',
              color: "#0211A2",
              fontWeight: "400",
              letterSpacing: "0.02em",
            }}
          >
            EXPLORE OUR PROGRAMMING
          </motion.h2>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {["ALL EVENT", "WELLNESS", "NETWORKING", "CULTURAL"].map(
              (filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all cursor-pointer ${
                    activeFilter === filter
                      ? "bg-[#010F1A] text-white"
                      : "bg-transparent border border-[#010F1A] text-[#010F1A] hover:bg-[#010F1A] hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    fontFamily: "ChivoMono",
                    letterSpacing: "0.05em",
                  }}
                >
                  {filter}
                </motion.button>
              )
            )}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Event Image */}
              <div className="w-full h-[300px] sm:h-[350px] relative overflow-hidden">
                <div
                  className="w-full h-full bg-black"
                  style={{
                    backgroundImage:
                      "url('https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Event+Image')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              {/* Event Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <p
                  className="text-xs sm:text-sm"
                  style={{
                    fontFamily: "ChivoMono",
                    color: "#666666",
                    letterSpacing: "0.05em",
                  }}
                >
                  5TH JANUARY 2026 @ THE GALLERY
                </p>
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl font-bold"
                  style={{
                    fontFamily: '"BonaNova", serif',
                    color: "#0211A2",
                    fontWeight: "400",
                    letterSpacing: "0.02em",
                  }}
                >
                  FEATURED EVENT TITLE
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{
                    fontFamily: "BonaNova",
                    color: "#666666",
                    letterSpacing: "0.02em",
                  }}
                >
                  We prioritise the presentation of our culture at the
                  forefront. Owing to the diversity of elements in art and
                  architecture across South India, there existed vast
                  inspiration for Regalium's structure and design...
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Section 5: Discerning Community of Future Thinkers */}
      <div className="w-full h-[100vh] bg-white py-16 sm:py-24 px-8 sm:px-[10rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* Left Column - Large Speaker Image + Text + Button */}
          <motion.div
            className="space-y-8 sm:space-y-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-[420px] sm:h-[700px] overflow-hidden">
              <div
                className="w-full h-full bg-black"
                style={{
                  backgroundImage: `url(${speakerImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{
                fontFamily: "BonaNova",
                color: "#5C5857",
                letterSpacing: "0.02em",
              }}
            >
              A leadership that is equal parts foresight and philosophy —
              championing ideas that nurture the industries of tomorrow, and
              carry forward a legacy rooted in responsibility, imagination, and
              transformative ambition.
            </p>

            <div>
              <button
                className="px-8 py-3 sm:px-10 sm:py-3 rounded-full border text-sm sm:text-base font-medium transition-all mb-8"
                style={{
                  fontFamily: "BonaNova",
                  color: "#010F1A",
                  borderColor: "#EDB161",
                  borderWidth: "1px",
                  backgroundColor: "transparent",
                }}
              >
                LEARN MORE
              </button>
            </div>
          </motion.div>

          {/* Right Column - Two Images + Heading */}
          <motion.div
            className="flex flex-col gap-8 sm:gap-12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Top Image */}
            <div className="w-full h-[220px] sm:h-[360px] overflow-hidden">
              <div
                className="w-full h-full bg-black"
                style={{
                  backgroundImage: `url(${lastsection2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* Center Heading */}
            <h3
              className="text-2xl sm:text-3xl lg:text-[2.2vw] font-bold text-center"
              style={{
                fontFamily: '"BonaNova", serif',
                textTransform: "uppercase",
                color: "#0211A2",
                letterSpacing: "0.05em",
              }}
            >
              A DISCERNING COMMUNITY OF
              <br className="hidden sm:block" /> FUTURE THINKERS
            </h3>

            {/* Bottom Image */}
            <div className="w-full h-[300px] sm:h-[300px] overflow-hidden">
              <div
                className="w-[300px] h-full bg-black mx-auto"
                style={{
                  backgroundImage: `url(${lastsection3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Community;
