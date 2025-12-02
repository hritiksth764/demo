import React, { useEffect, useRef } from "react";
import vid5 from "../Resources/vid5.mp4";
import { gsap, ScrollTrigger, Power4 } from "gsap/all";

const ImagesSection = () => {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 0",
        scrub: 1,
      },
    });

    tl.to(
      first.current,
      {
        x: "50%",
        y: "-50%",
      },
      "a"
    );

    tl.to(
      second.current,
      {
        x: "-20%",
        y: "-20%",
      },
      "a"
    );

    tl.to(
      third.current,
      {
        x: "-20%",
        y: "-20%",
      },
      "a"
    );

    tl.to(
      fourth.current,
      {
        x: "20%",
        y: "-30%",
      },
      "a"
    );
  }, []);

  return (
    <div
      ref={parent}
      className="h-[80vh] sm:h-[200vh] w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="centerImg sm:w-[29%] w-[50%] relative">
        <img
          className="w-full h-full object-cover object-center"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />

        <div
          ref={first}
          className="image1 sm:w-[50%] sm:h-[50%] w-[6rem] h-[8rem] absolute top-[-20%] sm:right-[-40%] right-[-30%]"
        >
          <img
            className="h-full w-full object-cover object-center"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>

        <div
          ref={second}
          className="image2 sm:w-[100%] sm:h-[30%] w-[8rem] aspect-video absolute top-[18%] left-[-35%] sm:left-[-95%]"
        >
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover object-center"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>

        <div
          ref={third}
          className="image3 w-[8rem] h-[6rem] sm:w-[100%] sm:h-[40%] absolute sm:bottom-[-20%] sm:left-[-90%] bottom-[-18%] left-[-50%]"
        >
          <img
            className="h-full w-full object-cover object-center"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>

        <div
          ref={fourth}
          className="image4 w-[8rem] sm:w-[100%] sm:h-[30%] aspect-video absolute bottom-[5%] right-[-60%] sm:right-[-90%] "
        >
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover object-center"
            src={vid5}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
