import React from "react";

function Book() {
  return (
    <div className="relative mt-20 h-[90vh] w-full flex flex-col items-center justify-center text-center">
      <img
        src="/book.svg"
        alt="background"
        className="object-cover absolute inset-0 w-full h-full z-0 hidden sm:block "
      />
      <img
        src="/bookr.svg"
        alt="background"
        className="object-cover absolute inset-0 w-full h-full z-0 sm:hidden block "
      />
      <div className="bg-black bg-opacity-50 w-full h-full inset-0 absolute z-10" />
      <h1 className="relative z-20 text-white mx-20 sm:px-48 font-medium mb-10 sm:text-5xl text-4xl leading-snug">
        Ready to restore harmony in your mind, body and spirit?
      </h1>
      <button className="relative z-20 px-12 sm:px-8 py-4 font-bold bg-primary text-white rounded-xl">
        Book a Consultation
      </button>
    </div>
  );
}

export default Book;
