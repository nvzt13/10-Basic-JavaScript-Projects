//Selected elements
const word = document.getElementById("word")
const popup = document.getElementById("popup-container")
const message = document.getElementById("succes-message")
const wrongLetters_el = document.getElementById("wrong-letters")
const items = document.querySelectorAll(".item")
const message_el = document.getElementById("message")
const button = document.getElementById("play-again")

//Global variables
const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord()

//Called functions
displayWord()

function getRandomWord() {
    const words = ["javascript", "phyton", "node", "react", "css", "html", "java"]
    return words[Math.floor(Math.random() * words.length)]
}

// Display word innnerHTML function

function displayWord() {

    //Display and split word html
    word.innerHTML = `
    ${selectedWord.split('').map(letter => `
        <div class="letter"> 
            ${correctLetters.includes(letter) ? letter : ""}
        </div>
    `).join('')}
   `;

    //search letter and compare
    const w = word.innerText.replace(/\n/g, '')
    if (w === selectedWord) {
        popup.style.display = "flex"
        message.innerText = " Tebrikler Kazandınız"
    }

}

//Hatalı hatfleri ekranda göster
function updateWrongLetters(){

    //hatalı harf elementi (div)
    wrongLetters_el.innerHTML = `
    ${wrongLetters.length > 0 ?`<h3>Hatalı Harfler</h3>`: "" }
    ${wrongLetters.map(letter => `<span> ${letter}<span>`)}
    `;

    //Hatalı harf için çubuk adamı tamamlama
    items.forEach((item,index) => {
        const errorCount = wrongLetters.length

        if(index<errorCount){
            item.style.display = "block"
        }
        else{
            item.style.display = "none"
        }
    })
}
//Display Message Function
function displayMessage(){
    message_el.classList.add("show") 
    setTimeout(function(){
    message_el.classList.remove("show") 

    },2000)
}
//Button add event listener
button.addEventListener("click",function(){
    correctLetters.splice(0)
    wrongLetters.splice(0)

    selectedWord = getRandomWord()

    displayWord()
    updateWrongLetters()

    popup.style.display = "none"
})
// Add event listener keydown
window.addEventListener("keydown", function (e) {

    // Klavyede basılan harfi yakala
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key

        // Basılan Harf dogruysa
        if (selectedWord.includes(letter)) {

            //Basılan harf daha önce girilmemiş ise
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter)
                displayWord()
            }

            //Basılan harf daha önce girilmiş ise
            else {
                displayMessage()       
        }
        }
        // Basılan harf yanlişsa
        else {
            //Hatalı harf dizisi harfi içermiyorsa ekle
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter)
                updateWrongLetters();
            }
             //Hatalı harf dizisi harfi içeriyorsa uyar
            else{
                displayMessage()
            }
        }
    }   
})