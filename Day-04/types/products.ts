export type Product = {
  _id: any;
  category: {
    name: string;
    _type: 'reference';
    _ref: string;
  };
  name: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  price: number;
  inventory: number;
  quantity?: number;
  tags?: string[];
  description?: string;
  features?: string[];
  dimensions?: {
    height?: string;
    width?: string;
    depth?: string;
  };
};
