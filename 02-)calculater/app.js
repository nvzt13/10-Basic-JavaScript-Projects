//degişkenleri seçme
const display = document.querySelector(".caculate-input")
const keys = document.querySelector(".calculater-keys")

let displayValue = "0" // input görülecek olan deger
let firstValue = null; //ilk basılan sayı
let operator = null; // basılan operatör
let waitingForSecondValue = false; // bir deger giirilip bir operatore basılınca yeni bir deger alma durumu

//input degerini çagırılınca güncelleyen metod
updateDisplay()
function updateDisplay() {
    display.value = displayValue;
}

//buttonlara click eventi ekle
keys.addEventListener('click', (e) => {
    const element = e.target    
    const value = element.value
    // calculater-keys divinde basılan yer button elementi degilse çalışma
    if (!element.matches("button")) return;

    switch(value){
        case "+": 
        case "-": 
        case "*": 
        case "/": 
        case "=":
            handleOperator(value) 
            break;
        case ".":
            inputDecimal()
            break;
        case "AC":
            clear()
            break;
        default:
            inputNumber(element.value)

    }
    updateDisplay()
})

// alınan operator bilgisini işleyecek metod
function handleOperator(nextOperator){
    const value = parseFloat(displayValue)
    
    if(operator && waitingForSecondValue){
        operator = nextOperator
        return;
    }
    
    // bir deger girilmemiş ise girilen degeri tut
    if(firstValue === null){
        firstValue = value;
    }   else if(operator){
        const result = calculate(firstValue,value,operator)
            displayValue =`${parseFloat(result.toFixed(7))}`
            firstValue = result
    }
    // bir deger girilmişş ise ikinci degeri bekle
   
    waitingForSecondValue = true;
    operator = nextOperator
    console.log(firstValue,displayValue,waitingForSecondValue,operator)

}
 // işlemleri yapan metod
function calculate(first,second,operator){
    if(operator === "+"){
        return first + second;
    } else if(operator === "-"){
        return first - second;
    } else if (operator === "*"){
        return first * second;
    } else if (operator === "/"){
        return first / second;
    }
    return second;

}

//basılan butonun value bilgisini displayValue'ye aktaracak metod
function inputNumber(num) {
    //bir deger girilmiş ise
    if(waitingForSecondValue){
        displayValue = num;
        waitingForSecondValue = false;
    }
    else{
        //bir deger girilmemiş ise
        displayValue = displayValue === "0" ? num : displayValue + num
    }
        console.log(firstValue,displayValue,waitingForSecondValue,operator)
}

//decimal butununa basılınca sadece bir kere eklenecek olan nokta
function inputDecimal() {
    if (!displayValue.includes(".")) {
        displayValue += "."
    }
}

//clear butununa basılınca ekranı temizlyecek metod
function clear() {
    displayValue = "0"
}

