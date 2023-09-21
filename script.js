let Rotatebtn = document.querySelector(".fa-bars")
let websitecontainer = document.querySelector(".websitecontainer")
let hiddennavbar = document.querySelector(".hiddennavbar")

Rotatebtn.addEventListener("click", () => {
    if (websitecontainer.classList.contains("rotate")) {
        websitecontainer.classList.remove("rotate")
        websitecontainer.classList.add("unrotate")
        hiddennavbar.classList.add("hidenavbar")
        hiddennavbar.classList.remove("showingnav")
    } else {
        websitecontainer.classList.add("rotate")
        websitecontainer.classList.remove("unrotate")
        hiddennavbar.classList.add("showingnav")
        hiddennavbar.classList.remove("hidenavbar")
    }

})