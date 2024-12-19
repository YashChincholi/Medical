import React from "react";

function Heading({ title, desc, isPara }) {
  return (
    <div className="mt-14 flex flex-col items-center gap-5">
      <h1 className="text-primary text-center text-4xl font-bold underline sm:px-20 px-10">
        {title}
      </h1>
      {isPara && (
        <p className="text-center sm:max-w-[700px] text-[#666666] text-sm opacity-85 leading-normal sm:px-20 px-10">
          {desc}
        </p>
      )}
    </div>
  );
}

export default Heading;