class AnimeItem extends HTMLElement {

    constructor() {
        super();
    }

    set anime(anime) {
        this._anime = anime;
        this.render();
    }
    // render di bawah perlu diganti ke this._anime. ...
    render() {
        this.innerHTML = `
           <img class="fan-art-club" src="${this._anime.image_url}" alt="Fan Art">
           <div class="club-info">
               <h2>${this._anime.title}</h2>
               <p>${this._anime.type}</p>
           </div>`;
    }
}

customElements.define("anime-item", AnimeItem);