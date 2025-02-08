import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"] | order(_createdAt desc)`;
export const four = groq`*[_type == "product"] | order(_createdAt desc)[0..3]`;

// Query for a single product by slug
export const productQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    description,
    price,
    image {
      asset -> {
        url
      }
    },
    category -> {
      title
    }
  }
`;
