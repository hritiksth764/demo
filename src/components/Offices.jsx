import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../assets/officeImages/hero.png";
import architecturalBlueprint from "../assets/officeImages/layout.png";
import { Power4 } from "gsap/all";
import heritageCollage from "../assets/officeImages/news.png";
import modernSpace1 from "../assets/officeImages/technology1.png";
import modernSpace2 from "../assets/officeImages/technology2.png";
import modernSpace3 from "../assets/officeImages/technology3.png";
import modernSpaceLast from "../assets/officeImages/last.png";
import executiveEducationImage1 from "../assets/officeImages/details1.png";

const Offices = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroParaY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const introY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="w-full">
      {/* Section 1: A WORKSPACE OF THE FUTURE */}
      <div
        ref={containerRef}
        className="w-full min-h-[100vh] sm:h-[100vh] text-white relative font-regular tracking-tighter overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #010F1A 5%, rgba(1, 15, 26, 1) 100%, transparent 100%)",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            className="w-full h-full opacity-40"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
        </div>

        {/* Text Overlay (matches Community hero structure) */}
        <div className="absolute top-0 left-0 w-full h-full px-8 sm:px-[10rem]">
          {/* Main Title */}
          <motion.div
            className="heading sm:text-[2.8vw] tracking-tighter text-left w-[55%] z-10 mt-[8rem] sm:mt-[15rem]"
            style={{
              y: introY,
              fontFamily: "BonaNova",
              textTransform: "uppercase",
              color: "#ffffff",
              letterSpacing: "0.02em",
            }}
          >
            {["A WORKSPACE OF THE FUTURE"].map((item, index) => (
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

          {/* Intro Paragraph + Button */}
          <motion.div
            className="m-0 para2 absolute bottom-16 right-0 sm:bottom-16 sm:right-[9rem] sm:w-[40%] text-left space-y-6"
            style={{
              y: heroParaY,
              fontFamily: "BonaNova",
              letterSpacing: "0.02em",
              color: "#ffffff",
              zIndex: 10,
            }}
          >
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              At Regalium, office spaces are designed to go beyond work. Here,
              we cover the essentials that make for a creative thought process,
              meticulous performance, and a sound delivery. We offer these
              spaces to future-thinkers and doers.
            </p>
            <a
              href=""
              className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-full border text-sm sm:text-base font-medium transition-all"
              style={{
                fontFamily: "BonaNova",
                color: "#ffffff",
                borderColor: "#ffffff",
                borderWidth: "1px",
                backgroundColor: "transparent",
              }}
            >
              View Our Calendar
            </a>
          </motion.div>
        </div>
      </div>

      {/* Section 2: ENABLING A PROACTIVE & ENTERPRISING */}
      <div className="w-full min-h-[100vh] sm:h-[100vh] bg-white py-8 sm:py-24 px-8 sm:px-[10rem] flex flex-col justify-center items-center">
        <motion.div
          className="w-full max-w-6xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold text-center"
            style={{
              fontFamily: '"BonaNova", serif',
              color: "#0211A2",
              fontWeight: "400",
              letterSpacing: "0.02em",
            }}
          >
            ENABLING A PROACTIVE & ENTERPRISING
          </h2>

          <div className="w-full h-[300px] sm:h-[500px] relative overflow-hidden">
            <div
              className="w-full h-full "
              style={{
                backgroundImage: `url(${architecturalBlueprint})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>

          <div className="flex justify-center">
            <a
              href=""
              className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-full border text-sm sm:text-base font-medium transition-all"
              style={{
                fontFamily: "BonaNova",
                color: "#EDB161",
                borderColor: "#EDB161",
                borderWidth: "1px",
                backgroundColor: "transparent",
              }}
            >
              EXPLORE THE NEW AGE OFFICE SPACES
            </a>
          </div>
        </motion.div>
      </div>

      {/* Section 3: AN ANCHOR OF OUR HERITAGE */}
      <div className="w-full min-h-[100vh] sm:h-[100vh] relative overflow-hidden flex items-end px-8 sm:px-[10rem] pb-8 sm:pb-24">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${heritageCollage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),lightgray 50% / cover no-repeat;",
          }}
        />

        <motion.div
          className="relative z-10 w-full sm:w-2/3 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold uppercase"
            style={{
              fontFamily: '"BonaNova", serif',
              color: "#EDECED",
              letterSpacing: "0.02em",
            }}
          >
            AN ANCHOR OF OUR HERITAGE
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl leading-relaxed"
            style={{
              fontFamily: "BonaNova",
              color: "#EDECED",
              letterSpacing: "0.02em",
            }}
          >
            A leadership that is equal parts foresight and philosophy —
            championing ideas that nurture the industries of tomorrow, and carry
            forward a legacy rooted in responsibility, imagination, and
            transformative ambition.
          </p>
        </motion.div>
      </div>

      {/* Section 4: ANCHORED ON TECHNOLOGY, BUILT FOR EXCELLENCE */}
      <div
        className="w-full min-h-[100vh] sm:h-[100vh] py-8 sm:py-24 px-8 sm:px-[10rem] flex flex-col justify-center"
        style={{ background: "#ECE8DC" }}
      >
        <motion.div
          className="w-full max-w-6xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-3xl lg:text-5xl xl:text-[3.5vw] font-bold text-center"
            style={{
              fontFamily: '"BonaNova", serif',
              color: "#0211A2",
              fontWeight: "400",
              letterSpacing: "0.02em",
            }}
          >
            ANCHORED ON TECHNOLOGY, BUILT FOR EXCELLENCE.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-6 sm:mb-12">
            {/* First Image */}
            <motion.div
              className="md:col-span-4 w-full h-[200px] sm:h-[300px] relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${modernSpace1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {/* Center Image - Larger */}
            <motion.div
              className="md:col-span-4 w-full h-[280px] sm:h-[450px] relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${modernSpace2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {/* Third Image - Aligned to bottom */}
            <motion.div
              className="md:col-span-4 w-full h-[200px] sm:h-[300px] relative overflow-hidden md:self-end"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${modernSpace3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          </div>

          <div className="space-y-4 sm:space-y-6 text-left sm:text-center">
            <p
              className="text-sm sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto"
              style={{
                fontFamily: "BonaNova",
                color: "#333333",
                letterSpacing: "0.02em",
              }}
            >
              We acknowledge the bold enterprising mindset of those looking to
              make things happen, fast. Our initiatives in robotics, artificial
              intelligence, virtual reality, and augmented reality form a
              habitat that is holistic in its function, as well as form.
            </p>
            <div className="flex justify-center">
              <a
                href=""
                className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-full border text-sm sm:text-base font-medium transition-all"
                style={{
                  fontFamily: "BonaNova",
                  color: "#5C5857",
                  borderColor: "#EDB161",
                  borderWidth: "1px",
                  backgroundColor: "transparent",
                }}
              >
                BEGIN YOUR UNMATCHED WORKSPACE EXPERIENCE
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 5: THE ANATOMY OF REGALIUM WORKSPACES */}
      <div
        className="w-full min-h-[100vh] sm:h-[100vh] py-8 sm:py-24 px-8 sm:px-[10rem] flex flex-col justify-center"
        style={{ background: "white" }}
      >
        <motion.div
          className="w-full max-w-6xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center space-y-4">
            <p
              className="text-sm sm:text-base uppercase tracking-wider"
              style={{
                fontFamily: "ChivoMono",
                color: "#010F1A",
                letterSpacing: "0.1em",
              }}
            >
              A GLIMPSE INTO THE INSPIRED WORLD
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold"
              style={{
                fontFamily: '"BonaNova", serif',
                color: "#010F1A",
                letterSpacing: "0.02em",
              }}
            >
              THE ANATOMY OF REGALIUM WORKSPACES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
            {[
              {
                title: "THE UN-CLUTTERING",
                description:
                  "A curated environment that places you among those who think, build, and operate at your level.We embody engineered serendipity — whereintentional spaces and conversations-in-motionensure the right people meet naturally, and valueexpands through presence alone.",
              },
              {
                title: "THE UN-ELEVATE",
                description:
                  "A curated environment that places you amongthose who think, build, and operate at your level.We embody engineered serendipity — whereintentional spaces and conversations-in-motion ensure the right people meet naturally, and value expands through presence alone.",
              },
              {
                title: "THE UN-ELEVATE",
                description:
                  "A curated environment that places you amongthose who think, build, and operate at your level.We embody engineered serendipity — whereintentional spaces and conversations-in-motion ensure the right people meet naturally, and value expands through presence alone.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="w-full h-[200px] sm:h-[300px] relative overflow-hidden">
                  <div
                    className="w-full h-full bg-gray-300"
                    style={{
                      backgroundImage:
                        "url('https://via.placeholder.com/600x400/cccccc/666666?text=Workspace+Corridor')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <div className="space-y-4">
                  <h3
                    className="text-xl sm:text-2xl font-bold"
                    style={{
                      fontFamily: '"BonaNova", serif',
                      color: "#010F1A",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{
                      fontFamily: "BonaNova",
                      color: "#333333",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.description}
                  </p>
                  <a
                    href=""
                    className="inline-block px-6 py-2 sm:px-8 sm:py-3 rounded-full border text-sm font-medium transition-all"
                    style={{
                      fontFamily: "BonaNova",
                      color: "#EDB161",
                      borderColor: "#EDB161",
                      borderWidth: "1px",
                      backgroundColor: "transparent",
                    }}
                  >
                    EXPLORE MORE
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section 6: GROWTH & EXCELLENCE — DRIVEN BY EXECUTIVE EDUCATION */}
      <div className="w-full min-h-[100vh] sm:h-auto bg-white py-8 sm:py-24 px-8 sm:px-[10rem] flex flex-col justify-center items-center">
        <motion.div
          className="w-full max-w-6xl mx-auto space-y-8 sm:space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Content Section */}
          <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold"
              style={{
                fontFamily: '"BonaNova", serif',
                color: "#0211A2",
                fontWeight: "400",
                letterSpacing: "0.02em",
              }}
            >
              GROWTH & EXCELLENCE — DRIVEN BY EXECUTIVE EDUCATION
            </h2>
            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                fontFamily: "BonaNova",
                color: "#666666",
                letterSpacing: "0.02em",
              }}
            >
              At Executive Education, a keen focus on exponential growth urges
              one to not just utilise it for imbibing invaluable knowledge, but
              also for top leadership to pave the future. At Regalium, we
              believe that learning never stops — with Executive Education
              leading the way in facilitating just that.
            </p>
            <div className="flex justify-center">
              <a
                href=""
                className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-full border text-sm sm:text-base font-medium transition-all uppercase"
                style={{
                  fontFamily: "BonaNova",
                  color: "#5C5857",
                  borderColor: "#EDB161",
                  borderWidth: "1px",
                  backgroundColor: "#ECE8DC",
                  letterSpacing: "0.05em",
                }}
              >
                BOOK NOW
              </a>
            </div>
          </div>

          {/* Images Section - Two Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {/* Left Image */}
            <motion.div
              className="w-full h-[300px] sm:h-[450px] lg:h-[500px] relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="w-full h-full bg-gray-300"
                style={{
                  backgroundImage: `url(${executiveEducationImage1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="w-full h-[300px] sm:h-[450px] lg:h-[500px] relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="w-full h-full bg-gray-300"
                style={{
                  backgroundImage: `url(${executiveEducationImage1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Section 7: DETAILS OF THE EXECUTIVE EDUCATION */}
      <div
        className="w-full min-h-[100vh] sm:h-[auto] py-8 sm:py-24 px-8 sm:px-[10rem] flex flex-col justify-center"
        style={{ background: "#ECE8DC" }}
      >
        <motion.div
          className="w-full max-w-6xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold text-center mb-8 sm:mb-12"
            style={{
              fontFamily: '"BonaNova", serif',
              color: "#0211A2",
              fontWeight: "400",
              letterSpacing: "0.02em",
            }}
          >
            DETAILS OF THE EXECUTIVE EDUCATION
          </h2>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Top Left - Text Block */}
            <motion.div
              className="space-y-4 sm:space-y-6 flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  fontFamily: "BonaNova",
                  color: "#333333",
                  letterSpacing: "0.02em",
                }}
              >
                Xarpie opens up doorways to partnerships with Singularity
                University, where the Enterprise Programs usher growth. With
                OpenExO and Exponential Organisation coaching by Salim Ismail,
                our programming brings cutting-edge executive education and
                exponential growth tools directly into our members' hands.
              </p>
              <a
                href=""
                className="inline-block px-6 py-2 sm:px-8 sm:py-3 rounded-full border text-sm sm:text-base font-medium transition-all w-fit"
                style={{
                  fontFamily: "BonaNova",
                  color: "#EDB161",
                  borderColor: "#EDB161",
                  borderWidth: "1px",
                  backgroundColor: "transparent",
                }}
              >
                BOOK NOW
              </a>
            </motion.div>

            {/* Top Right - Image */}
            <motion.div
              className="w-full h-[250px] sm:h-[350px] lg:h-[400px] relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="w-full h-full bg-gray-300"
                style={{
                  backgroundImage: `url(${executiveEducationImage1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {/* Bottom Left - Image */}
            <motion.div
              className="w-full h-[250px] sm:h-[350px] lg:h-[400px] relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div
                className="w-full h-full bg-gray-300"
                style={{
                  backgroundImage: `url(${executiveEducationImage1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {/* Bottom Right - Text Block */}
            <motion.div
              className="space-y-4 sm:space-y-6 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  fontFamily: "BonaNova",
                  color: "#333333",
                  letterSpacing: "0.02em",
                }}
              >
                The Machani Group connects members with global industry experts
                and business veterans from platforms like Abundance 360,
                Singularity University, EO, and YPO — delivering insight,
                strategy, and mentorship tailored to your growth journey.
              </p>
              <a
                href=""
                className="inline-block px-6 py-2 sm:px-8 sm:py-3 rounded-full border text-sm sm:text-base font-medium transition-all w-fit"
                style={{
                  fontFamily: "BonaNova",
                  color: "#EDB161",
                  borderColor: "#EDB161",
                  borderWidth: "1px",
                  backgroundColor: "transparent",
                }}
              >
                BOOK NOW
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Section 8: ANCHORED ON TECHNOLOGY, BUILT FOR EXCELLENCE (Repeat) */}
      <div className="w-full min-h-[100vh] sm:h-[100vh] bg-white py-8 sm:py-24 px-8 sm:px-[10rem] flex flex-col justify-center items-center">
        <motion.div
          className="w-full max-w-6xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold text-center"
            style={{
              fontFamily: '"BonaNova", serif',
              color: "#0211A2",
              fontWeight: "400",
              letterSpacing: "0.02em",
            }}
          >
            ANCHORED ON TECHNOLOGY, BUILT FOR EXCELLENCE
          </h2>

          <motion.div
            className="w-full h-[300px] sm:h-[600px] relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="w-full h-full bg-gray-200"
              style={{
                backgroundImage: `url(${modernSpaceLast})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Offices;
