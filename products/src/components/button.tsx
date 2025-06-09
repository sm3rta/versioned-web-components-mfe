import { PropsWithChildren } from "react";

export class ButtonComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        :host(:is(button-component[size="xsmall"])) button {
          --button-height: 25px;
          --button-padding: 0 8px;
        }
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
        :host(:is(button-component[size="xlarge"])) button {
          --button-height: 60px;
          --button-padding: 0 25px;
        }
        :host(:is(button-component[embedded])) button {
          background-color: transparent;
          border: 2px solid #0e77bd;
          color: #0e77bd;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        .button-component {
          height: var(--button-height, 40px);
          padding: var(--button-padding, 0 15px);
          background-color: #0e77bd;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        :host icon-component {
          margin-right: 8px;
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

export const Button = (
  props: PropsWithChildren<{ size?: "xsmall" | "small" | "medium" | "large" | "xlarge"; embedded?: boolean }>
) => {
  // @ts-ignore
  return <button-component {...props}>{props.children}</button-component>;
};
