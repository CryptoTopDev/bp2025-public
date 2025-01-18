import React, { useState } from "react";
import minus from "../../assets/image/icons/minus.svg";
import plus from "../../assets/image/icons/plus.svg";
export const FaqBox = ({ heading, paragraph }) => {
  const [active, setactive] = useState(false);
  return (
    <div
      onClick={() => setactive(!active)}
      className="w-full border-b-[1px] border-b-[#333333] pb-[24px]"
    >
      <div className="flex items-center justify-between gap-1">
        <h1 className="text-[18px] text-[#fff] mont-bold">{heading}</h1>
        <button>
          {active === false ? (
            <img src={plus} alt="" className="w-[24px] min-w-[24px]" />
          ) : (
            <img src={minus} alt="" className="w-[25px] min-w-[25px]" />
          )}
        </button>
      </div>
      {active === true && (
        <p className="text-[#FFFFFF] mont-light text-[16px] mt-[30px] md:text-[14px] md:mt-[25px]">
          {paragraph}
        </p>
      )}
    </div>
  );
};
