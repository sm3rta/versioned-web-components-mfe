import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { scopedRegistryPolyfill } from "../../container/scoped-custom-element-registry";
scopedRegistryPolyfill();
export const productsRegistry = new CustomElementRegistry();

const ProductsPage = React.lazy(() => import("./ProductsPage"));

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [root, setRoot] = useState<ShadowRoot | null>(null);

  // Set up the container and registry first
  useEffect(() => {
    if (containerRef.current) {
      // Create shadow root with the registry
      if (!containerRef.current.shadowRoot) {
        /*
        <div id="products-page">
          <shadow-root>
            <div id="products-content">
              <slot></slot>
            </div>
          </shadow-root>
        </div>
        */

        const shadowRoot = containerRef.current.attachShadow({
          mode: "open",
          registry: productsRegistry,
          delegatesFocus: true,
        } as ShadowRootInit);

        setRoot(shadowRoot);
      }
    }
  }, []);

  return (
    <div ref={containerRef} id="products-page" style={{ border: "2px solid green", padding: 4 }}>
      {root && createPortal(<ProductsPage />, root)}
    </div>
  );
}

export default App;
