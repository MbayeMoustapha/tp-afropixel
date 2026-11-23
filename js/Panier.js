
export class Panier {
    constructor(produits) {
        this.produits = produits;
        this.quantites = {};
    }

    ajouter(id) {
        this.quantites[id] = (this.quantites[id] || 0) + 1;
    }

    retirer(id) {
        if (!this.quantites[id]) return;
        this.quantites[id]--;
        if (this.quantites[id] === 0) delete this.quantites[id];
    }

    quantite(id) {
        return this.quantites[id] || 0;
    }

    articles() {
        return this.produits.filter((p) => this.quantite(p.id) > 0);
    }

    total() {
        return this.articles().reduce(
            (somme, p) => somme + p.prix * this.quantite(p.id),
            0,
        );
    }

    render() {
        const lignes = this.articles()
            .map(
                (p) => `
                <article>
                    <img src="${p.url}" alt="${p.nom}" width="60px" height="60px">
                    <span>${p.nom}</span>
                    <span>${this.quantite(p.id)} x ${p.prix} CFA</span>
                    <span>${this.quantite(p.id) * p.prix} CFA</span>
                </article>`,
            )
            .join("");

        if (!lignes) return "<p>Panier vide</p>";
        return `${lignes}<p><strong>Total : ${this.total()} CFA</strong></p>`;
    }
}
