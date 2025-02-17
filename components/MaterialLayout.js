class Layout extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open', slotAssignment:"named" });

        shadow.innerHTML = `
            <div id='layout' class='layout'></div>
            <style>
            .layout {
                width: calc(100vw - 8px);
                height: calc(100vh - 8px);
                background-color: #15130b;

                padding: 4px;

                display: flex;
            }
            .layoutItem {
                flex: 1;
                margin: 12px;
            }
            </style>
        `;

        this.layout = this.shadowRoot.getElementById('layout');

        window.addEventListener('resize', () => {
            this.applyLayout();
        })
    }

    connectedCallback() {
        this.targetPanes = parseInt(this.getAttribute('target-panes'));
        this.applyLayout();
    }

    applyLayout() {
        this.layout.innerHTML = '';

        if(window.innerWidth >= 1600 && this.targetPanes > 2) {
            this.layout.innerHTML += this.createLayoutItem("left");
        }
        this.layout.innerHTML += this.createLayoutItem("");
        if(window.innerWidth >= 840 && this.targetPanes > 1) {
            this.layout.innerHTML += this.createLayoutItem("right");
        }
    }

    createLayoutItem(slotName) {
        return `
            <div id='${slotName + 'layoutItem'}' class='layoutItem'>
                <material-pane>
                    ${slotName.length > 0 ? `<slot name='${slotName}'></slot>` : `<slot></slot>`}
                </material-pane>
            </div>
        `;
    }

    /* 
    reserveSecondary(comfy: bool?) {
        if window > 840 || (!comfy && window > 600){
            openFrame with no content (transparent)
        }
    }
    */

    /* 
    setSecondaryContent(content, comfy: bool?) {
        if window > 840 || (!comfy && window > 600){
            openFrame with content
        } else {
            replace primary 
        }
    }
    */

    /* 
    setTertiaryContent(content, comfy: bool?) {
        if no secondary {
            setSecondaryContent(content, comfy)
            return
        }
        if window >= 1600 {
            openFrame 3rd Frame with content
        } else {
            replace secondary
        }
    }
    */
}

window.customElements.define('material-layout', Layout);