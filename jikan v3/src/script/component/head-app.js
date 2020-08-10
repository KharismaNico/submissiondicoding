class HeadApp extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML=`
       <h2>MyAnimeList using Jikan.moe</h2>`;
    }
}

customElements.define("head-app", HeadApp);