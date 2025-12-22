import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../assets/retailImages/hero.png";
import architecturalBlueprint from "../assets/retailImages/layout.png";
import { gsap, ScrollTrigger, Power4 } from "gsap/all";
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

  // Refs for scroll-based image animations
  const imageSectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);

  useEffect(() => {
    if (!imageSectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (image1Ref.current) {
      tl.to(
        image1Ref.current,
        {
          x: "-30%",
          y: "-20%",
          ease: "none",
        },
        "a"
      );
    }

    if (image2Ref.current) {
      tl.to(
        image2Ref.current,
        {
          x: "30%",
          y: "-30%",
          ease: "none",
        },
        "a"
      );
    }

    if (image3Ref.current) {
      tl.to(
        image3Ref.current,
        {
          x: "-20%",
          y: "20%",
          ease: "none",
        },
        "a"
      );
    }

    if (image4Ref.current) {
      tl.to(
        image4Ref.current,
        {
          x: "25%",
          y: "-15%",
          ease: "none",
        },
        "a"
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
              "INDULGENCE TAKES CENTRE STAGE AND ALLOWS US TO WELCOME THE COMMUNITY INTO A LUXE SETTING",
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
            className="m-0 para2 absolute bottom-16 right-0 sm:bottom-16 sm:right-[9rem] sm:w-[50%] sm:text-[1.4vw] text-left space-y-4 sm:space-y-6 z-10"
            style={{
              y: heroParaY,
              fontFamily: "BonaNova",
              letterSpacing: "0.03em",
              color: "#ffffff",
            }}
          >
            <p className="leading-relaxed">
              When we look to the future, we are envisioning a holistic
              ecosystem — one that caters to each need, want, and aspiration of
              the members of our community. With our all-encompassing retail
              spaces, we deliver luxury at each step.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section 2: ENABLING A PROACTIVE & ENTERPRISING */}
      <div className="w-full h-[auto] sm:h-[100vh] bg-white py-8 sm:py-24 px-8 sm:px-[10rem] flex flex-col justify-center items-center">
        <motion.div
          className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-[30px] sm:text-[2.5vw] text-center"
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
                color: "#BB924D",
                borderColor: "#BB924D",
                borderWidth: "1px",
                backgroundColor: "transparent",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              DOWNLOAD FLOOR PLANS
            </a>
          </div>
        </motion.div>
      </div>

      {/* Section 3: AN ANCHOR OF OUR HERITAGE */}
      <div className="w-full h-[100vh] sm:h-[100vh] relative overflow-hidden flex items-end px-8 sm:px-[10rem] pb-8 sm:pb-24">
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
            zIndex: 1,
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.60) 100%)",
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
              fontFamily: "BonaNova",
              color: "#EDECED",
              textTransform: "uppercase",
              fontWeight: "400",
              letterSpacing: "0.02em",
            }}
          >
            REDEFINING RETAIL
          </h2>
          <p
            className="text-base sm:text-[1.2vw] leading-relaxed"
            style={{
              fontFamily: "BonaNova",
              color: "#EDECED",
              fontWeight: "400",
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
        ref={imageSectionRef}
        className="w-full py-10 sm:py-22 px-8 sm:px-[10rem] relative overflow-hidden"
        style={{ background: "white" }}
      >
        {/* Center container for images */}
        <div className="w-full max-w-7xl mx-auto">
          {/* Image container with scroll-based animations */}
          <div className="relative w-full h-[80vh] sm:h-[120vh] flex items-center justify-center">
            {/* Center Title */}
            <div className="relative z-10 text-center px-4">
              <h2
                className="text-[30px] sm:text-[2.5vw] leading-tight"
                style={{
                  fontFamily: '"BonaNova", serif',
                  color: "#0211A2",
                  fontWeight: "400",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                A SEAMLESS AND INTUITIVE
                <br /> RETAIL JOURNEY
              </h2>
            </div>

            {/* Image 1 - Top Left */}
            <div
              ref={image1Ref}
              className="absolute w-[40%] sm:w-[28%] aspect-[3/4] top-0 left-0 sm:left-[-10%]"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${interiorMallView2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* Image 2 - Top Right */}
            <div
              ref={image2Ref}
              className="absolute w-[35%] sm:w-[30%] aspect-[4/3] top-0 right-0 sm:right-[-8%]"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${interiorMallView3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* Image 3 - Bottom Left */}
            <div
              ref={image3Ref}
              className="absolute w-[38%] sm:w-[32%] aspect-[4/3] bottom-0 left-0 sm:left-[-12%]"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${interiorMallView4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* Image 4 - Bottom Right */}
            <div
              ref={image4Ref}
              className="absolute w-[42%] sm:w-[28%] aspect-[3/4] bottom-0 right-0 sm:right-[-10%]"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${interiorMallView})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>

          {/* Description + Button */}
          <div className="text-center max-w-3xl mx-auto mt-16 sm:mt-24 space-y-6 sm:space-y-8">
            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                fontFamily: "BonaNova",
                color: "#5C5857",
                letterSpacing: "0.02em",
              }}
            >
              Here, luxury is redefined through exceptional craftsmanship,
              innovative expressions, and impeccable service. Seamlessly
              blending premium customer care with cutting-edge technology, this
              exclusive space invites members to explore a world of unparalleled
              elegance, where every detail is designed to elevate your shopping
              journey.
            </p>
            <div className="flex justify-center">
              <a
                href=""
                className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-full border text-sm sm:text-base font-medium transition-all hover:bg-[#EDB161] hover:border-[#EDB161] hover:text-white"
                style={{
                  fontFamily: "BonaNova",
                  color: "#BB924D",
                  borderColor: "#BB924D",
                  textTransform: "uppercase",
                  borderWidth: "1px",
                  backgroundColor: "transparent",
                  letterSpacing: "0.05em",
                }}
              >
                EXPLORE THE EXPANSE
              </a>
            </div>
          </div>
        </div>
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
          {/* Left Column - Image */}
          <div className="lg:col-span-5 mb-6 sm:mb-0">
            <motion.div
              className="w-full h-[300px] sm:h-[600px] relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
          </div>

          {/* Right Column - Text Block and Image */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12">
            {/* Text Block */}
            <div className="space-y-4 sm:space-y-6">
              <motion.p
                className="text-xs sm:text-sm uppercase tracking-wider"
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
                className="text-[30px] sm:text-[2.5vw] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  fontFamily: "BonaNova",
                  color: "#0211A2",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                }}
              >
                PUSHING THE BOUNDARIES <br /> OF INDIAN RETAIL
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base lg:text-lg leading-relaxed"
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
                Through innovation in retail tech, Regalium will focus on hyper
                personalisation, easy provenance verification for limited
                edition products, and provide expert consulting on several
                fronts such as styling, buying, tax planning, seamless payment
                options and more.
              </motion.p>
            </div>

            {/* Bottom Image */}
            <motion.div
              className="w-full h-[250px] sm:h-[400px] relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
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
              IMMERSIVE JOURNEYS FOR BRANDS & BUYERS
            </motion.p>
            <motion.h2
              className="text-[30px] sm:text-[2.5vw]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: "BonaNova",
                color: "#0211A2",
                fontWeight: "400",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              AN INVITATION TO <br /> REFINED RETAIL
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
              Regalium's luxury retail environments redefine how one engages
              with brands — where discovery, craftsmanship, and personalised
              service converge. Each encounter is thoughtfully curated,
              transforming shopping into an immersive, memorable experience
              shaped by design, detail, and discretion.
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
                  fontFamily: "BonaNova",
                  color: "#BB924D",
                  borderColor: "#BB924D",
                  borderWidth: "1px",
                  backgroundColor: "transparent",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                JOIN THE FUTURE OF RETAIL
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Retail;
