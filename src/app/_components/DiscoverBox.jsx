import React from "react";

function DiscoverBox({ item }) {
  return (
    <div className="flex flex-col-reverse justify-end items-center sm:flex-row max-w-[300px] sm:h-full m-3 sm:m-0 gap-3 sm:gap-0">
      <div className="flex flex-col items-end justify-end sm:justify-center sm:text-right text-center gap-2 sm:h-full">
        <p className="text-[#000000] font-bold text-lg sm:leading-relaxed leading-tight">
          {item.title}
        </p>
        <p className="text-[#666666] font-extralight text-xs">{item.desc}</p>
      </div>
      <div className="flex items-center justify-center ml-5">
        <img
          src={item.imgUrl}
          alt="discover"
          className="sm:w-[90px] sm:h-[90px] object-contain w-[60px] h-[60px]"
        />
      </div>
    </div>
  );
}

export default DiscoverBox;
