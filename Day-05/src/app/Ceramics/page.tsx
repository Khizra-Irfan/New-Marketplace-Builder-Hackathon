'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Ceramics = () => {
  const [products] = useState([
    {
      slug: 'the-dandy-chair',
      name: 'The Dandy Chair',
      price: '£250',
      image: '/Image Left.png',
    },
    {
      slug: 'rustic-vase-set',
      name: 'Rustic Vase Set',
      price: '£155',
      image: '/rustic-vase.png',
    },
    {
      slug: 'vase-set',
      name: 'Vase Set',
      price: '£125',
      image: '/Photo-1.png',
    },
    {
      slug: 'the-lucky-lamp',
      name: 'The Lucky Lamp',
      price: '£399',
      image: '/Photo-2.png',
    },
  ]);

  // Add to cart handler
  const addToCart = (productName: string) => {
    alert(`Added ${productName} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6 text-center">Our Ceramics Collection</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.slug}
            className="group border rounded-lg shadow-md p-3 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <Link href={`/Ceramics/${product.slug}`}>
              {/* Product Image */}
              <div className="overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  height={700}
                  width={700}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              {/* Product Details */}
              <h2 className="text-lg font-semibold mt-4 group-hover:text-[#2A254B] transition-colors duration-300">
                {product.name}
              </h2>
              <p className="text-xl font-bold mt-2">{product.price}</p>
            </Link>
            {/* Add to Cart Button */}
            <Button
              onClick={() => addToCart(product.name)}
              className="w-full bg-[#2A254B] hover:bg-[#2A254B]/80 text-white px-4 py-2 mt-4 transition-colors duration-300"
            >
              Add to cart
            </Button>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
     {/* View Collection Button */}
<div className="my-10 flex justify-center items-center">
  <Link href="/products">
    <Button className="px-6 py-6 bg-[#2A254B] text-white rounded-lg hover:bg-[#444061] transition">
      View Full Collection
    </Button>
  </Link>
</div>

    </div>
  );
};

export default Ceramics;
