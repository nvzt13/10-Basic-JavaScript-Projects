const container = document.querySelector(".container")
const count = document.getElementById("count")
const amount = document.getElementById("amount")
const select = document.getElementById("movie")

container.addEventListener("click", function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved") ){
        e.target.classList.toggle("selected")
        calculaterTotal()
    }
})

select.addEventListener("change",function(e){
    calculaterTotal()
})

function calculaterTotal(){
    let countSelectedSeat = container.querySelectorAll(".seat.selected").length;
    let price = select.value * countSelectedSeat
    amount.innerHTML = price
    count.innerHTML = countSelectedSeat
}