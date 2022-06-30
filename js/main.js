let div = document.querySelectorAll("div")

for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', select = () => {
        div[i].style.background = "rgb(255, 169, 137)"
    })
}