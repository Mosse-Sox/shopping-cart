import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";

import "../public/styles/background.css";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <div className="rainbow-background">
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {/* {pageContent}
        <Footer viewCart={viewCart} /> */}
    </div>
  );
  return content;
}

export default App;
