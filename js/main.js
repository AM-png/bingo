let div = document.querySelector("div")

div.addEventListener("click", select)

function select(event) {
    event.target.style.background = "rgb(255, 169, 137)"
}