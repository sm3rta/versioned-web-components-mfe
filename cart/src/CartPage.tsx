import { cartRegistry } from "./App";
import { Button, ButtonComponent } from "./components/button";

// Define the new element
cartRegistry.define("button-component", ButtonComponent);

const CartPage = () => {
  return (
    <>
      <h2>🛍️ This is the Carts MFE, using v1 of components</h2>
      <Button size="small">Button v1</Button>
      <Button size="medium">Button v1</Button>
      <Button size="large">Button v1</Button>
    </>
  );
};

export default CartPage;
