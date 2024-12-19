import React from "react";
import Heading from "../_components/Heading";
import StoryCard from "../_components/StoryCard";

function Stories() {
  return (
    <div className="w-full bg-[#FFF7E2] mt-20 p-10">
      <Heading title="Stories From Our Valued Customers!" isPara={false} />
      <div className="flex gap-10 sm:mx-20 space-x-6 px-4 overflow-x-auto sm:overflow-x-hidden snap-x snap-mandatory">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="snap-center sm:snap-none sm:shrink shrink-0 w-[100%] sm:w-auto"
          >
            <StoryCard key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
