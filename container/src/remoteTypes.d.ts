// src/remoteTypes.d.ts

declare module "products/ProductsPage" {
  // Declares that the module exists and exports a default React component.
  // You can make the type more specific if you know the component's props,
  // e.g., React.ComponentType<{ someProp: string }>
  // For now, React.ComponentType is a good general type.
  const ProductsPage: React.ComponentType;
  export default ProductsPage;
}

declare module "cart/CartPage" {
  // Declares that the module exists and exports a default React component.
  const CartPage: React.ComponentType;
  export default CartPage;
}

// If your remotes exposed NAMED exports instead of default, you'd do:
/*
  declare module 'someRemote/SomeComponent' {
    export const SomeComponent: React.ComponentType;
    export function someUtilFunction(): void;
  }
  */
