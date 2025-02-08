import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mb-12 md:mb-20">
      <div className="bg-[#2A254B] text-white w-[634px] h-[478px] md:p-16 flex flex-col justify-between">
        <div className="flex flex-col mb-auto">
          <h1 className="font-clash text-[20px] font-normal md:text-4xl pr-32 mb-2 whitespace-nowrap">
            It started with a small idea
          </h1>
          <p className="text-lg mb-4 mt-2 max-w-md text-[18px] font-normal font-satoshi">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
        </div>
        <Button className="bg-[#F9F9F9] px-[40px] py-[34px] self-start text-[#2A254B] bg-opacity-80 hover:text-white hover:bg-[#2A254B] text-[16px] hover:bg-opacity-90 mt-auto flex justify-center items-center">
          View collection
        </Button>
      </div>
      <div className="aspect-square md:aspect-auto">
        <Image
          src="/Image-block.png"
          alt="Interior design showcase"
          layout="responsive" // Automatically adjusts the image size based on the screen width
          width={634} // Specify a width for the image
          height={478} // Specify a height for the image
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
