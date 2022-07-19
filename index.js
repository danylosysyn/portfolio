const portfolioImageDiv = document.querySelector(".container__image");
const mainImageContainer = document.getElementById("mainImageContainer");
const mainImageArrow = document.getElementsByClassName("arrow")[0];

portfolioImageDiv.addEventListener("mouseover", () => {
    mainImageContainer.style.filter = "brightness(50%)";
    mainImageArrow.style.display = "none"
})

