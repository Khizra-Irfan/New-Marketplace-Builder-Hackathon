// src/app/Ceramics/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface CeramicsPageProps {
  params: { slug: string };
}

interface Ceramic {
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
async function getCeramic(slug: string): Promise<Ceramic | null> {
  console.log("Debug: Slug received in getCeramic:", slug);

  const query = groq`
    *[_type == "product" && slug.current in [
      "the-dandy-chair",
      "rustic-vase-set",
      "vase-set",
      "the-lucky-lamp"
    ] && slug.current == $slug][0]{
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

export default async function CeramicsPage({ params }: CeramicsPageProps) {
  const { slug } = params;

  console.log("Debug: Slug from params:", slug); // Log the slug from URL
  const ceramic = await getCeramic(slug);

  if (!ceramic) {
    console.error("Debug: No product found for slug:", slug);
    return (
      <div className="text-center text-2xl font-semibold">
        Ceramic product not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Ceramic Image Section */}
        <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg group">
          {ceramic.image && (
            <Image
              src={urlFor(ceramic.image).url()}
              alt={ceramic.name}
              width={500}
              height={500}
              className="object-contain w-full h-full rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          )}
        </div>

        {/* Ceramic Info Section */}
        <div className="flex flex-col justify-between gap-8 bg-white rounded-lg p-6 shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
          {/* Ceramic Name */}
          <h1 className="text-4xl font-semibold text-gray-900 tracking-wide">
            {ceramic.name}
          </h1>

          {/* Ceramic Price */}
          <p className="text-3xl font-medium text-indigo-600 mt-2">
            £{ceramic.price}
          </p>

          {/* Ceramic Description */}
          {ceramic.description && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                Description
              </h2>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {ceramic.description}
              </p>
            </div>
          )}

          {/* Ceramic Material */}
          {ceramic.material && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                Material
              </h2>
              <p className="text-gray-700 mt-2">{ceramic.material}</p>
            </div>
          )}

          {/* Ceramic Dimensions */}
          {ceramic.dimensions && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                Dimensions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <div className="text-gray-600 text-lg">
                  <strong>Height:</strong> {ceramic.dimensions.height}
                </div>
                <div className="text-gray-600 text-lg">
                  <strong>Width:</strong> {ceramic.dimensions.width}
                </div>
                <div className="text-gray-600 text-lg">
                  <strong>Depth:</strong> {ceramic.dimensions.depth}
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
