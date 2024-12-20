import React from "react";
import Heading from "../_components/Heading";
import ApproachCard from "../_components/ApproachCard";
import { approachItem } from "../_constants";

function Approach() {
  return (
    <div>
      <Heading
        title="Our ayurvedic approach"
        desc="At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient's body type, medical history, and current health conditions."
        isPara={true}
      />
      <div className="mt-12 flex sm:px-44 px-8 justify-center items-center sm:gap-4 gap-14 overflow-x-auto sm:overflow-x-hidden snap-x snap-mandatory">
        <div className="flex space-x-6 px-4 overflow-x-auto sm:overflow-x-hidden snap-x snap-mandatory">
          {approachItem.map((item, index) => (
            <div
              key={index}
              className="snap-center sm:snap-none sm:shrink shrink-0 w-[40%] sm:w-auto"
            >
              <ApproachCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Approach;
