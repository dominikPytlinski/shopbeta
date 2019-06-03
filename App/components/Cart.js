class Cart {

    constructor()
    {
        this.render(document.querySelector('#Cart'));
    }

    render(Cart)
    {
        let output = ``

        Cart.insertAdjacentHTML('beforeend', output);
    }

}

export default Cart;