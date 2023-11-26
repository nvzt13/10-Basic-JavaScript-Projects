const container = document.querySelector(".container")
const count = document.getElementById("count")
const amount = document.getElementById("amount")
const select = document.getElementById("movie")
const seats = document.querySelectorAll(".seat:not(.reserved)")

getFromLocalStorage()
calculaterTotal()
// koltuklara tıklanınca oluşan addevent
container.addEventListener("click", function(e){

    //koltuk seat sınıfını içeriyorsa ve reserved sınıfını içermiyorsa işlem yap
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved") ){
        e.target.classList.toggle("selected")

        //fiyatı ekrana yazdır
        calculaterTotal()
    }
})

// film değişirse işlemi tekrar yap
select.addEventListener("change",function(e){
    calculaterTotal()
})

//kaç koltuk seçildi ve fiyatını hesaplayan  fonksiyon
function calculaterTotal(){

    // seçilen koltukları yakala
    const selectedSeat = container.querySelectorAll(".seat.selected")

    //seçili koltukları içeren dizi
    const selectedSeatArr = [];

    //bütün koltukların içeren dizi(reserve hariç)
    const seatsArr = [];

    //seçilen koltuklar dizisini doldur
    selectedSeat.forEach(function(seat){
        selectedSeatArr.push(seat)
    })

     //bütün kolltukları diziye doldur
    seats.forEach(function(seat){
        seatsArr.push(seat)
    })
    
    //seçilen koltukların indexini bul
    let selectedSeatIndexs = selectedSeatArr.map(function(seat){
        return seatsArr.indexOf(seat)
    })

    //seçilen film ve koltuk satısına göre fiyat
    let countSelectedSeat = selectedSeat.length;
    amount.innerHTML = select.value * countSelectedSeat
    count.innerHTML = countSelectedSeat

    //seçilen koltukların indexlertini local storage'ye ekle
    saveToLocalStorage(selectedSeatIndexs)
}
function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeat"))

    if(selectedSeats !=null  && selectedSeats.length > 0){
        seats.forEach(function(seat,index){
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected")
            }
        })
    }

 
    const selectedMovieIndex = JSON.parse(localStorage.getItem("selectedMovieIndex"))

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex
    }
}

// local storage kaydetme
function saveToLocalStorage(indexs){
    localStorage.setItem("selectedSeat",JSON.stringify(indexs))
    localStorage.setItem("selectedMovieIndex",select.selectedIndex)
}