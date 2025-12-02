import React from "react";
// import vid1 from "../Resources/vid1.mp4";
// import vid2 from "../Resources/vid2.mp4";
import vid3 from "../Resources/vid3.mp4";
import vid4 from "../Resources/vid4.mp4";
import imagePNG from "../assets/image copy 6.png";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";

const WorkSection = () => {
  return (
    <div className="w-full relative py-10 px-8 sm:px-[10rem]">
      <div className="sm:hidden page2-title flex items-center gap-[0.3rem]">
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

        <h1 className="text-sm">In the media</h1>
      </div>

      <h1 className="text-[4rem] sm:text-[10rem] sm:leading-[11rem]">
        <motion.span
          className="inline-block origin-left overflow-hidden"
          initial={{ rotate: 60, y: "100%", opacity: 0 }}
          whileInView={{ rotate: 0, y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: Power4.easeInOut, duration: 1.5 }}
        >
          Work
        </motion.span>
      </h1>

      <p className="sm:hidden block text-lg tracking-tighter opacity-90">
        Highlights of cases that we passionately built with forward-thinking
        clients and friends over the years.
      </p>

      <div className="work-container sm:h-[115rem] h-[118rem] relative sm:flex sm:flex-wrap mt-10">
        <div className="elem1 relative sm:w-[50%] flex-shrink-0 ">
          <div className="imageAndVid h-[25rem] sm:h-fit relative overflow-hidden">
            <motion.img
              data-scroll
              data-scroll-speed="-0.2"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              className="hidden sm:block w-full h-full object-cover object-center"
              src={imagePNG}
              alt=""
            />

            {/* <video
              loop
              muted
              className="inline-block absolute z-[-1] top-0 left-0 w-full h-full object-cover scale-[1] object-center "
              src={vid1}
              alt=""
            /> */}
          </div>

          <div className="picture-heading flex capitalize sm:text-[0.9rem] text-xs">
            <h1 className="font-semibold">Location</h1>
            {/* <p className="opacity-60 font-bold">
              
            </p> */}
          </div>
        </div>

        <div className="text-2xl sm:block hidden sm:w-[35%] sm:h-fit sm:ml-24">
          <div className="page2-title flex gap-[0.3rem] mb-[3rem]">
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

            <h1 className="text-[1rem] font-semibold leading-none tracking-normal">
              Featured Projects
            </h1>
          </div>
          <p className="tracking-tight opacity-90 flex-shrink-0 ">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>

        <div className="elem3 sm:absolute top-[52%] left-[40%] sm:w-[50%] translate-[-50%, -50%] flex-shrink-0">
          <div className="imageAndVid3 mt-[3rem] w-[95%] h-[25rem] sm:h-fit relative overflow-hidden">
            <motion.img
              data-scroll
              data-scroll-speed="-0.2"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              className="hidden sm:block w-full h-full object-cover object-center"
              src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)"
              alt=""
            />

            {/* <video
              autoPlay
              loop
              muted
              className="inline-block absolute z-[-1] top-0 left-0  w-full h-full object-cover scale-[1] object-center "
              src={vid3}
              alt=""
            /> */}
          </div>

          <div className="picture-heading flex capitalize sm:text-[0.9rem] text-xs">
            <h1 className="font-semibold">Community</h1>
            <p className="opacity-60 font-bold"></p>
          </div>
        </div>

        {/* <div className="elem2 sm:absolute top-[23%] left-[50%] translate-[-50%, -50%] sm:w-[fit] flex-shrink-0 sm:ml-24 mt-10">
          <div className="imageAndVid2 sm:mt-[3rem] sm:w-[85%] h-[25rem] sm:h-fit relative overflow-hidden">
            <motion.img
              data-scroll
              data-scroll-speed="-0.2"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              className="hidden sm:block w-full h-full object-cover object-center"
              src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
              alt=""
            />

            <video
              autoPlay
              loop
              muted
              className="inline-block absolute z-[-1] top-0 left-0  w-full h-full object-cover scale-[1] object-center "
              src={vid2}
              alt=""
            />
          </div>

          <div className="picture-heading flex capitalize sm:text-[0.9rem] text-xs">
            <h1 className="font-semibold">Cambium--</h1>
            <p className="opacity-60 font-bold">
              Pioneering Sustainable Solutions
            </p>
          </div>
        </div> */}

        <div className="elem4 sm:absolute bottom-[0%] left-[0%] translate-[-50%, -50%] sm:w-[30%] flex-shrink-0">
          <div className="imageAndVid4 mt-[3rem] h-[25rem] sm:h-fit relative overflow-hidden">
            <motion.img
              data-scroll
              data-scroll-speed="-0.2"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              className="hidden sm:block w-full h-full object-cover object-center"
              src="https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1300x1620/filters:quality(90)"
              alt=""
            />

            {/* <video
              autoPlay
              loop
              muted
              className="inline-block absolute z-[-1] top-0 left-0  w-full h-full object-cover scale-[1] object-center "
              src={vid4}
              alt=""
            /> */}
          </div>

          <div className="picture-heading flex capitalize sm:text-[0.9rem] text-xs">
            <h1 className="font-semibold">Philosophy</h1>
            <p className="opacity-60 font-bold"></p>
          </div>
        </div>

        {/* <a
          href=""
          className="font-semibold opacity-80 sm:text-lg text-sm border-b-[1px] border-[black] mt-7 absolute bottom-0 right-[10%] inline-block"
        >
          Browse all work
        </a> */}
      </div>
    </div>
  );
};

export default WorkSection;
