import { ReactElement, createContext, useState } from "react";

// defining product type
export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

// creating initial state for provider

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

// defining the useContext type
export type UseProductsContextType = { products: ProductType[] };

// creating initial context state
const initialContextState: UseProductsContextType = { products: [] };

// creating products context
const ProductsContext =
  createContext<UseProductsContextType>(initialContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initialState);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
