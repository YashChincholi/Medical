import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function StoryCard() {
  return (
    <div className="mt-10 flex justify-center flex-col bg-white rounded-2xl shadow-md">
      <p className="py-4 px-4 bg-blue-50 text-sm font-bold text-black">
        Consulted for Skin
      </p>
      <div className="flex gap-3 justify-between py-5 px-4 ">
        <div className="flex gap-3">
          <div className="w-4 h-4 bg-[#505050] p-6 rounded-full" />
          <div className="flex flex-col items-start justify-center">
            <p className="font-medium text-base">Sophie Moore</p>
            <p className="font-thin text-sm text-opacity-60 text-gray-800">
              Chennai
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">17/02/24</p>
      </div>
      <div className="px-4 pb-10 flex gap-2 flex-col">
        <div>
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        </div>
        <p className="font-bold text-2xl">“One of a kind service”</p>
        <p className="text-gray-600 pr-14 text-base">
          Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam
          sit amet nisl suscipit adipis.
        </p>
      </div>
    </div>
  );
}

export default StoryCard;
