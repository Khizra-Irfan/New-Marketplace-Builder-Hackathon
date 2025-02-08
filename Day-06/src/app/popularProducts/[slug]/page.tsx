// src/app/popularProducts/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { product } from "@/sanity/schemaTypes/product";

// Directly using params for slug
interface ProductsPageProps {
  params: { slug: string };
}

interface Products {
  _id: string;
  name: string;
  image: any;
  price: number;
  description: string;
  material: string;
  dimensions?: {
    height: string;
    width: string;
    depth: string;
  };
}

// Fetch ceramic product based on slug
async function getProducts(slug: string): Promise<Products | null> {
  console.log("Debug: Slug received in getCeramic:", slug);

  const query = groq`
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      image,
      price,
      description,
      material,
      dimensions
    }
  `;

  try {
    const result = await client.fetch(query, { slug });
    console.log("Debug: Sanity query result:", result);
    return result;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { slug } = params;

  console.log("Debug: Slug from params:", slug); // Log the slug from URL
  const product = await getProducts(slug);

  if (!product) {
    console.error("Debug: No product found for slug:", slug);
    return (
      <div className="text-center text-2xl font-semibold">
         Product not found
      </div>
    );
  }

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
          <h1 className="text-4xl font-semibold text-gray-900 tracking-wide">{product.name}</h1>
          <p className="text-3xl font-medium text-indigo-600 mt-2">£{product.price}</p>

          {product.description && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Description</h2>
              <p className="text-gray-700 mt-2 leading-relaxed">{product.description}</p>
            </div>
          )}

          {product.material && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Material</h2>
              <p className="text-gray-700 mt-2">{product.material}</p>
            </div>
          )}

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

          <button className="w-full bg-[#2A254B] hover:bg-[#2A254B]/90 text-white py-3 rounded-lg transition duration-300 ease-in-out mt-6">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
