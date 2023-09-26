export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initialState: ProductType[] = [
  {
    sku: "item0001",
    name: "Small Bean",
    price: 6.0,
  },
  {
    sku: "item0002",
    name: "Medium Bean",
    price: 9.0,
  },
  {
    sku: "item0003",
    name: "Large Bean",
    price: 12.0,
  },
];

export type UserProductsContextType = { products: ProductType[] };


