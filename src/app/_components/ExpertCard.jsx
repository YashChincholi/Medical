import React from "react";
import { FaLink, FaGraduationCap, FaStar } from "react-icons/fa";

function ExpertCard() {
  return (
    <div className="flex justify-center items-center flex-col rounded-2xl bg-[#FFF7E2]">
      <div className="relative shadow-sm backdrop-blur-sm ">
        <img src="./expert.svg" alt="expert" className="relative z-0" />
        <div className="flex justify-center items-center gap-2 text-white bg-black px-2 rounded-xl absolute z-10 bottom-0 left-[30%]">
          4.5 <FaStar className="text-xl text-yellow-500" />
        </div>
      </div>

      <h1 className="font-bold text-xl mt-6 px-4">Dr. Vaishali sharma</h1>
      <p className="text-[#838383] lg:px-4">Ayurveda Practitioner (BAMS, MD)</p>
      <p className="my-1 flex gap-1 px-4">
        <span className="text-primary ">
          <FaGraduationCap className="text-xl" />
        </span>
        25 years of experience
      </p>
      <p className="text-primary bg-black bg-opacity-15 px-4 py-1 my-3 rounded-full flex gap-3">
        <FaLink className="text-xl" /> Skin Specialist
      </p>
      <p className="text-white bg-[#3A643B] text-center py-4 px-4 w-full rounded-b-3xl font-mediums mt-5 text-base">
        Book a session
      </p>
    </div>
  );
}

export default ExpertCard;
