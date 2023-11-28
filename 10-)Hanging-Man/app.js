const word = document.getElementById("word")
const popup = document.getElementById("popup-container")
const message = document.getElementById("succes-message")
const correctLetters = ["j", "a","v",]
const wrongLetters = [];
const selectedWord =  getRandomWord()

//Random word function

displayWord()

function getRandomWord(){
    const words = ["javascript","phyton","node","react","css","html","java"]
    return words[Math.floor(Math.random() * words.length)]
}

// Display word innnerHTML function

function displayWord(){

    //Get random word

    //Display and split word html
    word.innerHTML = `
    ${selectedWord.split('').map(letter => `
        <div class="letter"> 
            ${correctLetters.includes(letter) ? letter: ""}
        </div>
    `).join('')}
   `;

    //search letter and compare
   const w = word.innerText.replace(/\n/g,'')
   if(w === selectedWord){
    popup.style.display = "flex"
    message.innerText = " Tebrikler Kazandınız"
}
  
}

// Add event listener keydown

window.addEventListener("keydown",function(e){
    if(e.keyCode >= 65 && e.keyCode <= 90){
         const letter = e.key
         if(selectedWord.includes(letter)){
          if(!correctLetters.includes(letter)){
            correctLetters.push(letter)
            displayWord()
          }
         }else{
           console.log("bu harfi zaten eklediniz")
         }
    }else{
        if(!wrongLetters.includes(letter)){
            wrongLetters.push(letter)
            //Wrong letter updadte
            console.log("hata")
        }
    }
 
})