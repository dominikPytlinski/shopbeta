export class Header {

    constructor()
    {
        this.output = document.createElement('div');
    }

    Render()
    {
        this.output.innerHTML = `
            <header>
                <nav>
                    <div id="open-menu">
                        <i class="fas fa-bars"></i>
                    </div>
                    <div>
                        <span>Comfy Ferniture</span>
                    </div>
                    <div id="open-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span>0</span>
                    </div>
                </nav>
                <section>
                    <h1>Welcome to Comfy Ferniture</h1>
                    <button>start shopping</button>
                </section>
            </header>
        `;

        return this.output;
    }

}