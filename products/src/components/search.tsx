export class SearchComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        :host icon-component {
          margin-right: 8px;
        }
        :host input {
          all: unset;
          border: 2px solid #0e77bd;
          border-right: 0;
          border-bottom-left-radius: 4px;
          border-top-left-radius: 4px;
          padding: 0 10px;
        }
        :host div {
          display: flex;
        }
        :host svg {
          width: 16px;
          height: 16px;
          margin-top: 2px;
        }
      </style>
      <div>
        <input title="Search" type="text" placeholder="Search products..." />
        <button-component size="small" embedded>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </button-component>
      </div>
    `;
  }

  connectedCallback() {}
}

export const Search = () => {
  // @ts-ignore
  return <search-component />;
};
