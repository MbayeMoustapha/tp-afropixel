import { ImageCardListe } from "./ImageCardList.js";

const conteneur = document.querySelector(".articles");

const quantiteImage = {};

let imageCardList = new ImageCardListe().render()
conteneur.innerHTML += imageCardList;

conteneur.addEventListener("click", (e) => {
    if (e.target.classList.contains("ajouter")) {
        const id = e.target.dataset.ajouter;

        quantiteImage[id] = (quantiteImage[id] || 0) + 1;

        document.getElementById(`qte-${id}`).textContent = quantiteImage[id];
        // console.log("quantite actuel :", quantiteImage);
    }

    if (e.target.classList.contains("retirer")) {
        const id = e.target.dataset.retirer;

        if (quantiteImage[id] && quantiteImage[id] > 0) {
            quantiteImage[id]--;

            document.getElementById(`qte-${id}`).textContent = quantiteImage[id];

            // console.log("quantite  actuel :", quantiteImage);
        }
    }
});

// const p = document.querySelector(".panier");

// class ArticleAjouter {
//     constructor(id,nom,url,prix){
//         this.id = id;
//         this.nom = nom;
//         this.url = url;
//         this.prix = prix;
//     }

//     render() {

//         return `
//                 <article>
//                     <img src="${this.url}" alt="image" width="200px" height="200px">
//                     <span>${this.nom}</span>
//                     <span>${this.prix} CFA</span>

//                 </article>
//             `;
//     }
// }

// class Panier {
//     render(){
      
//     }
// }

// p.innerHTML+= new ArticleAjouter()
