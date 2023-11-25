const container = document.querySelector(".container")
const count = document.getElementById("count")
const amount = document.getElementById("amount")
const select = document.getElementById("movie")
const seats = document.querySelectorAll(".seat:not(.reserved)")

// koltuklara tıklanınca oluşan addevent
container.addEventListener("click", function(e){
    //koltuk seat sınıfını içeriyorsa ve reserved sınıfını içermiyorsa işlem yap
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved") ){
        e.target.classList.toggle("selected")
        
        calculaterTotal()
    }
})
// film değişirse
select.addEventListener("change",function(e){
    calculaterTotal()
})

//kaç koltuk seçildi ve fiyatını hesaplayan  fonksiyon
function calculaterTotal(){
    // 
    const selectedSeat = container.querySelectorAll(".seat.selected")
    //seçili koltukları içeren dizi
    const selectedSeatArr = [];
    //bütün koltukların içeren dizi(reserve hariç)
    const seatsArr = [];

    selectedSeat.forEach(function(seat){
        selectedSeat.push(seat)
    })

    let countSelectedSeat = selectedSeat.length;
    amount.innerHTML = select.value * countSelectedSeat
    count.innerHTML = countSelectedSeat
}