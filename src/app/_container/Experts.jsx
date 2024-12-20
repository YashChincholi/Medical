import React from "react";
import Heading from "../_components/Heading";
import ExpertCard from "../_components/ExpertCard";

function Experts() {
  return (
    <div className="mt-10">
      <Heading isPara={false} title="Meet our Ayurveda experts" />
      <div className="flex space-x-6 px-4 overflow-x-auto sm:overflow-x-hidden snap-x snap-mandatory items-center justify-center gap-10">
        <div className="flex space-x-6 px-4 overflow-x-auto sm:overflow-x-hidden snap-x snap-mandatory">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="snap-center sm:snap-none sm:shrink shrink-0 w-[100%] sm:w-auto"
            >
              <ExpertCard key={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-[35vw] xl:mx-[40vw]">
        <div className="flex justify-center items-center mt-8 text-center md:text-sm text-xs xl:text-lg bg-green-400 bg-opacity-15 p-2 border border-green-950">
          Find More Experts &gt;
        </div>
      </div>
    </div>
  );
}

export default Experts;
