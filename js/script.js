
"use strict";

const searchInput = document.querySelector("#search");
const articleCards = document.querySelectorAll(".article-card");
const noResults = document.querySelector("#no-results");

searchInput.addEventListener("input", () => {
    const query = searchInput.value
        .trim()
        .toLocaleLowerCase("fr");

    let visibleCount = 0;

    articleCards.forEach((card) => {
        const content = card.textContent.toLocaleLowerCase("fr");
        const matches = content.includes(query);

        card.hidden = !matches;

        if (matches) {
            visibleCount++;
        }
    });

    noResults.hidden = visibleCount !== 0;
});
