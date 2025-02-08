'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { LuSprout } from 'react-icons/lu';
import { MdOutlinePriceChange } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const ProductListing = () => {
  const [itemCount, setItemCount] = useState(1);
  const [cartItems, setCartItems] = useState(0);
  const router = useRouter();

  const features = [
    { title: 'Next day as standard', description: 'Order before 3pm and get your order the next day.', icon: TbTruckDelivery },
    { title: 'Made by true artisans', description: 'Hand-crafted goods with real passion.', icon: IoIosCheckmarkCircleOutline },
    { title: 'Unbeatable prices', description: 'Quality products at the best prices.', icon: MdOutlinePriceChange },
    { title: 'Recycled packaging', description: '100% recycled packaging for a better planet.', icon: LuSprout },
  ];

  const handleIncrease = () => setItemCount(itemCount + 1);
  const handleDecrease = () => setItemCount(itemCount > 1 ? itemCount - 1 : 1);

  const handleAddToCart = () => {
    setCartItems(cartItems + itemCount);
    alert(`${itemCount} item(s) added to cart`);
  };

  const handleProductClick = (slug: string) => {
    router.push(`/productListing/${slug}`);
  };

  return (
    <section>
      <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Main Product Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 h-auto">
            <Image
              src={'/Image Left.png'}
              alt="chair"
              height={800}
              width={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
            <div>
              <p className="text-xl md:text-3xl font-semibold">The Dandy Chair</p>
              <p className="py-2 text-lg md:text-xl">$250</p>
            </div>
            <div className="text-[#505977] text-sm md:text-base">
              <h1 className="font-semibold text-xl">Description</h1>
              <div className="my-4 md:my-6">
                <p>
                  A timeless design, with premium materials features as one of our most popular
                  and iconic pieces. The dandy chair is perfect for any stylish living space with
                  beech legs and lambskin leather upholstery.
                </p>
              </div>
              <div className="ml-4">
                <ul className="list-disc space-y-1">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>
              </div>
              <div>
                <div className="my-8">
                  <h1 className="font-semibold text-xl">Dimensions</h1>
                </div>
                <div className="flex gap-12 md:gap-20 text-lg font-semibold md:text-base">
                  <div>
                    <h1>Height</h1>
                    <p>110cm</p>
                  </div>
                  <div>
                    <h1>Width</h1>
                    <p>75cm</p>
                  </div>
                  <div>
                    <h1>Depth</h1>
                    <p>50cm</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-8">
                  <div className="flex items-center font-semibold text-xl gap-4">
                    <h1>Amount:</h1>
                    <div className="flex items-center gap-4">
                      <button
                        className="flex items-center justify-center bg-[#F5F5F5] rounded-md px-4 py-2"
                        onClick={handleDecrease}
                      >
                        <span>-</span>
                      </button>
                      <span>{itemCount}</span>
                      <button
                        className="flex items-center justify-center bg-[#F5F5F5] rounded-md px-4 py-2"
                        onClick={handleIncrease}
                      >
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                  <button
                    className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

      <h1 className="container mx-auto px-4 pt-14 text-2xl font-bold mb-6 text-center text-[#2A254B]">You Might Also Like</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 mb-6">
        {[{ name: 'The Dandy Chair', slug: 'the-dandy-chair', price: 250, image: '/Image Left.png' },
          { name: 'Vase Set', slug: 'vase-set', price: 155, image: '/Photo.png' },
          { name: 'Rustic Vase Set', slug: 'rustic-vase-set', price: 125, image: '/rustic-vase.png' },
          { name: 'The Lucky Lamp', slug: 'the-lucky-lamp', price: 125, image: '/Photo-2.png' }
        ].map((product) => (
          <div key={product.slug} className="border rounded-lg p-3 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => handleProductClick(product.slug)}>
            <Image src={product.image} height={300} width={300} alt={product.name} className="w-full h-64 object-cover rounded-md hover:scale-105 transition-transform duration-300" />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-xl font-bold">${product.price}</p>
            <Button className="mt-3 bg-[#2A254B] text-white px-4 py-2 w-full">Add to Cart</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductListing;
