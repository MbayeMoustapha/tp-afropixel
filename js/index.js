import { ImageCardListe } from "./ImageCardList.js";
import { Panier } from "./Panier.js";

const conteneurPanier = document.querySelector(".panier");
const conteneur = document.querySelector(".articles");
const logo = document.querySelector(".logo");

const imageCardList = new ImageCardListe();
const panier = new Panier(imageCardList.CardListes);

conteneur.innerHTML += imageCardList.render();
conteneurPanier.innerHTML = panier.render();

logo.addEventListener("click", () => {
    conteneurPanier.classList.toggle("cache");
});

function miseAJour(id) {
    document.getElementById(`qte-${id}`).textContent = panier.quantite(id);
    conteneurPanier.innerHTML = panier.render();
}

conteneur.addEventListener("click", (e) => {
    if (e.target.classList.contains("ajouter")) {
        const id = e.target.dataset.ajouter;
        panier.ajouter(id);
        miseAJour(id);
    }

    if (e.target.classList.contains("retirer")) {
        const id = e.target.dataset.retirer;
        panier.retirer(id);
        miseAJour(id);
    }
});