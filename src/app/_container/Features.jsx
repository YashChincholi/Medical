import React from "react";
import FeatureBox from "../_components/FeatureBox";
import {
  FaUserMd,
  FaFilePrescription,
  FaCommentDots,
  FaShieldAlt,
} from "react-icons/fa";
function Features() {
  const featureItem = [
    {
      imgUrl: <FaCommentDots size={35} color="#3A643B" />,
      text: "Convenient online & In-clinic consultations",
    },
    {
      imgUrl: <FaShieldAlt size={35} color="#3A643B" />,
      text: "Safe and Effective treatment",
    },
    {
      imgUrl: <FaUserMd size={35} color="#3A643B" />,
      text: "Experienced Ayurvedic Practitioners",
    },
    {
      imgUrl: <FaFilePrescription size={35} color="#3A643B" />,
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
