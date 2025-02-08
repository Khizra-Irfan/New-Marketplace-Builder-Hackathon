'use client';

import { useEffect, useState } from 'react';
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10203c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        router.push("/checkout");
        // Clear the cart after proceeding (optional)
        setCartItems([]);
      }
    });
  };

  return (
    <AuthGuard>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h1>
        <div className="space-y-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
                {/* Product Image */}
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                    width={500}
                    height={500}
                  />
                )}

                {/* Product Details */}
                <div className="flex-1 px-3">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600 mt-1">Price: <span className="text-green-600 font-semibold">${item.price}</span></p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="bg-gray-300 px-3 py-2 rounded-md hover:bg-gray-400"
                      onClick={() => handleDecrement(item._id)}
                    >
                      -
                    </button>
                    <p className="text-lg font-semibold">{item.inventory}</p>
                    <button
                      className="bg-gray-300 px-3 py-2 rounded-md hover:bg-gray-400"
                      onClick={() => handleIncrement(item._id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button on the Right */}
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-xl">Your cart is empty 🛍️</p>
          )}
        </div>

        {/* Total Price Section */}
        {cartItems.length > 0 && (
          <div className="text-center mt-6">
            <h3 className="text-2xl font-semibold">Total: <span className="text-green-600">${calculateTotal().toFixed(2)}</span></h3>
            <button
              className="w-full bg-gradient-to-r from-[#10203c] to-[#54709c] text-white font-semibold px-6 py-2 mt-4 rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out"
              onClick={handleProceed}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </AuthGuard>
  );
};

export default CartPage;
