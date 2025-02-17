class MyCustomComponent extends HTMLElement {
  constructor() {
    super();

    this.counterVal = 0;

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <div id='element'>
        <slot></slot>
      </div>
      <style>
      div {
        font-family: Roboto;
        font-size: 15pt;
        font-weight: 600;
        width: 100pt;
        height: 25pt;
        border-radius: 12.5pt;
        background-color: lightgray;
        align-content: center;
        text-align: center;
        margin: 5pt;
      }
      </style>
    `

    this.element = this.shadowRoot.getElementById('element');
  }

  connectedCallback() {
    // Set the property from the attribute
    this.text = this.getAttribute('text');
    if (this.text != undefined && this.text != null && this.text.length > 0) {
      this.element.innerHTML = this.text;
    }

    // Set the onclick event from the attribute
    const onClickValue = this.getAttribute('onclick');
    if (onClickValue) {
      this.element.addEventListener('click', (event) => {
        // Call a global function by name
        if (typeof window[onClickValue] === 'function') {
          windowonClickValue;
        }
      });
    }
  }

  counter(del) {
    this.counterVal += del;
    this.element.innerHTML = this.counterVal;
  }
}

window.customElements.define('my-custom-component', MyCustomComponent);