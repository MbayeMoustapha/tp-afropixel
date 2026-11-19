import pictures from "../pictures.json" with { type: "json" };
import { ImageCard } from "./ImageCard.js";

export class ImageCardListe {

    render() {
        let CardListe = pictures
            .map((p) => {
                return new ImageCard(p.id, p.nom, p.url, p.prix, p.categorie).render();
            })
            .join("");
        return CardListe;
    }
}