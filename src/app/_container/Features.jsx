import React from "react";
import FeatureBox from "../_components/FeatureBox";

function Features() {
  const featureItem = [
    {
      imgUrl: "/speechBubble.svg",
      text: "Convenient online & In-clinic consultations",
    },
    {
      imgUrl: "/shield.svg",
      text: "Safe and effective treatment",
    },
    {
      imgUrl: "/doctor.svg",
      text: "Experienced Ayurvedic Practitioners",
    },
    {
      imgUrl: "/prescription.svg",
      text: "Personalized Treatment Plans & Guidance",
    },
  ];

  return (
    <div className="py-6 flex flex-col sm:flex-row gap-5 justify-between items-center bg-secondry px-12">
      {featureItem.map((feature, index) => (
        <FeatureBox feature={feature} key={index} />
      ))}
    </div>
  );
}

export default Features;
