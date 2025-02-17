class PaneComponent extends HTMLElement {
    constructor() {
        super();

        this.counterVal = 0;

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <div class='pane'>
                <slot />
            </div>
            <style>
            .pane {
                width: 100%;
                height: 100%;
                border-radius: 20px;

                background-color: #3c3930;
                color: #f1dfda;
                font: Roboto;
                font-weight: 400;
                font-size: 16px;
            }
            </style>
        `;
    }
}

window.customElements.define('material-pane', PaneComponent);