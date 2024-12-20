import React from "react";
import Heading from "../_components/Heading";
import TextCard from "../_components/TextCard";

function WhatSetAparts() {
  const apartCard = [
    {
      title: "स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।",
      desc: "[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]",
      isText: true,
      span: "col-span-2",
    },
    {
      isText: false,
      imgUrl: "/MaaBeti.svg",
    },

    {
      title: "Precise Diagnosis",
      desc: "Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.",
      isText: true,
    },
    {
      title: "Zero side-effects",
      desc: "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs ",
      isText: true,
    },
    {
      isText: false,
      imgUrl: "/jadibuti.svg",
    },

    {
      title: "Individual Treatment",
      desc: "all Treatments are personalized based on a person's unique constitution and health concerns.",
      isText: true,
    },
    {
      isText: false,
      imgUrl: "/girl.svg",
    },
  ];

  return (
    <div>
      <Heading
        isPara={false}
        title="What sets Ayurvedic consultations apart?"
      />
      <div className="md:grid lg:grid-cols-4 md:grid-cols-2 flex flex-col mx-10  md:mx-40 gap-2 ">
        {apartCard.map((item, index) =>
          item.isText ? (
            <TextCard item={item} key={index} />
          ) : (
            <div key={index}>
              <img src={item.imgUrl} alt="itemImage" />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default WhatSetAparts;
