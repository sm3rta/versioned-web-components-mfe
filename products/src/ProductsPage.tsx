import { productsRegistry } from "./App";
import { ButtonComponent, Button } from "./components/button";
import { SearchComponent, Search } from "./components/search";

// Define the new element
productsRegistry.define("button-component", ButtonComponent);
productsRegistry.define("search-component", SearchComponent);

const ProductsPage = () => {
  return (
    <>
      <h2>🛍️ This is the Products MFE, using v2 of components</h2>
      <Button size="xsmall">Button v2</Button>
      <Button size="small">Button v2</Button>
      <Button size="medium">Button v2</Button>
      <Button size="large">Button v2</Button>
      <Button size="xlarge">Button v2</Button>

      <p>
        Inspect the search field component, and note how it utilizes the <code>&lt;button-component&gt;</code> as an
        icon button with a magnifying glass icon.
        <br />
        This is proof that the forked version of the polyfill correctly supports nested custom elements
      </p>

      <Search />
    </>
  );
};

export default ProductsPage;
