
export class ImageCard {
    constructor(id, nom, url, prix, categorie) {
        this.id = id;
        this.nom = nom;
        this.url = url;
        this.prix = prix;
        this.categorie = categorie;
    }

    render() {
        return `
                <article>
                    <img src="${this.url}" alt="image" width="200px" height="200px">
                    <p>${this.nom}</p>
                    <p>${this.prix} CFA</p>
                    <div>
                        <button class="ajouter" data-ajouter="${this.id}">+</button>
                        <span class="quantite" id="qte-${this.id}">0</span>
                        <button class="retirer" data-retirer="${this.id}">-</button>
                    </div>
                </article>
            `;
    }
}