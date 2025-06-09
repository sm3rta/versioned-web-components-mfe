import { Suspense, lazy } from "react";

const ProductsPage = lazy(() => import("products/ProductsPage"));
const CartPage = lazy(() => import("cart/CartPage"));

function App() {
  return (
    <div style={{ padding: 40, border: "2px solid purple" }}>
      <h1>🏠 Welcome to the Container App</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Suspense fallback={<div>Loading Products...</div>}>
          <ProductsPage />
        </Suspense>
        <Suspense fallback={<div>Loading Cart...</div>}>
          <CartPage />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
