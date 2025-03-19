import React from "react";
import Faq from "./Faq";

const FaqSection = () => {
  return (
    <div className="py-10">
      <h1 className="text-center text-3xl md:text-5xl mb-10 lg:mb-12 font-bold text-[#0A2C8C]">
        Frequently Asked Questions
      </h1>
      <Faq />
    </div>
  );
};

export default FaqSection;
