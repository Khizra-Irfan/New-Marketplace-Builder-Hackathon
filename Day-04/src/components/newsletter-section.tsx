import Image from 'next/image'; // Import Image from next/image
import { Button } from "@/components/ui/button"; // Ensure Button is imported
import { Input } from "@/components/ui/input";   // Ensure Input is imported

export default function NewsletterSection() {
  return (
    <section className="relative text-white py-16 px-6 md:px-24 overflow-hidden mt-12 md:mt-20">
      <div className="w-full h-[444px] relative">
        <Image
          src="/Image.png"  // Image source
          alt="Background image"
          layout="fill"      // Use 'fill' layout for covering the whole area
          objectFit="cover"  // Ensures the image covers the section
          className="w-full h-full"  // Ensures the image takes full width and height
        />
        {/* Form section placed absolutely over the image */}
        <div className="absolute inset-0 mt-28 pt-20 flex items-center justify-center z-10">
          <form className="flex flex-col md:flex-row gap-0 max-w-xl mx-auto px-16 w-full md:w-4/5">
            <Input
              type="email"
              placeholder="your@email.com"
              className="bg-white text-gray-200 flex-grow py-2 px-6 mb-4"  // Adjusted for better spacing and length
            />
            <Button type="submit" className="bg-[#2A254B] hover:bg-[#2A254B]/90 text-white py-2 px-6">
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
