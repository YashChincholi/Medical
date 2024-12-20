import React from "react";

function TextCard({ item }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-t-[5px] min-h-60 md:min-h-0 border-t-[#3A643B] w-full flex justify-center items-center flex-col text-center px-3 ${
        item.span ? item.span : ""
      }`}
    >
      <h1 className="text-2xl my-4 text-primary font-bold max-w-64">
        {item.title}
      </h1>
      <p className="text-primary text-xs opacity-80 max-w-80">{item.desc}</p>
    </div>
  );
}

export default TextCard;
