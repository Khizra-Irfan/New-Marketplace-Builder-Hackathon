import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Ceramics = () => {
  const products = [
    {
      slug: 'the-dendy-chair',
      name: 'The Dendy Chair',
      price: '$250',
      image: '/Image Left.png',
    },
    {
      slug: 'rustic-vase-set',
      name: 'Rustic VaseSet',
      price: '$155',
      image: '/rustic-vase.png',
    },
    {
      slug: 'the-silky-vase',
      name: 'The Silky Vase',
      price: '$125',
      image: '/Photo-1.png',
    },
    {
      slug: 'the-lucky-lamp',
      name: 'The Lucky Lamp',
      price: '$399',
      image: '/Photo-2.png',
    },
  ];

  return (
    <section>
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        {/* Title */}
        <h1 className="text-2xl font-semibold">New Ceramics</h1>

        {/* Product Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {products.map((product) => (
            <div key={product.slug} className="w-full h-auto cursor-pointer">
              <Link href={`/Ceramics/${product.slug}`}>
                <Image
                  src={product.image}
                  height={700}
                  width={700}
                  alt={product.name}
                  className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                />
              </Link>
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">{product.name}</p>
                <p>{product.price}</p>
                {/* Add to Cart Button */}
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Collection Button */}
        <div className="my-10 flex justify-center items-center">
          <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
            View collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ceramics;
