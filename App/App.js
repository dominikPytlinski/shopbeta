import Cart from './components/Cart.js';

class App {

    constructor()
    {
        this.render(document.getElementById('root'));
        this.cart = new Cart();
    }

    render(root)
    {
        let output = `
            <header>
                <nav>
                    <div>
                        <span><i class="fas fa-bars"></i></span>
                    </div>
                    <div>
                        <span>Confy Feriture</span>
                    </div>
                    <div>
                        <span><i class="fas fa-shopping-cart"></i></span>
                        <div class="cart-counter">
                            <span>0</span>
                        </div>
                    </div>
                </nav>
                <div>

                </div>
            </header>
            <div id="Cart"></div>
        `;

        
        // console.log(root);
        root.insertAdjacentHTML('beforeend', output);
    }

}

export default App;