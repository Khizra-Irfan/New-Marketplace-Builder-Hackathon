"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const navItems = [
  "Plant pots",
  "Ceramics",
  "Tables",
  "Chairs",
  "Crockery",
  "Tableware",
  "Cutlery",
];

export default function Navbar() {
  const router = useRouter();
  const [cartItems] = useState<CartItem[]>([
    { id: 1, name: "Ceramic Pot", price: 25.99, quantity: 1 },
    { id: 2, name: "Wooden Chair", price: 49.99, quantity: 2 },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleViewCart = () => {
    router.push("/cart");
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Search Icon (Desktop only) */}
          <div className="hidden lg:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500">
                  <Search className="h-6 w-6" />
                  <span className="sr-only">Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <div className="p-2">
                  <Input type="search" placeholder="Search..." className="w-full" />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-serif text-2xl">Avion</span>
            </Link>
          </div>

          {/* Cart & Profile Icons (Desktop only) */}
          <div className="hidden lg:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-4 text-gray-400 hover:text-gray-500">
                  <ShoppingCart className="h-6 w-6" />
                  {cartItems.length > 0 && (
                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                      {cartItems.length}
                    </span>
                  )}
                  <span className="sr-only">Shopping cart</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {cartItems.length > 0 ? (
                  <>
                    <DropdownMenuItem onClick={handleViewCart}>
                      View Cart ({cartItems.length} items)
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleCheckout}>
                      Checkout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem disabled>Your cart is empty</DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-4 text-gray-400 hover:text-gray-500">
                  <User className="h-6 w-6" />
                  <span className="sr-only">User account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isLoggedIn ? (
                  <>
                    <DropdownMenuItem>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      Logout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>
                      <Link href="/login">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/signup">Sign Up</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500">
                  <Search className="h-6 w-6" />
                  <span className="sr-only">Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="p-2">
                  <Input type="search" placeholder="Search..." className="w-full" />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-4 text-gray-400 hover:text-gray-500">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      href="/products"
                      className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

       {/* Desktop Navigation Links */}
<div className="hidden lg:flex lg:items-center lg:justify-center flex-wrap gap-4">
  {navItems.map((item) => (
    <Link
      key={item}
      href="/products"
      className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
    >
      {item}
    </Link>
  ))}
</div>

{/* Pages Navigation Links */}
<div className="hidden lg:flex lg:justify-center space-x-10 mt-2 border-t-2 font-sans pb-2">
  {["Home", "About", "Products", "Shopping Cart"].map((page) => (
    <Link
      key={page}
      href={page === "Home" ? "/" : `/${page.toLowerCase().replace(" ", "-")}`}
      className={`text-sm font-medium uppercase transition-colors duration-200 ease-in-out mt-2
                  ${page === "Home" ? "text-gray-500 hover:text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
    >
      {page}
    </Link>
  ))}
</div>


      </div>
    </nav>
  );
}
