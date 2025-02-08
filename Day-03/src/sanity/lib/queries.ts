import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"] | order(_createdAt desc)`;
export const four = groq`*[_type == "product"] | order(_createdAt desc)[0..3]`;
