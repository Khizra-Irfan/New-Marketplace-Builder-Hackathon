import Hero from "./../components/Hero";
import Ceramics from "./Ceramics/page";
import PopularProducts from "./popularProducts/page"; 
import Benefit from "./../components/benefit";
import Touch from "./../components/touch";
import ProductListing from "./productListing/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mt-8">
        <h2 className="text-center text-3xl font-bold">Explore Our Ceramics</h2>
        <div className="flex justify-center mt-4">
          {/* Ceramics page ka link */}
          <Link href="/ceramics">
            <button className="px-6 py-3 bg-[#2A254B] text-white rounded-lg hover:bg-[#444061] transition">
              View Ceramics
            </button>
          </Link>
        </div>
      </section>
      <Ceramics />
      <PopularProducts /> 
      <Benefit />
      <Touch />
      <ProductListing />
    </>
  );
}
