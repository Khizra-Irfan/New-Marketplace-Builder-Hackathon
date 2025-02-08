'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { Truck, Medal, CreditCard, Recycle } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const router = useRouter();

  return (
    <div className="w-full h-auto">
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button 
            onClick={() => router.push('/products')}
            className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple hover:bg-gray-300 transition"
          >
            View our products
          </button>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-full items-center justify-around px-8 py-8">
        <div className="bg-[#2A254B] w-full md:w-2/5 text-white p-6 md:p-16">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-4 mb-8">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button 
            onClick={() => router.push('/products')}
            className="bg-[#8b7d7d] h-12 w-40 rounded-sm mt-4 text-white hover:bg-[#776969] transition"
          >
            View Collection
          </button>
        </div>
        <div className="w-full md:w-2/5 mt-8 md:mt-0">
          <Image src="/Image-block.png" alt="About main" width={800} height={600} className="w-full hover:scale-105 transition-transform duration-300" />
        </div>
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full items-center px-16 py-16 space-y-8 md:space-y-0">
        <Image src="/Image (2).png" alt="Service" width={800} height={800} className="w-full md:w-2/5 hover:scale-105 transition-transform duration-300" />
        <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-16">
          <h1 className="text-xl md:text-2xl text-[#2A254B]">
            Our service isn&apos;t just personal, it&apos;s actually hyper-personally exquisite
          </h1>
          <p className="text-[#2A254B] mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-10 text-[#2A254B] hover:bg-gray-300 transition">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full pb-16">
        <h1 className="text-center text-[#2A254B] text-xl">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[ 
            { icon: <Truck className="w-8 h-8 text-[#2A254B]" />, title: "Next day as standard", desc: "Order before 3pm and get your order the next day as standard" },
            { icon: <Medal className="w-8 h-8 text-[#2A254B]" />, title: "Made by true artisans", desc: "Handmade crafted goods made with real passion and craftsmanship" },
            { icon: <CreditCard className="w-8 h-8 text-[#2A254B]" />, title: "Unbeatable prices", desc: "For our materials and quality you won’t find better prices anywhere" },
            { icon: <Recycle className="w-8 h-8 text-[#2A254B]" />, title: "Recycled packaging", desc: "We use 100% recycled materials to ensure our footprint is more manageable" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-200 w-72 p-6 text-center rounded-sm hover:bg-gray-300 transition">
              <div className="mb-4">{item.icon}</div>
              <h1 className="text-[#2A254B] text-lg mt-4">{item.title}</h1>
              <p className="text-[#2A254B] mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input type="text" placeholder="you@gmail.com" className="bg-gray-100 w-80 h-12 p-5 rounded-sm border focus:outline-none" />
            <button className="bg-custom-purple h-12 w-32 rounded-sm text-white bg-[#2d234b] hover:bg-[#332b4b]">Sign Up</button>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default About;
