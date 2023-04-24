const tituloBanner = document.querySelector("#receitas-com-afeto h1");

tituloBanner.addEventListener("mouseover", () => {
    tituloBanner.classList.add("animate__animated", "animate__bounce");
});

tituloBanner.addEventListener("mouseout", () => {
    tituloBanner.classList.remove("animate__animated", "animate__bounce");
});

new Pageable(".container");