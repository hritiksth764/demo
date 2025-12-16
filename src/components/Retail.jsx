import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../assets/retailImages/hero.png";
import architecturalBlueprint from "../assets/retailImages/layout.png";
import { Power4 } from "gsap/all";
import heritageCollage from "../assets/retailImages/news.png";
import interiorMallView from "../assets/retailImages/mallview1.png";
import interiorMallView2 from "../assets/retailImages/mallview2.png";
import interiorMallView3 from "../assets/retailImages/mallview3.png";
import interiorMallView4 from "../assets/retailImages/mallview4.png";
import interiorMallView5 from "../assets/retailImages/boulevard1.png";
import interiorMallView6 from "../assets/retailImages/boulevard2.png";
import interiorMallView7 from "../assets/retailImages/last.png";
// import modernSpace1 from "../assets/retailImages/technology1.png";
// import modernSpace2 from "../assets/retailImages/technology2.png";
// import modernSpace3 from "../assets/retailImages/technology3.png";
// import detailsImage1 from "../assets/retailImages/details1.png";

const Retail = () => {
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
            className="heading text-2xl sm:text-[2.8vw] tracking-tighter text-left w-full sm:w-[55%] z-10 mt-[6rem] sm:mt-[15rem]"
            style={{
              y: introY,
              fontFamily: "BonaNova",
              textTransform: "uppercase",
              color: "#ffffff",
              letterSpacing: "0.02em",
            }}
          >
            {[
              "A PLAYGROUND OF INDULGENCE TAKES CENTRE STAGE AND ALLOWS US TO WELCOME THE COMMUNITY INTO A LUXE SETTING.",
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

          {/* Intro Paragraph + Button */}
          <motion.div
            className="m-0 para2 absolute bottom-8 sm:bottom-16 right-0 sm:right-[9rem] w-full sm:w-[40%] px-0 sm:px-0 text-left space-y-4 sm:space-y-6"
            style={{
              y: heroParaY,
              fontFamily: "BonaNova",
              letterSpacing: "0.02em",
              color: "#ffffff",
              zIndex: 10,
            }}
          >
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              When we look to the future, we are envisioning a holistic
              ecosystem — one that caters to each need, want, and aspiration of
              the members of our community. With our all-encompassing retail
              spaces, we deliver luxury at each step.
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
          className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-12"
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
            LUXURY RETAIL AT REGALIUM
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
              EXPLORE THE NEXT-GEN OFFICE SPACES
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
          className="relative z-10 w-full sm:w-2/3 space-y-4 sm:space-y-6"
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
            REDEFINING RETAIL
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl leading-relaxed"
            style={{
              fontFamily: "BonaNova",
              color: "#EDECED",
              letterSpacing: "0.02em",
            }}
          >
            At the intersection of luxury and retail, we carve out space to
            deliver an unmatched experience. Discover a retail experience unlike
            any other in India, where the world's finest brands meet a
            thoughtfully curated selection of diverse, high-quality offerings.
          </p>
        </motion.div>
      </div>

      {/* Section 4: Open-format Retail Experience */}
      <div
        className="w-full min-h-[150vh] sm:h-auto py-8 sm:py-24 px-8 sm:px-[10rem]"
        style={{ background: "white" }}
      >
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Aesthetic Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-6">
            {/* Top Left Image */}
            <motion.div
              className="md:col-span-5 w-full h-[200px] sm:h-[480px] relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute top-2 left-2 text-xs uppercase tracking-wider text-gray-600 z-10">
                Luxury
              </div>
              <div
                className="w-full sm:w-[300px] h-full sm:h-[400px] sm:mt-10 mx-auto"
                style={{
                  backgroundImage: `url(${interiorMallView})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {/* Top Right Image */}
            <motion.div
              className="md:col-span-7 w-full h-[200px] sm:h-[280px] relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-2 left-2 text-xs uppercase tracking-wider text-gray-600 z-10">
                Luxury
              </div>
              <div
                className="w-full sm:w-[300px] h-full sm:h-[320px] sm:mt-10 sm:ml-auto mx-auto"
                style={{
                  backgroundImage: `url(${interiorMallView2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {/* Center Heading - Spans full width */}
            <div className="md:col-span-12 text-center py-6 sm:py-12 px-4">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5vw] font-bold leading-tight"
                style={{
                  fontFamily: '"BonaNova", serif',
                  color: "#0211A2",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                AN OPEN-FORMAT RETAIL EXPERIENCE
                <br />
                THAT LENDS TO FREEDOM AND
                <br />
                DISCOVERY
              </h2>
            </div>

            {/* Bottom Left Image */}
            <motion.div
              className="md:col-span-6 w-full h-[200px] sm:h-[300px] relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute top-2 left-2 text-xs uppercase tracking-wider text-gray-600 z-10">
                Luxury
              </div>
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${interiorMallView3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div
              className="md:col-span-6 w-full h-[200px] sm:h-[500px] relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute top-2 left-2 text-xs uppercase tracking-wider text-gray-600 z-10">
                Luxury
              </div>
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${interiorMallView4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          </div>

          {/* Description + Button */}
          <div className="space-y-4 sm:space-y-6 text-center max-w-3xl mx-auto mt-6 sm:mt-14">
            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                fontFamily: "BonaNova",
                color: "#5C5857",
                letterSpacing: "0.02em",
              }}
            >
              We prioritise the presentation of our culture at the forefront.
              Owing to the diversity of elements in art and architecture across
              South India, there existed vast inspiration for Regalium's
              structure and design.
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
                DOWNLOAD FLOOR PLANS
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 5: Plug & Play at The Boulevard */}
      <div
        className="w-full min-h-[100vh] sm:h-[100vh] py-8 sm:py-24 px-8 sm:px-[10rem] flex items-center"
        style={{ background: "#ECE8DC" }}
      >
        <motion.div
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column - Text Block */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 mb-6 sm:mb-0">
            <motion.p
              className="text-xs sm:text-sm uppercase tracking-wider text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "ChivoMono",
                color: "#666666",
                letterSpacing: "0.1em",
              }}
            >
              A GLIMPSE INTO THE INSPIRED WORLD
            </motion.p>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3vw] font-bold leading-tight text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: '"BonaNova", serif',
                color: "#0211A2",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              PLUG & PLAY AT THE BOULEVARD
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: "BonaNova",
                color: "#5C5857",
                letterSpacing: "0.02em",
              }}
            >
              At Regalium, every element becomes a fractal unit aligned to a
              larger intention: creating a future we wish to live in. Growth is
              no longer only upward or cyclical, but outward, expansive, and
              multiplicative, mirroring the evolution of cities, communities,
              and shared visions.
            </motion.p>
          </div>

          {/* Right Columns - Two Images */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Middle Image - Luxury Storefronts */}
            <motion.div
              className="w-full h-[250px] sm:h-[500px] relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${interiorMallView5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {/* Right Image - Outdoor Seating Area */}
            <motion.div
              className="w-full h-[250px] sm:h-[500px] relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${interiorMallView6})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Section 6: Lock In An Experience */}
      <div className="w-full min-h-[100vh] sm:h-[100vh] py-8 sm:py-24 px-8 sm:px-[10rem] flex items-center bg-white">
        <motion.div
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column - Collage Image */}
          <motion.div
            className="w-full h-[300px] sm:h-[600px] relative overflow-hidden mb-6 sm:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${interiorMallView7})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </motion.div>

          {/* Right Column - Center-Aligned Text */}
          <div className="flex flex-col justify-center items-center text-center space-y-4 sm:space-y-8">
            <motion.p
              className="text-xs sm:text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: "ChivoMono",
                color: "#999999",
                letterSpacing: "0.1em",
              }}
            >
              A GLIMPSE INTO THE INSPIRED WORLD
            </motion.p>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: '"BonaNova", serif',
                color: "#0211A2",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              LOCK IN AN EXPERIENCE
              <br />
              YOU'LL REMEMBER
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                fontFamily: "BonaNova",
                color: "#999999",
                letterSpacing: "0.02em",
              }}
            >
              The Epicurean and the Terrace act as incubators for the next wave
              of culinary creativity, where exploration, experimentation, and
              connection are constantly redefined.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href=""
                className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-full border text-sm sm:text-base font-medium transition-all uppercase"
                style={{
                  fontFamily: "ChivoMono",
                  color: "#999999",
                  borderColor: "#EDB161",
                  borderWidth: "1px",
                  backgroundColor: "transparent",
                  letterSpacing: "0.05em",
                }}
              >
                EXPLORE THE NEXT-GEN OFFICE SPACES
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Retail;
