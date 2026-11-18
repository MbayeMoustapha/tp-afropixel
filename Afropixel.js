import pictures from "./pictures.json" with { type: "json" };

let html = "";

for (const picture of pictures) {
    html += `
    <article>
        <img src="${picture.url}" alt="image" width="200px" height="200px">
        <p>${picture.nom}</p>
        <p>${picture.prix} CFA</p>
        <p>
            <button >+</button>
            <button >-</button>
        </p>
    </article>
    `;
}

const tableau = document.querySelector(".articles");

tableau.innerHTML += html;


