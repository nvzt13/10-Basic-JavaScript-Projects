const word = document.getElementById("word")
const correctLetters = ["j", "a"," "]
const wrongLetters = []
//Random word function

function getRandomWord(){
    const words = ["javascript","phyton","node","react","css","html"]
    return words[Math.floor(Math.random() * words.length)]
}

// Display word innnerHTML function

function displayWord(){
    const selectedWord =  getRandomWord()

    word.innerHTML = `
    ${selectedWord.split('').map(letter => `
        <div class="letter"> 
            ${correctLetters.includes(letter) ? letter : " "}
        </div>
    `).join('')}
   `;
   console.log(word.innerText)
}
displayWord()
