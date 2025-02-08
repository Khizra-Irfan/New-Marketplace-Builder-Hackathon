"use client"; // Mark this component as a client-side component

import { useEffect, useState } from 'react'
import { Truck, Medal, CreditCard, Recycle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"; 
import Image from 'next/image'  // Import Image component from Next.js

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])  

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className={`text-3xl md:text-4xl font-serif text-center mb-16 font-clash transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        What makes our brand different
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className={`space-y-3 bg-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="transition-transform duration-300 ease-in-out hover:scale-110">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold font-clash">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card className="border-0 shadow-none group">
              <div className="aspect-square relative overflow-hidden mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500} // Set fixed width for the image
                  height={500} // Set fixed height for the image
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-clash font-medium text-lg" style={{ color: '#2A254B' }}>
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-3">£{product.price}</p>
              {/* Removed the Add to cart button */}
            </Card>
          </div>
        ))}
      </div>

      <div 
        className={`text-center mt-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '500ms' }}
      >
        <Button 
          variant="outline" 
          size="lg" 
          className="bg-[#F9F9F9] text-[#2A254B] font-clash transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          View collection
        </Button>
      </div>
    </section>
  )
}

const features = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    icon: <Medal className="w-8 h-8" />,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Unbeatable prices",
    description: "For our materials and quality, you won't find better prices anywhere"
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Recycled packaging",
    description: "We use 100% recycled materials to ensure our footprint is more manageable"
  }
]

const products = [
  {
    id: 1,
    name: "The Dandy chair",
    price: "250",
    image: "/Right-image.png"
  },
  {
    id: 2,
    name: "Rustic Vase Set",
    price: "155",
    image: "/Photo.png"
  },
  {
    id: 3,
    name: "The Silky Vase",
    price: "125",
    image: "/Photo-1.png"
  },
  {
    id: 4,
    name: "The Lucy Lamp",
    price: "399",
    image: "/Photo-2.png"
  }
]
