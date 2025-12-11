import React from "react";
import Landing from "./Landing";
import SectionSeparator from "./SectionSeparator";
import WorkSection from "./WorkSection";

const Home = () => {
  return (
    <div className="w-full">
      <Landing />
      <SectionSeparator />
      <WorkSection />
      {/* <PlayReel />
      <ImagesSection /> 
      <SpreadSection /> */}
    </div>
  );
};

export default Home;
