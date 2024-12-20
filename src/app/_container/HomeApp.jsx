import React from "react";

function HomeApp() {
  return (
    <div className="relative bg-secondary flex flex-col items-center w-full mt-10 bg-[#FFF7E2]">
      <div className="relative flex flex-col gap-[400px] lg:gap-0 w-full lg:px-40 px-10 py-10">
        <div
          id="text"
          className="mb-5 lg:mb-0 md:flex md:justify-center md:flex-col md:items-center lg:block"
        >
          <h1 className="text-4xl text-primary font-bold text-center">
            Amrutam Home App
          </h1>
          <p className="lg:text-xs text-sm text-gray-500 lg:text-opacity-85 text-center lg:text-left w-full px-8 lg:mx-0 lg:px-0 lg:w-[450px] mt-2">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
        </div>
        <div id="store">
          <h1 className="lg:text-3xl text-2xl lg:w-[550px] font-semibold lg:font-medium leading-normal text-center lg:text-left text-opacity-85 text-black mt-3">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe
          </h1>
          <h1 className="font-bold text-4xl lg:text-xl text-center lg:text-left mt-10">
            Get the App Now
          </h1>
          <div className="flex lg:gap-2 gap-8 mt-5 flex-col lg:flex-row">
            <img
              src="./playstore.svg"
              alt="playstore"
              className="object-cover w-full h-full lg:w-[150px] lg:h-[40px]"
            />
            <img
              src="./appstore.svg"
              alt="appstore"
              className="object-cover w-full h-full lg:w-[150px] lg:h-[40px]"
            />
          </div>
        </div>
      </div>
      <div
        id="phone"
        className="absolute lg:right-40 lg:top-[50%] top-[35%] right-0 md:right-40 md:top-[30%] transform -translate-y-1/2"
      >
        <div className="hidden lg:block absolute w-10 h-10 p-20 top-[13%] right-[40%] bg-black bg-opacity-15 rounded-full" />
        <div className="hidden lg:block absolute w-10 h-10 p-20 bottom-[14%] right-[8%] bg-black bg-opacity-15 rounded-full" />
        <img
          src="./iPhone13.svg"
          alt="phone"
          className="relative top-0 h-[450px] w-[450px]"
        />
      </div>
    </div>
  );
}

export default HomeApp;
