'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Truck, Medal, CreditCard, Recycle } from 'lucide-react';
import { Product } from '../../../types/products';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

// Function to fetch products with resolved category references
async function fetchProductsWithCategories() {
  const query = `
    *[_type == "product"] {
      _id,
      name,
      price,
      image,
      category-> { name }
    }
  `;
  const fetchedProducts = await client.fetch(query);
  return fetchedProducts;
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Fetch products and categories on mount
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await fetchProductsWithCategories();
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  // Scroll listener to toggle visibility for animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 100; // Position to trigger animation
      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add to cart handler
  const addToCart = (productName: string) => {
    alert(`Added ${productName} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Latest Products Section */}
      <h1 className="text-2xl font-bold mb-6 text-center">Our Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            {/* Product Image */}
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
            )}

            {/* Product Details */}
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-500 mt-2">
              {product.category?.name || 'N/A'}
            </p>
            <p className="text-xl font-bold mt-2">£{product.price}</p>
            <Button
              onClick={() => addToCart(product.name)}
              className="w-full bg-[#2A254B] hover:bg-[#2A254B]/90 text-white px-4 py-2 mt-4"
            >
              Add to cart
            </Button>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-serif text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          What makes our brand different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`space-y-3 bg-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="transition-transform duration-300 ease-in-out hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Features array
const features = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Free delivery",
    description: "Enjoy free delivery on orders over £50",
  },
  {
    icon: <Medal className="w-8 h-8" />,
    title: "Quality craftsmanship",
    description: "We source and create pieces that add beauty and value to your space",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Secure payments",
    description: "Shop with confidence using our secure payment options",
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Sustainable design",
    description: "We believe in sustainable materials and eco-friendly production",
  },
];
