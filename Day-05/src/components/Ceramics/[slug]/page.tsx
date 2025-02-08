import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

const productQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  price,
  description,
  slug,
  image
}`;

type ProductProps = {
  product: any;
};

const CeramicDetails = ({ product }: ProductProps) => {
  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
        <p className="text-lg text-gray-600">
          Please check the URL or select a valid product.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative w-full h-96">
          <Image
            src={product.image.asset.url}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-3xl font-semibold text-indigo-600">{product.price}</p>
          <p className="text-gray-700 text-lg">{product.description}</p>
          <button className="w-full bg-[#2A254B] text-white py-3 rounded-lg hover:bg-[#2A254B]/90 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CeramicDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "product" && category == "Ceramics"] {
    "slug": slug.current
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product: { slug: string }) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false, // 'false' means 404 if slug does not exist
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const product = await client.fetch(productQuery, { slug });

  return {
    props: { product },
  };
};
