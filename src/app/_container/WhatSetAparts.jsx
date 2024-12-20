import React from "react";
import Heading from "../_components/Heading";
import TextCard from "../_components/TextCard";
import { apartCard } from "../_constants";

function WhatSetAparts() {
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
            <div key={index} className="w-full">
              <img src={item.imgUrl} alt="itemImage" className="w-full" />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default WhatSetAparts;
