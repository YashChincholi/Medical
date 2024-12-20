import React from "react";
import DiscoverBox from "../_components/DiscoverBox";
import Heading from "../_components/Heading";

function Discover() {
  const discoverItem = [
    {
      title: "Personalized Wellness",
      desc: "Get treatments made just for you based on your individual doshas ( body type)",
      imgUrl: "/heartbeat.svg",
    },
    {
      title: "Focus on prevention",
      desc: "Stop problems even before they start.",
      imgUrl: "/ribbon.svg",
    },
    {
      title: "Mind-Body Connection",
      desc: "Keep your mind and body in sync for a happy life.",
      imgUrl: "/lotusPosition.svg",
    },
    {
      title: "Holistic Healing",
      desc: "Fix the root problem for long-lasting health.",
      imgUrl: "/protection.svg",
    },
    {
      title: "Natural Remedies",
      desc: "Using herbs and natural therapies for healing.",
      imgUrl: "/ayurveda.svg",
    },
    {
      title: "Boosting immunity",
      desc: "Stay strong and healthy for life, not just for today.",
      imgUrl: "/strong.svg",
    },
  ];
  return (
    <div className=" mt-14 flex flex-col items-center gap-5">
      <Heading
        title="Discover Ayurveda's magic with us"
        desc="Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, a totally effective approach for a better life."
        isPara={true}
      />
      <div className="bg-secondry py-20 w-full">
        <div className="flex justify-center items-center sm:absolute sm:w-[100%] w-full h-[60%] mt-5 ">
          <div className="relative w-[350px] h-[450px]">
            <img
              src="/bg.svg"
              alt="background"
              className="absolute inset-0 w-full h-full z-10"
            />
            <img
              src="/meditationGirl.svg"
              alt="girl"
              className="absolute inset-0 w-full h-full z-20"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:gap-x-[500px] sm:px-48 sm:py-3 px-10 sm:gap-y-10 z-10">
          {discoverItem.map((item, index) => (
            <DiscoverBox key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;
