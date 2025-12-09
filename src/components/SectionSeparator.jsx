import React from "react";
import separatorSvg from "../assets/Group 7.svg";

const SectionSeparator = () => {
  return (
    <div className="w-full z-10 relative -mt-7 sm:-mt-20 lg:-mt-28 xl:-mt-32 2xl:-mt-36">
      <img
        src={separatorSvg}
        alt="Section Separator"
        className="w-full h-auto block"
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default SectionSeparator;
