import React from "react";
import Heading from "../_components/Heading";
import ApproachCard from "../_components/ApproachCard";

function Approach() {
  const approachItem = [
    {
      no: 1,
      title: "Make Appointment",
      desc: "You must make an appointment in advance, to choose the service and date.",
    },
    {
      no: 2,
      title: "Consultations",
      desc: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      no: 3,
      title: "Treatment Planning",
      desc: "The Ayurvedic practitioner creates a personalized treatment plan for you",
    },
    {
      no: 4,
      title: "Maintenance",
      desc: "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

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
