// sanityClient.js
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'iyijh9w6', // Apne Sanity Project ID se replace karein
  dataset: 'production', // Sanity ka dataset
  useCdn: true, // CDN use karna
});
