const formWrapper = document.querySelector(".form-wraper")
const form = document.querySelector("#form")
const searchInput = document.querySelector("#searchInput")
const  buttonwrapper = document.querySelector(".button-wrapper")
const searchButton = document.querySelector("#searchButton")
const clearButton = document.querySelector("#clearButton")
const imageListWrapper = document.querySelector(".imagelist-wrapper")

runeventListener()

function runeventListener(){
    form.addEventListener("submit",search)
    clearButton.addEventListener("click",clear)
}

function clear(){
    searchInput.value = " " 
    imageListWrapper.innerHTML = " "
}
// search buttonuna basınca istek gönderen metod
function search(e){
    const value = searchInput.value.trim()
    e.preventDefault()
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,// istegi atacagımız adres
    { 
        method : "GET",
        headers : {
            Authorization : "Client-ID 2kFjNQnV5b3Gu8paTIJ79UkMwm2N5i1LMbqMM2k0mQ0" // veri labilmek için aldıgımız ID
        }
    })
    .then((res) => res.json())
    .then((data) =>{
       Array.from(data.results).forEach((image) => {
        addImageToUI(image.urls.small)
       }) 
    })
    .catch((err) => console.log(err))
}
// gelen veri içindeki resim url sini alıp ekrana basacak metod
function addImageToUI(url){
    const div = document.createElement("div")
    div.className = "card"

    const img = document.createElement("img")
    img.setAttribute("src",url)
    img.height = "400"
    img.width = "400"

    div.appendChild(img)
    imageListWrapper.appendChild(div)

}