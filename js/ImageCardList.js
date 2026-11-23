import pictures from "../pictures.json" with { type: "json" };
import { ImageCard } from "./ImageCard.js";

export class ImageCardListe {
    constructor() {
        this.CardListes = [];
        for (const p of pictures) {
            this.CardListes.push(
                new ImageCard(p.id, p.nom, p.url, p.prix, p.categorie),
            );
        }

        // this.CardListes = pictures.map(p => new ImageCard(p.id, p.nom, p.url, p.prix, p.categorie))

    }

    render() {
        let rendu = "";
        for (const pp of this.CardListes) {
            rendu += pp.render();
        }
        return rendu;

        // let CardListe = pictures
        //     .map((p) => {
        //         return new ImageCard(p.id, p.nom, p.url, p.prix, p.categorie).render();
        //     })
        //     .join("");
        // return CardListe;
    }
}
