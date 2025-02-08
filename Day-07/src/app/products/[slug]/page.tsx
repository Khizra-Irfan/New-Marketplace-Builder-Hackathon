import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      _type,
      image,
      price,
      description,
      features,
      dimensions
    }`, { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Section */}
        <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg group">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain w-full h-full rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          )}
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-between gap-8 bg-white rounded-lg p-6 shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
          {/* Product Name */}
          <h1 className="text-4xl font-semibold text-gray-900 tracking-wide">{product.name}</h1>
          
          {/* Product Price */}
          <p className="text-3xl font-medium text-indigo-600 mt-2">£{product.price}</p>

          {/* Product Description */}
          {product.description && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Description</h2>
              <p className="text-gray-700 mt-2 leading-relaxed">{product.description}</p>
            </div>
          )}

          {/* Product Features */}
          {product.features && product.features.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 text-lg">{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Product Dimensions */}
          {product.dimensions && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Dimensions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <div className="text-gray-600 text-lg">
                  <strong>Height:</strong> {product.dimensions.height}
                </div>
                <div className="text-gray-600 text-lg">
                  <strong>Width:</strong> {product.dimensions.width}
                </div>
                <div className="text-gray-600 text-lg">
                  <strong>Depth:</strong> {product.dimensions.depth}
                </div>
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button className="w-full bg-[#2A254B] hover:bg-[#2A254B]/90 text-white py-3 rounded-lg transition duration-300 ease-in-out mt-6 transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
