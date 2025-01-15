import React, { useState } from "react";
import minus from "../../assets/image/roadmap/minus.svg";
import plus from "../../assets/image/roadmap/plus.svg";
export const BigFaq = ({ heading, goal }) => {
  const [active, setactive] = useState(false);
  return (
    <div
      onClick={(e) => {
        setactive(!active);
      }}
      className={`w-full BigFaq  px-[100px] py-[60px] border-b-[1px] border-b-[#CACACA]  lg:p-[30px] ${
        active &&
        "bg-[#000000] rounded-[40px] md:rounded-[24px] active border-b-0 p-[100px]"
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] md:text-[18px] mont-bold text-[#fff]">
          {heading}
        </h1>

        {active ? (
          <img src={minus} alt="" className="md:w-[20px]" />
        ) : (
          <img src={plus} alt="" className="md:w-[20px]" />
        )}
      </div>
      <div className="mt-[23px]">
        <p className="text-[18px] md:text-[17px]  mont-light text-[#fff]">
          <span className="text-[#fff] text-[18px] mont-bold">Goal:</span>{" "}
          {goal}
        </p>
        {active && (
          <ul className="mt-[20px]  md:text-[17px]   flex flex-col gap-[5px] mb-[20px]">
            <li className="text-[#fff] text-[18px] font-bold mb-[10px]">
              Value the Community Provides:
            </li>
            <li className="text-[18px]  md:text-[17px]   mont-light text-[#fff]">
              <span className="mont-bold">Informative:</span> Offer up-to-date
              information on BP2025’s goals, initiatives, and events to ensure
              members are well-informed.
            </li>
            <li className="text-[18px]  md:text-[17px]   mont-light text-[#fff]">
              <span className="mont-bold">Valuable:</span> Provide resources,
              tools, and insights that actively contribute to personal and
              collective growth within the community.
            </li>
            <li className="text-[18px] md:text-[17px]   mont-light text-[#fff]">
              <span className="mont-bold">Engaging:</span> Foster meaningful
              discussions, workshops, and events that encourage active
              participation and interaction.
            </li>
            <li className="text-[18px] md:text-[17px]   mont-light text-[#fff]">
              <span className="mont-bold">Supportive:</span> Create a space
              where members can offer help and guidance to one another,
              strengthening the community bond.
            </li>
            <li className="text-[18px] md:text-[17px]   mont-light text-[#fff]">
              <span className="mont-bold">Empowering:</span> Equip members with
              the knowledge and tools to make informed decisions and actively
              contribute to BP2025’s mission.
            </li>
          </ul>
        )}
        {active && (
          <ul className="flex flex-col gap-[5px] ">
            <li className="text-[#fff] text-[18px] md:text-[17px]   font-bold mb-[10px]">
              Actions:
            </li>
            <li className="text-[18px] md:text-[17px]   mont-light text-[#fff]">
              Create online and in-person spaces for meaningful engagement,
              including community forums, workshops, and events.
            </li>
            <li className="text-[18px] md:text-[17px]   mont-light text-[#fff]">
              Provide early access to new initiatives and resources through our
              Discord community and other channels.
            </li>
          </ul>
        )}
        {active && (
          <ul className="flex flex-col mt-[20px]">
            <li className="text-[#fff] md:text-[17px]   text-[18px] font-bold mb-[15px]">
              Outcome:
            </li>
            <li className="text-[18px] md:text-[17px]   mont-light text-[#fff]">
              A unified, informed, and empowered community actively
              participating in BP2025’s mission and sharing in its success.
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
