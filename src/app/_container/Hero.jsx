import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="sm:mt-20 relative h-[90vh] sm:bg-red-900 ">
      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-5/6 custom-gradient z-10"
        id="blur"
      ></div>
      <div
        className="block lg:hidden absolute inset-y-0 left-0 w-full custom-gradient-res z-10"
        id="blur res"
      ></div>
      <div
        className="block lg:hidden absolute inset-y-0 right-0 w-full z-0"
        id="res"
      >
        <Image
          src="/HeroR.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="object-right"
        />
      </div>
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-1/2 z-0"
        id="img"
      >
        <Image
          src="/Hero.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="object-right"
        />
      </div>
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-9 text-white">
        <p className="mb-3 text-gray-400 text-sm font-extralight sm:text-base">
          Namaste, Welcome to Amrutam
        </p>
        <h1 className="font-semibold text-2xl sm:text-5xl sm:font-medium sm:leading-snug mb-2">
          Step into Holistic Healing with
          <span className="underline"> Ayurveda</span>
          <br className="hidden lg:block " /> Book Consultation with certified
          Experts.
        </h1>
        <p className="mb-12 text-xs sm:text-xl text-gray-400 leading-snug font-medium">
          Dive into the world of ayurveda and Experience Personalized Health
          Solutions <br className="hidden sm:block" /> and Holistic Guidance
          from Trusted Ayurvedic Doctors Anytime, anywhere.
        </p>
        <button className="px-8 py-4 font-semibold bg-primary rounded-xl">
          Book an Appointment
        </button>
      </div>
    </section>
  );
}

export default Hero;
