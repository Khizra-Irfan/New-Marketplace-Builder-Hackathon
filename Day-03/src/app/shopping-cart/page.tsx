"use client"; // Ensures this component is rendered on the client side

import React from "react";
import Image from "next/image";  // Import Next.js Image component

const Cart = () => {
  // Sample product data for better scalability
  const products = [
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri-color grey glaze.",
      price: 85,
      image: "/Product-image.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 85,
      image: "/Product Image1.png",
      quantity: 1,
    },
  ];

  // Total calculation
  const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
      <h1 className="text-2xl sm:text-3xl text-center lg:text-left text-gray-700">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
        {/* Product Section */}
        <div className="border-2 p-4">
          <h1 className="text-lg font-normal text-gray-700">Product</h1>
          {products.map((product) => (
            <div key={product.id} className="flex items-start justify-between mt-8">
              <div className="flex">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100} // Set fixed width
                  height={100} // Set fixed height
                  className="transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                />
                <div className="ml-6">
                  <h1 className="text-base sm:text-lg font-medium">{product.name}</h1>
                  <p className="text-sm mt-2">{product.description}</p>
                  <p className="mt-2 text-base font-semibold">£{product.price}</p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="flex flex-col items-center ">
                <h1 className="text-lg font-normal text-gray-700 sm:hidden lg:block">Quantity</h1>
                <p className="mt-2 text-lg font-medium">{product.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total Section (Hidden on Small Screens) */}
        <div className="border-2 p-4 sm:hidden lg:block">
          <h1 className="text-lg font-normal text-gray-700">Total</h1>
          <p className="mt-10 text-lg font-medium">£{totalPrice}</p>
        </div>
      </div>

      {/* Subtotal Section */}
      <div className="mt-10 text-center lg:text-right">
        <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
        <h1 className="inline text-xl sm:text-2xl font-semibold">£{totalPrice}</h1>
        <p className="text-sm mt-4">Taxes and shipping are calculated at checkout</p>
        <button className="bg-[#2A254B] h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
