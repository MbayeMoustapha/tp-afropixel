import pictures from "./pictures.json" with { type: "json" };

const conteneur = document.querySelector(".articles");

class ImageCard {
    constructor(id, nom, url, prix) {
        this.id = id;
        this.nom = nom;
        this.url = url;
        this.prix = prix;
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

class ImageCardListe {
    constructor() {}

    render() {
        let CardListe = pictures
            .map((p) => {
                return new ImageCard(p.id, p.nom, p.url, p.prix).render();
            })
            .join("");
        return CardListe;
    }
}

const quantiteImage = {};

conteneur.innerHTML += new ImageCardListe().render();

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
            quantiteImage[id]

            document.getElementById(`qte-${id}`).textContent = quantiteImage[id];

            // console.log("quantite  actuel :", quantiteImage);
        }
    }
});

const p = document.querySelector(".panier");

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
