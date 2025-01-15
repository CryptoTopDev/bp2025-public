import React, { useState } from "react";
import minus from "../../assets/image/about/minus.svg";
import plus from "../../assets/image/roadmap/plus.svg";
export const FaqAbout = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="pb-[30px] pt-[30px] border-b-[1px] border-b-[#CACACA]"
      onClick={(e) => {
        setActive(!active);
      }}
    >
      <div
        className={`flex items-center justify-between  ${
          active && "mb-[30px]"
        }`}
      >
        <h1 className="text-[#000000] text-[18px] mont-bold">
          Testing making this change
        </h1>
        {active ? (
          <img src={minus} alt="" />
        ) : (
          <img src={plus} alt="" className="w-[24px]" />
        )}
      </div>
      {active && (
        <p className="text-[16px] md:text-[17px] mont-light text-[#000000]">
          This is just placeholder text. Don’t be alarmed, this is just here to
          fill up space since your finalized copy isn’t ready yet. Once we have
          your content finalized, we’ll replace this placeholder text with your
          real content.
        </p>
      )}
    </div>
  );
};
