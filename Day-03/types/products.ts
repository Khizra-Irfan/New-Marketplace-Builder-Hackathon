export interface Product {
  _id: string;
  category?: {
    name?: string; // Add 'name' to category
    _ref?: string;
    _type?: "reference";
  } | null;
  _type: "product";
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  price: number;
  description: string;
  name: string;
  slug: string;
  quantity: number;
  tags?: string[];
  features?: string[];
  dimensions?: {
    height: string;
    width: string;
    depth: string;
  };
}
