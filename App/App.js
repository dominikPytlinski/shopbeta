import { Listeners } from '../modules/Listeners.js';

import { Header } from './components/Header.js';
import { Cart } from './components/Cart.js';

export class App {

    constructor(root)
    {
        this.listener = new Listeners();
        this.header = new Header();
        this.cart = new Cart();

        root.innerHTML = this.Render();

        this.listener.AddListener(document.querySelector('#open-cart'), 'click', 'openCart');
    }

    Render()
    {
        return `
            <div>
                ${this.header.Render().innerHTML}
                ${this.cart.Render().innerHTML}
            </div>
        `;
    }
}