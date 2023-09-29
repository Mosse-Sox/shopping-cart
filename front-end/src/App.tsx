import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <div className="rainbow-background">
    {/* {pageContent}
        <Footer viewCart={viewCart} /> */}
      </div>
    </>
  );
  return content;
}

export default App;
