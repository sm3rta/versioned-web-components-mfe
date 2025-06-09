import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { scopedRegistryPolyfill } from "../../container/scoped-custom-element-registry";
scopedRegistryPolyfill();
export const cartRegistry = new CustomElementRegistry();

const CartPage = React.lazy(() => import("./CartPage"));

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [root, setRoot] = useState<ShadowRoot | null>(null);

  // Set up the container and registry first
  useEffect(() => {
    if (containerRef.current) {
      // Create shadow root with the registry
      if (!containerRef.current.shadowRoot) {
        /*
        <div id="cart-page">
          <shadow-root>
            <div id="cart-content">
              <slot></slot>
            </div>
          </shadow-root>
        </div>
        */

        const shadowRoot = containerRef.current.attachShadow({
          mode: "open",
          registry: cartRegistry,
          delegatesFocus: true,
        } as ShadowRootInit);

        setRoot(shadowRoot);
      }
    }
  }, []);

  return (
    <div ref={containerRef} id="cart-page" style={{ border: "2px solid red", padding: 4 }}>
      {root && createPortal(<CartPage />, root)}
    </div>
  );
}

export default App;
