import React, { useEffect, useRef } from "react";
import vid5 from "../Resources/vid5.mp4";
import { gsap, ScrollTrigger, Power4 } from "gsap/all";

const PlayReel = () => {
  const parent = useRef(null);
  const videoDiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  useEffect(() => {
    // Check if refs are available
    if (
      !parent.current ||
      !videoDiv.current ||
      !play.current ||
      !reel.current
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const parentElement = parent.current;
    const videoDivElement = videoDiv.current;
    const playElement = play.current;
    const reelElement = reel.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentElement,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(
      videoDivElement,
      {
        width: "100%",
        height: "100%",
        ease: Power4.easeInOut,
      },
      "a"
    )
      .to(
        playElement,
        {
          x: "-100%",
          scale: 2,
          ease: Power4.easeInOut,
        },
        "a"
      )
      .to(
        reelElement,
        {
          x: "100%",
          scale: 2,
          ease: Power4.easeInOut,
        },
        "a"
      );

    // Cleanup function
    return () => {
      if (tl && tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      ScrollTrigger.update();
    };
  }, []);
  return (
    <div
      ref={parent}
      className="w-full h-screen bg-black text-white relative overflow-hidden"
    >
      <div className="overlay flex items-center justify-between h-full w-full flex-col absolute z-[1]">
        <div className="page3-title pt-[5rem] flex items-center justify-center gap-[0.3rem]">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-[1rem]"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>

          <h1 className="text-sm font-semibold text-center">Work in Motion</h1>
        </div>

        <div className="page3Content sm:text-7xl text-7xl flex sm:gap-44 gap-3 ">
          <h1 ref={play} className="">
            Play
          </h1>

          <h1 ref={reel}>Reel</h1>
        </div>

        <p className="text-center text-xs sm:w-[21%] w-[80%] pb-16">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>

      <div
        ref={videoDiv}
        className="page3Video aspect-video absolute top-1/2 left-1/2 -translate-x-[50%] sm:w-[10%] opacity-60 scale-[1.2] -translate-y-[50%]"
      >
        <video
          autoPlay
          loop
          muted
          src={vid5}
          className="w-full h-full object-cover object-center"
        ></video>
      </div>
    </div>
  );
};

export default PlayReel;
