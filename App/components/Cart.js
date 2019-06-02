export class Cart {

    constructor()
    {
        this.output = document.createElement('div');
    }

    Render()
    {
        this.output.innerHTML = `
            <div id="cart">
                <div class="cart-header">
                    <i class="fas fa-times" id="close-cart"></i>
                </div>
                <div class="cart-body">
                    <img src="./assets/images/sofa.jpg" alt="product photo">
                    <span class="price">$10</span>
                    <div class="cart-item-counter">
                        <span><i class="fas fa-angle-up"></i></span>
                        <span>1</span>
                        <span><i class="fas fa-angle-down"></i></span>
                    </div>
                </div>
                <div class="cart-footer">
                    <span>Total: </span>
                    <span>$10</span>
                </div>
            </div>
        `;

        return this.output;
    }

}