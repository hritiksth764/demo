import React, { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { useScroll, useTransform } from "framer-motion";

import imagePNG from "../assets/herohome.png";
import heroOverlayImage from "../assets/herooverlay.png";
const Landing = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  // const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const introY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const subcopyY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div
      ref={containerRef}
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
            opacity: 1, // Adjust opacity as needed
          }}
        />
      </div>

      <div className="absolute top-0 h-full px-8 sm:px-[10rem] ">
        <div
          className="para mt-[8rem] sm:mt-[15rem]  sm:leading-7 text-left w-full ml-0 "
          style={{ transform: `translateY(${introY}px)` }}
        >
          <p
            className="overflow-hidden m-0 block text-left sm:text-[1.5vw] uppercase"
            style={{
              fontFamily: "ChivoMono-Regular",
              color: "#EDB161",
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

        {/* <FaArrowDown className="text-[#ffffffc5] " /> */}
        <p
          className="para2 mt-0 sm:w-1/2 sm:text-[1.2vw] sm:leading-7 "
          style={{
            transform: `translateY(${subcopyY}px)`,
            fontFamily: "BonaNova",
            letterSpacing: "0.03em",
          }}
        >
          In the heart of Bengaluru, in Koramangala, Regalium is a
          next-generation development that forms a seamless world of retail,
          workspaces, F&B, and culture for those who lead with vision. Rooted in
          and inspired by our heritage, we pillar on luxury, community, and
          innovation to create an inspired world.
        </p>

        <div className="studio mt-5 sm:mt-10">
          <a
            href=""
            className="inline-block text-xs sm:text-[1vw] px-6 py-3 sm:px-10 sm:py-4 rounded-full border text-center transition-all font-medium"
            style={{
              fontFamily: "ChivoMono-Regular",
              // backgroundColor: "#1e2a3a",
              color: "#EDB161",
              borderColor: "#EDB161",
              borderWidth: "1px",
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
  );
};

export default Landing;
