import { PropsWithChildren } from "react";

export class ButtonComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        :host(:is(button-component[size="small"])) button {
          --button-height: 30px;
          --button-padding: 0 10px;
        }
        :host(:is(button-component[size="medium"])) button {
          --button-height: 40px;
          --button-padding: 0 15px;
        }
        :host(:is(button-component[size="large"])) button {
          --button-height: 50px;
          --button-padding: 0 20px;
        }
        .button-component {
          height: var(--button-height, 40px);
          padding: var(--button-padding, 0 15px);
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
      </style>
      <button class="button-component">
        <slot></slot>
      </button>
    `;
  }

  connectedCallback() {
    this.setAttribute("size", this.getAttribute("size") || "medium");
  }

  static get observedAttributes() {
    return [];
  }
}

export const Button = (props: PropsWithChildren<{ size?: "small" | "medium" | "large" }>) => {
  // @ts-ignore
  return <button-component {...props} />;
};
