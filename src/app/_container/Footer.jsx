import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const icons = [
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaPinterest,
    FaLinkedinIn,
  ];

  const informationLinks = [
    "About Us",
    "Terms and Conditions",
    "Privacy Policy",
    "Privacy Policy for Mobile Apps",
    "Shipping and Returns Policy",
    "International Delivery",
    "For Businesses, Hotels and Resorts",
  ];

  return (
    <div className="md:p-24 p-10 pb-40 bg-[#DCE3EC] flex sm:justify-center">
      <div className="flex flex-col">
        <div className="sm:hidden flex gap-3 flex-col text-xl">
          <p className="text-primary font-bold text-2xl">Get in touch</p>
          <p>support@amrutam.co.in</p>
          <p>
            Amrutam Pharmaceuticals Pvt Ltd., Chitragupt Ganj, Nai Sadak,
            Lashkar, Gwalior - 474001
          </p>
          <p>+91 9713171999</p>
        </div>

        <div className="sm:hidden flex mt-4 gap-2">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="flex p-2 rounded-full text-white bg-[#3A643B]"
            >
              <Icon className="text-xl" />
            </div>
          ))}
        </div>

        <div className="flex flex-col mx-auto my-8 lg:my-0 lg:max-w-60 w-full text-left">
          <h1 className="text-primary mb-1 font-medium text-lg">Information</h1>
          <div className="font-light text-[#474747]">
            {informationLinks.map((link, index) => (
              <a href="#" key={index}>
                <p className="cursor-pointer">{link}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="sm:hidden flex flex-col mt-4">
          <p className="text-primary font-bold text-xl">
            Subscribe to our Newsletter and join Amrutam Family today!
          </p>
          <div className="flex rounded-full border border-primary text-xl mt-7">
            <div className="mx-auto px-4 py-4 text-lg flex justify-center items-center">
              Your Email Address
            </div>
            <div className="bg-black text-white rounded-r-full px-6 py-4 font-bold text-lg flex justify-center items-center">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
