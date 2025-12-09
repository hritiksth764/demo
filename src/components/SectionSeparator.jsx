import React from "react";
import separatorSvg from "../assets/Group 7.svg";

const SectionSeparator = () => {
  return (
    <div className="w-full z-10 relative sm:-mt-35 -mt-7">
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
