const goButton = document.getElementsByClassName("goButton")[0];
const skillsDiv = document.getElementById("skillsDiv");

goButton.addEventListener("click", () => {
    skillsDiv.style.display = "block";
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    })
})
