import React from "react";
import FeatureBox from "../_components/FeatureBox";
import { featureItem } from "../_constants";

function Features() {
  return (
    <div className="py-6 flex flex-col sm:flex-row gap-5 justify-between items-center bg-secondry px-12">
      {featureItem.map((feature, index) => (
        <FeatureBox feature={feature} key={index} />
      ))}
    </div>
  );
}
export default Features;
