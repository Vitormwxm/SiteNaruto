const cards = document.querySelectorAll(".js-content")
const card = document.querySelectorAll(".card") 

function activeDescription(index) {
    
    cards[index].classList.toggle("ativo")

}

card.forEach((item , index) => {
    item.addEventListener("click", () => {
        activeDescription(index)
    })
})