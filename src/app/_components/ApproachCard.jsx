import React from "react";

function ApproachCard({ item }) {
  return (
    <div className="flex justify-center items-center flex-col sm:p-7 bg-[#FFF7E2] rounded-3xl border-t-4 border-[#3A643B] gap-2">
      <div className="sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] bg-[#7D9674] rounded-full flex items-center justify-center text-white font-bold sm:text-4xl text-lg my-3 sm:my-0">
        {item.no}
      </div>
      <h1 className="text-primary font-bold sm:text-lg text-sm">
        {item.title}
      </h1>
      <p className="text-center font-normal sm:text-sm text-xs mb-14 sm:mb-0 text-black text-opacity-70">
        {item.desc}
      </p>
    </div>
  );
}

export default ApproachCard;
