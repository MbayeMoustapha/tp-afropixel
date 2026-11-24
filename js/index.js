import { ImageCardListe } from "./ImageCardList.js";

const conteneur = document.querySelector(".articles");


let imageCardList = new ImageCardListe().render()
conteneur.innerHTML += imageCardList;

