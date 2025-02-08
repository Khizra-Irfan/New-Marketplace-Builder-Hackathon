'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const PopularProducts = () => {
  const router = useRouter();

  const handleNavigation = (slug: string) => {
    // Navigate to the product detail page using the slug
    router.push(`/popularProducts/${slug}`);
  };

  // Define products
  const products = [
    {
      slug: 'the-poplar-suede-sofa',
      name: 'The Poplar Suede Sofa',
      price: '$980',
      image: '/Image-block.png',
    },
    {
      slug: 'the-dandy-chair',
      name: 'The Dandy Chair',
      price: '$250',
      image: '/Image Left.png',
    },
    {
      slug: 'the-lucky-lamp',
      name: 'The Lucky Lamp',
      price: '$250',
      image: '/Photo-2.png',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6 text-center text-[#2A254B]">Our Popular Products</h1>

      {/* Products Row */}
      <div className="flex justify-between items-start gap-4">
        {/* First Product - Slightly Larger */}
        <div
          key={products[0].slug}
          className="w-[45%] group border rounded-lg shadow-md p-3 hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <div onClick={() => handleNavigation(products[0].slug)}>
            {/* Product Image */}
            <div className="overflow-hidden rounded-md">
              <Image
                src={products[0].image}
                height={400}
                width={500}
                alt={products[0].name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            {/* Product Details */}
            <h2 className="text-lg font-semibold mt-4 group-hover:text-[#2A254B] transition-colors duration-300">
              {products[0].name}
            </h2>
            <p className="text-xl font-bold mt-2">{products[0].price}</p>
          </div>
          {/* Add to Cart Button */}
          <Button
            onClick={() => alert(`Added ${products[0].name} to cart`)}
            className="w-full bg-[#2A254B] hover:bg-[#2A254B]/80 text-white px-4 py-2 mt-4 transition-colors duration-300"
          >
            Add to Cart
          </Button>
        </div>

        {/* Second Product - Medium Width */}
        <div
          key={products[1].slug}
          className="w-[25%] group border rounded-lg shadow-md p-3 hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <div onClick={() => handleNavigation(products[1].slug)}>
            {/* Product Image */}
            <div className="overflow-hidden rounded-md">
              <Image
                src={products[1].image}
                height={400}
                width={300}
                alt={products[1].name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            {/* Product Details */}
            <h2 className="text-lg font-semibold mt-4 group-hover:text-[#2A254B] transition-colors duration-300">
              {products[1].name}
            </h2>
            <p className="text-xl font-bold mt-2">{products[1].price}</p>
          </div>
          {/* Add to Cart Button */}
          <Button
            onClick={() => alert(`Added ${products[1].name} to cart`)}
            className="w-full bg-[#2A254B] hover:bg-[#2A254B]/80 text-white px-4 py-2 mt-4 transition-colors duration-300"
          >
            Add to Cart
          </Button>
        </div>

        {/* Third Product - Medium Width */}
        <div
          key={products[2].slug}
          className="w-[25%] group border rounded-lg shadow-md p-3 hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <div onClick={() => handleNavigation(products[2].slug)}>
            {/* Product Image */}
            <div className="overflow-hidden rounded-md">
              <Image
                src={products[2].image}
                height={400}
                width={300}
                alt={products[2].name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            {/* Product Details */}
            <h2 className="text-lg font-semibold mt-4 group-hover:text-[#2A254B] transition-colors duration-300">
              {products[2].name}
            </h2>
            <p className="text-xl font-bold mt-2">{products[2].price}</p>
          </div>
          {/* Add to Cart Button */}
          <Button
            onClick={() => alert(`Added ${products[2].name} to cart`)}
            className="w-full bg-[#2A254B] hover:bg-[#2A254B]/80 text-white px-4 py-2 mt-4 transition-colors duration-300"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* View Collection Button */}
      <div className="my-10 flex justify-center items-center">
        <Button className="px-6 py-6 bg-[#2A254B] text-white rounded-lg hover:bg-[#444061] transition">
          <span>View Full Collection</span>
        </Button>
      </div>
    </div>
  );
};

export default PopularProducts;
