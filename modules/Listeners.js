

export class Listeners {

    constructor(){
        this.methods = [
            {
                name: 'openCart',
                method: this.OpenCart
            }
        ];
    }

    AddListener(element, type, name)
    {
        element.addEventListener(type, e => {
            for(let m of this.methods) {
                (m.name == name) ? m.method() : console.log('dupa');
            }
        });
    }

    OpenCart()
    {
        const cart = document.querySelector('#cart');

        cart.classList.add('show-cart');
    }

}