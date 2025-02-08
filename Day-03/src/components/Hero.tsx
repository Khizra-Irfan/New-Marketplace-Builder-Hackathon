import Image from "next/image";
import React from "react";
import { ButtonMediumLight } from "./Buttons/buttons";

const Hero = () => {
  return (
    <>
      {/* Large screens */}
      <section className="hidden sm:px-20 py-10 sm:grid grid-cols-6 lg:grid-cols-12">
        <div className="col-span-6 lg:col-span-7 bg-darkPrimary bg-[#494665] p-10 text-white flex flex-col">
          <div className="flex-1 pb-32">
            <h2 className="font-clash text-clash-32">
              The furniture brand for the future, with timeless designs
            </h2>
            <button className="bg-[#39355a] w-full sm:w-max px-[32px] py-[16px] mt-6 text-white">
              View Collection
            </button>
          </div>
          <div className="h-[30%] flex items-end">
            <p className="font-satoshi text-satoshi-18">
              A new era in eco-friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
        </div>
        <div className="hidden sm:block sm:col-span-6 lg:col-span-5">
          <Image
            src={"/Right-image.png"}
            alt="Main Image"
            height={584}
            width={520}
            className="object-cover h-full w-full"
          />
        </div>
      </section>

      {/* Small screens */}
      <section className="block sm:hidden px-4 py-10">
        <div className="bg-darkPrimary bg-[#494665] text-white flex flex-col p-3 mx-1">
          <div className="pb-6">
            <h2 className="font-clash text-2xl mb-4">
              The furniture brand for the future, with timeless designs
            </h2>
            <ButtonMediumLight text="View Collection" href="/shop" />
          </div>
          <div className="mt-4 mb-1">
            <p className="font-satoshi text-base">
              A new era in eco-friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
          
        </div>
        <div className="mx-1">
            <Image
              src={"/Right-image.png"}
              alt="Main Image"
              height={300} // Adjusted for small screens
              width={400} // Adjusted for small screens
              className="object-cover mx-auto"
            />
          </div>
      </section>
    </>
  );
};

export default Hero;
