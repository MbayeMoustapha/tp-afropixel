
export class Panier {
    constructor(imageCard) {
        this.imageCard = imageCard;
    }

    articles() {
        return this.imageCard.filter((p) => p.quantites > 0);
    }

    total() {
        return this.articles().reduce(
            (somme, p) => somme + p.prix * p.quantites,
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
                    <span>${p.quantites} x ${p.prix} CFA</span>
                    <span>${p.quantites * p.prix} CFA</span>
                </article>`,
            )
            .join("");

        if (!lignes) return "<p>Panier vide</p>";
        return `${lignes}<p><strong>Total : ${this.total()} CFA</strong></p>`;
    }
}
