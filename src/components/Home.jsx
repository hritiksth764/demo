import React from "react";
import Landing from "./Landing";
import SectionSeparator from "./SectionSeparator";
import WorkSection from "./WorkSection";
import LastSection from "./LastSection";
import InspiredWorldSection from "./InspiredWorldSection";

const Home = () => {
  return (
    <div className="w-full">
      <Landing />
      {/* <SectionSeparator /> */}
      <WorkSection />
      <LastSection />
      <InspiredWorldSection />
      {/* <ImagesSection /> */}

      {/* <PlayReel />
      <ImagesSection /> 
      <SpreadSection /> */}
    </div>
  );
};

export default Home;
