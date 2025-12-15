import React from "react";
import Landing from "./Landing";
import SectionSeparator from "./SectionSeparator";
import WorkSection from "./WorkSection";
import ImagesSection from "./ImagesSection";

const Home = () => {
  return (
    <div className="w-full">
      <Landing />
      <SectionSeparator />
      <WorkSection />
      <ImagesSection />

      {/* <PlayReel />
      <ImagesSection /> 
      <SpreadSection /> */}
    </div>
  );
};

export default Home;
